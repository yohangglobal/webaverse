/*
this file contains the universe/meta-world/scenes/multiplayer code.
responsibilities include loading the world on url change.
*/

import metaversefile from 'metaversefile';
import {NetworkRealms} from 'multiplayer-do/public/network-realms.mjs';
// TODO: Delete old multiplayer code.
/*
import WSRTC from 'wsrtc/wsrtc.js';
*/
import * as Z from 'zjs';

import {appsMapName, partyMapName, initialPosY, playersMapName, realmSize} from './constants.js';
import {loadOverworld} from './overworld.js';
import {partyManager} from './party-manager.js';
import physicsManager from './physics-manager.js';
// TODO: Delete old multiplayer code.
/*
import physxWorkerManager from './physx-worker-manager.js';
*/
import {playersManager} from './players-manager.js';
import {parseQuery} from './util.js';
import {world} from './world.js';
import {defaultSceneName} from './endpoints.js';
import {sceneManager} from './scene-manager.js';
import spawnManager from './spawn-manager.js';
import {rootScene} from './renderer.js';

class Universe extends EventTarget {
  constructor() {
    super();
    this.wsrtc = null;

    this.currentWorld = null;
    this.sceneLoadedPromise = null;

    this.multiplayerEnabled = false;
    this.multiplayerConnected = false;
    this.realms = null;
  }

  getWorldsHost() {
    return window.location.protocol + '//' + window.location.hostname + ':' +
      ((window.location.port ? parseInt(window.location.port, 10) : (window.location.protocol === 'https:' ? 443 : 80)) + 1) + '/worlds/';
  }

  async enterWorld(worldSpec, locationSpec) {
    this.disconnectSingleplayer();
    this.disconnectMultiplayer();
    // TODO: Delete old multiplayer code.
    /*
    this.disconnectRoom();
    */
    
    const localPlayer = metaversefile.useLocalPlayer();
    /* localPlayer.teleportTo(new THREE.Vector3(0, 1.5, 0), camera.quaternion, {
      relation: 'float',
    }); */
    if (locationSpec) {
      localPlayer.position.copy(locationSpec.position);
    } else {
      localPlayer.position.set(0, initialPosY, 0);
    }
    localPlayer.characterPhysics.setPosition(localPlayer.position);
    localPlayer.characterPhysics.reset();
    localPlayer.updateMatrixWorld();
    // physicsManager.setPhysicsEnabled(true);
    // localPlayer.updatePhysics(0, 0);
    const physicsScene = physicsManager.getScene();
    physicsScene.setPhysicsEnabled(false);

    const _doLoad = async () => {
      // world.clear();

      const promises = [];
      const {src, room} = worldSpec;
      this.multiplayerEnabled = room !== undefined;
      if (!this.multiplayerEnabled) {
        await this.connectSinglePlayer();

        let match;
        if (src === undefined) { // default load
          // const sceneNames = await sceneManager.getSceneNamesAsync();
          const p = (async () => {
            const app = await metaversefile.createAppAsync({
              start_url: sceneManager.getSceneUrl(defaultSceneName),
            });
            return app;
          })();
          promises.push(p);
        } else if (src === '') { // blank load
          // nothing
        } else if (match = src.match(/^weba:\/\/(-?[0-9\.]+),(-?[0-9\.]+)(?:\/|$)/i)) { // world load
          const [, x, y] = match;
          const [x1, y1] = [parseFloat(x), parseFloat(y)];
          const p = loadOverworld(x1, y1);
          promises.push(p);
        } else { // src load
          const p = (async () => {
            const app = await metaversefile.createAppAsync({
              start_url: src,
            });
            rootScene.add(app);
            return app;
          })();
          promises.push(p);
        }
      } else {
        const p = (async () => {
          await this.connectMultiplayer(src, room);
        })();
        promises.push(p);
      }
      // TODO: Delete old multiplayer code.
      /*
      } else {
        const p = (async () => {
          const roomUrl = this.getWorldsHost() + room;
          await this.connectRoom(roomUrl);
        })();
        promises.push(p);
      }
      */

      this.sceneLoadedPromise = Promise.all(promises)
        .then(() => {});
      await this.sceneLoadedPromise;
      this.sceneLoadedPromise = null;
    };
    await _doLoad();

    localPlayer.characterPhysics.reset();
    physicsScene.setPhysicsEnabled(true);
    localPlayer.updatePhysics(0, 0);

    this.currentWorld = worldSpec;

    await spawnManager.spawn();

    this.dispatchEvent(new MessageEvent('worldload'));
  }

  // TODO: Delete unused code.
  /*
  async reload() {
    await this.enterWorld(this.currentWorld);
  }
  */

  async pushUrl(u) {
    history.pushState({}, '', u);
    window.dispatchEvent(new MessageEvent('pushstate'));
    await this.handleUrlUpdate();
  }

  async handleUrlUpdate() {
    const q = parseQuery(location.search);
    await this.enterWorld(q);
  }

  async enterMultiplayer(url) {
    history.pushState({}, '', url);
    window.dispatchEvent(new MessageEvent('pushstate'));
    const worldSpec = parseQuery(location.search);
    const locationSpec = {
      position: playersManager.getLocalPlayer().position,
    };
    await this.enterWorld(worldSpec, locationSpec);
  }

  isSceneLoaded() {
    return !this.sceneLoadedPromise;
  }

  async waitForSceneLoaded() {
    if (this.sceneLoadedPromise) {
      await this.sceneLoadedPromise;
    } else {
      if (this.currentWorld) {
        // nothing
      } else {
        await new Promise((accept, reject) => {
          this.addEventListener('worldload', e => {
            accept();
          }, {once: true});
        });
      }
    }
  }

  isConnected() { return this.multiplayerConnected; }

  getConnection() { return this.wsrtc; }

  connectState(state) {
    this.state = state;
    state.setResolvePriority(1);

    playersManager.clearRemotePlayers();
    playersManager.bindState(state.getArray(playersMapName));

    world.appManager.unbindState();
    world.appManager.clear();
    const appsArray = state.get(appsMapName, Z.Array);
    world.appManager.bindState(appsArray);

    const partyMap = state.get(partyMapName, Z.Map);
    partyManager.bindState(partyMap);

    const localPlayer = playersManager.getLocalPlayer();
    localPlayer.bindState(state.getArray(playersMapName));
  }

  // Called by enterWorld() when a player connects as single-player.
  async connectSinglePlayer(state = new Z.Doc()) {
    this.connectState(state);
  }

  // Called by enterWorld() to ensure we aren't connected as single player.
  disconnectSingleplayer() {
    // Nothing to do.
  }

  // Called by enterWorld() when a player enables multi-player.
  async connectMultiplayer(src, room, state = new Z.Doc()) {
    console.log('Connect multiplayer');
    if (src === undefined || room === undefined) {
      console.error('Multiplayer src and room must be defined.')
      return;
    }

    this.connectState(state);

    // Set up the network realms.
    const localPlayer = playersManager.getLocalPlayer();
    this.realms = new NetworkRealms(room, localPlayer.playerId);

    // Handle remote players joining and leaving the set of realms.
    // These events are received both upon starting and during multiplayer.
    const virtualPlayers = this.realms.getVirtualPlayers();
    virtualPlayers.addEventListener('join', async e => {
      const {playerId, player} = e.data;
      console.log('Player joined:', playerId);
    });
    virtualPlayers.addEventListener('leave', e => {
      const {playerId} = e.data;
      console.log('Player left:', playerId);
    });

    const onConnect = async position => {
      const localPlayer = playersManager.getLocalPlayer();

      // Initialize network realms player.
      this.realms.localPlayer.initializePlayer({
        position,
      }, {});

      // Load the scene.
      await metaversefile.createAppAsync({
        start_url: src,
      });

      console.log('Multiplayer connected');
      this.multiplayerConnected = true;
    };

    // Initiate network realms connection.
    await this.realms.updatePosition(localPlayer.position.toArray(), realmSize, {
      onConnect,
    });

    // Wait for world apps to be loaded so that avatar doesn't fall.
    const TEST_INTERVAL = 100;
    const MAX_TIMEOUT = 20000;
    const startTime = Date.now();
    while (world.appManager.pendingAddPromises.size > 0 && (Date.now() - startTime) < MAX_TIMEOUT) {
      await new Promise(resolve => setTimeout(resolve, TEST_INTERVAL));
    }
  }

  // Called by enterWorld() to ensure we aren't connected to multi-player.
  disconnectMultiplayer() {
    if (!this.multiplayerConnected) {
      return;
    }

    this.multiplayerConnected = false;

    if (this.realms) {
      this.realms.disconnect();
      this.realms = null;
    }

    console.log('Multiplayer disconnected');
  }

  // TODO: Delete old multiplayer code.
  /*
  // called by enterWorld() in universe.js
  // This is called when a user joins a multiplayer room
  // either from single player or directly from a link
  async connectRoom(u, state = new Z.Doc()) {
    this.state = state;
    // Players cannot be initialized until the physx worker is loaded
    // Otherwise you will receive allocation errors because the module instance is undefined
    await physxWorkerManager.waitForLoad();
    const localPlayer = playersManager.getLocalPlayer();

    state.setResolvePriority(1);

    // Create a new instance of the websocket rtc client
    // This comes from webaverse/wsrtc/wsrtc.js
    this.wsrtc = new WSRTC(u, {
      localPlayer,
      crdtState: state,
    });

    // This is called when the websocket connection opens, i.e. server is connectedw
    const open = e => {
      playersManager.clearRemotePlayers();
      this.wsrtc.removeEventListener('open', open);
      // Clear the last world state
      const appsArray = state.get(appsMapName, Z.Array);

      playersManager.bindState(state.getArray(playersMapName));

      // Unbind the world state to clear existing apps
      world.appManager.unbindState();
      world.appManager.clear();
      // Bind the new state
      world.appManager.bindState(appsArray);

      // Called by WSRTC when the connection is initialized
      const init = e => {
        this.wsrtc.removeEventListener('init', init);

        const partyMap = state.get(partyMapName, Z.Map);
        partyManager.bindState(partyMap);
        localPlayer.bindState(state.getArray(playersMapName));

        this.wsrtc.addEventListener('audio', e => {
          const player = playersManager.remotePlayersByInteger.get(e.data.playerId);
          player.processAudioData(e.data);
        });

        world.appManager.loadApps().then(() => {
          this.dispatchEvent(new MessageEvent('roomconnect'))
        });
      };

      this.wsrtc.addEventListener('init', init);
    };

    this.wsrtc.addEventListener('open', open);

    await new Promise((accept, reject) => {
      this.addEventListener('roomconnect', e => {
        accept();
      }, {once: true});
    });

    return this.wsrtc;
  }
  */

  // TODO: Delete old multiplayer code.
  /*
  // called by enterWorld() in universe.js, to make sure we aren't already connected
  disconnectRoom() {
    if (this.wsrtc && this.wsrtc.state === 'open') this.wsrtc.close();
    this.wsrtc = null;
  }
  */
}
const universe = new Universe();

export default universe;