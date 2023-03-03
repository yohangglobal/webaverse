<img src="packages/docs/banner.jpeg" width=100% />
<p align="center">
    <a href="https://github.com/webaverse-studios/webaverse/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/webaverse-studios/webaverse" /></a>
    <a href="https://discord.gg/webaverse">
        <img src="https://img.shields.io/discord/906925486049992755.svg?logo=discord"
            alt="chat on Discord"></a>
    <a href="https://twitter.com/intent/follow?screen_name=webaverse">
        <img src="https://img.shields.io/twitter/follow/webaverse?style=social&logo=twitter"
            alt="follow on Twitter"></a>
</p>
<h1 align="center">Webaverse</h1>
<p align="center">
An open source web3 metaverse game engine that anyone can host. Easy to use, runs in the browser and utilizes open tools and standards like <a href="https://github.com/mrdoob/three.js">three.js</a> and <a href="https://github.com/nodejs/node">Node</a>.
</p>
<p align="center">
Everything you need to get started with building in the Webaverse is contained in this repository.
</p>

## Key Features

- 🎮 A full-featured game engine running in your browser
- ♾️ Infinite procedurally generated world
- 🧑‍🤝‍🧑 Multiplayer with voice and chat
- 🤖 AI-powered non-player characters
- 👓 Supports desktop and VR (mobile coming soon)
- 😊 Expressive, vocal and emotive avatars
- 🔮 Runtime support for user uploads and custom apps
- 🖥️ Completely self-hostable

<p align="center">
<img src="packages/docs/combat.gif" width=30% padding="0" margin="0" align="center" />
<img src="packages/docs/asteroids.gif" width=30% align="center" />
<img src="packages/docs/rug_radio.gif" width=30% align="center" />
</p>
<p align="center">
<img src="packages/docs/rotation.gif" width=91% align="center" />
</p>
<p align="center">
<img src="packages/docs/Uncanny_alley.gif" width=30% align="center" />
<img src="packages/docs/monster_truck.gif" width=30% align="center" />
<img src="packages/docs/plane.gif" width=30% align="center" />
</p>

<h1 align="center">Documentation</h1>
<p align="center">
Developer documentation is <a href="https://docs.webaverse.com/docs/index">here</a><br />
User documentation is <a href="https://webaverse.notion.site/User-Docs-3a36b223e39b4f94b3d1f6921a4c297a">here</a>
</p>

## Table of Contents

- [Key Features](#key-features)
- [Table of Contents](#table-of-contents)
- [Minimum Requirements](#minimum-requirements)
  - [Webaverse Tools](#webaverse-tools)
  - [Programs Used](#programs-used)
- [Installation](#installation) 
  - [Loading the Server](#loading-the-server)
- [Installation for Windows](#installation-for-windows)
  - [Hosting Source Files](#hosting-source-files)
- [Creating a New Scene](#creating-a-new-scene)
  - [Code Layout](#code-layout)
  - [Building your Test Model](#building-your-test-model)
    - [Editing the `scenes` Folder](#editing-the-scenes-folder)
    - [Adding to your Test Environment](#adding-to-your-test-environment)
- [Additional Tips](#additional-tips)
  - [Exploring](#exploring)
  - [Helping Out](#helping-out)
- [Contributors ✨](#contributors)
- [Support](#support)
  - [Let's Build Together](#lets-build-together)
  - [New Issues and Features](#new-issues-and-features)
  - [Pull Requests](#pull-requests)
- [We Hope to See You Soon!](#we-hope-to-see-you-soon)

# Minimum Requirements
[(Back to top)](#table-of-contents)

- 10 GB Disk Space
- 8 GB RAM
- 4 Core CPU / vCPUs
- Node version 19.0.0. The recommended way to get node is `nvm`: https://github.com/nvm-sh/nvm

## Webaverse Tools
[(Back to top)](#table-of-contents)

Download and install [Git](https://git-scm.com/downloads).

Download and install [GitHub Desktop](https://desktop.github.com/).

Download and install [Visual Studio Code](https://code.visualstudio.com/) (VS Code).
- This is optional but using an IDE/text editor will be beneficial when you start creating your own local scenes.

Download and install [Node.js](https://nodejs.org/en/download/) with version 18 (v.18).
- You can manage your Node version by using [NVM](https://github.com/nvm-sh/nvm).
- If you are installing Node.js for the first time, you can check the version by typing `node -v` into your terminal.

## Programs Used
[(Back to top)](#table-of-contents)

Within this platform, the app will primarily be using these programs:

- [NodeJS](https://nodejs.org/)
- [ThreeJS](https://threejs.org/)
- [ViteJS](https://vitejs.dev/)
- [ReactJS](https://reactjs.org/)

# Installation
[(Back to top)](#table-of-contents)

Begin by opening the [Webaverse](https://github.com/webaverse-mmo/webaverse) repository on your device.

After installing the above tools, open VS Code and create a new folder where you want to clone the webaverse repository. 

This can also be done from your Command Prompt, however, your VS Code terminal will allow for opening and running the program as easily as possible. 

For example, name your folder “webaverse” and type `cd webaverse` in your terminal to navigate to this folder.

Now you can follow these commands within your terminal to download and install the program:

```sh
# Clone the Webaverse repository.
git clone https://github.com/webaverse-mmo/webaverse.git
# Go into the repository folder you created.
cd webaverse
# Install the required dependencies.
npm install
# Run the "dev" version of the program.
npm run dev
# Wait for this to load and navigate to the URL mentioned in the terminal.
ctrl+click https://local.webaverse.com
```
## Loading the Server
[(Back to top)](#table-of-contents)

You will need to let the server load and for the browser process to begin before starting up. Once it is ready, you will see the following message:
```sh
event - compiled client and server successfully in _ (_ modules)
```
After navigating to the URL using “ctrl+click” you might see a warning to open an external website. 

Click “Open” and your designated browser will begin to build your first testing scene.

<img src="packages/docs/external-website.jpg" width=50% />

Once the server has loaded, you will now be able to test out your avatars and create your own scenes! 

This should be the first display that you see:

<img src="packages/docs/local-scene.jpg" width=100% />

# Installation for Windows
[(Back to top)](#table-of-contents)

The above steps will work just as described for Operating Systems (OS) like Linux, however, Windows will require Windows Subsystem for Linux (WSL) to be set up in advance for installation.

[This video](https://www.youtube.com/watch?v=5RTSlby-l9w) shows you how you can set up WSL and Ubuntu. 

Alternatively, you can open up your terminal and type `wsl --install`. This should fully download and install all requirements needed to run WSL and load the Ubuntu distribution.

For more details, visit Microsoft’s guide [here](https://learn.microsoft.com/en-us/windows/wsl/install).

In case you are running an old version of WSL, make sure you have upgraded to WSL2. You can check this version using `wsl -l -v`.

Once you have fully installed WSL, type these commands:

```sh
# Go into the webaverse folder you created.
cd webaverse
# Enter WSL
wsl
# Clone this repository
git clone https://github.com/webaverse-mmo/webaverse.git
# Go into the repository
cd webaverse
# Install dependencies
npm install
# Run the app
npm run dev
# Navigate to the URL mentioned in the terminal
ctrl+click https://local.webaverse.com
```
## Hosting Source Files
[(Back to top)](#table-of-contents)

You can host the source files on either your Windows file system or on the Ubuntu file system in WSL's virtual drive.

**Windows File System:** Run the Git commands to clone and pull source files from a Windows command prompt. You may find this best if you're using programs such as SourceTree as a Git GUI. You can also edit source using your usual IDE.

**Ubuntu File System:** Run the Git commands to clone and pull source files from a WSL command prompt. In this case consider [using the Visual Studio Code WSL extension](https://code.visualstudio.com/docs/remote/wsl) as your dev environment - for features such as hot reload.

# Creating a New Scene
[(Back to top)](#table-of-contents)

Now that you have your environment set up and the initial view of your world, we can finish by showing how to create your own scene.

This will focus on adding a new environment to this repository, so we recommend becoming familiar with the code layout of each folder.

## Code Layout
[(Back to top)](#table-of-contents)

The main area you will work with in this example is the "scenes" folder, which is displayed as follows:
**packages → client → public → scenes folder**

The "packages" folder contains the majority of files you will engage with, all from the "client" itself to the README images you see in "docs".

![Packages Layout](https://i.imgur.com/zy9kz1H.png)

Next, we will open `client` to visit the `public` folder. 

Within the `public` folder, we can view each folder's use case, such as the avatars we will use and the overarching scenes that we can display within Webaverse.

![Scenes Folder](https://i.imgur.com/hMQkiVV.png)

This layout can be viewed in the other test folders such as `test-e2e`. 

As you begin building your own world, the `scenes` folder and its files can be formed around any avatar, item, or environment you upload.

To show this in more detail, we will create a new Scene (labeled as `.scn` files) to portray an environment with our own avatar for in-game use.

## Building your Test Model
[(Back to top)](#table-of-contents)

First, you will need to download an environment and avatar for this example.

For the environment, we can visit the [glTF Sample Models Repo](https://github.com/KhronosGroup/glTF-Sample-Models/blob/master/2.0/VC/glTF-Binary/VC.glb) and click "Download" in the top right corner.

For an avatar, we have chosen this [VRoid Hub Sample Character](https://hub.vroid.com/en/characters/1248981995540129234/models/8640547963669442173). Click "Use this Model" to download.

![Sample Character](https://i.imgur.com/q2vYbSG.png)

After these files have downloaded, open up your Webaverse directory.

We will start by clicking on the `client` folder and creating a new folder called `test-models`.

Drag your new models into this folder and rename them accordingly. 

![Test Models Folder](https://i.imgur.com/A1ZqbZK.png)

### Editing the `scenes` Folder
[(Back to top)](#table-of-contents)

Next, we will go to the previously mentioned `public` folder and open `scenes`.

Here we will see an extensive list of scenes that can be loaded into Webaverse.

![Scenes Folder](https://i.imgur.com/kJKymA8.png)

As the foundation for our new Scene, we will be using the `block.scn` file.

![block.scn File](https://i.imgur.com/ytNNZeG.png)

You can either save this file as a new `.scn` file and label it "test-environment" or create a new file and simply copy-paste the code over.

For this example, we have left the `block.scn` file as is and created a new `test-environment.scn` file.

![Initial test-environment.scn](https://i.imgur.com/t1ABTo7.jpg)

After this has been set up, go to the `scenes.json` file within this folder.

You will see a list of all the added scenes, which is how your local Webaverse will be able to switch between scenes.

Scroll down to the bottom and add "test-environment.scn" at the end.

>Make sure to add a comma after the scene above this.

![Test Environment Scene](https://i.imgur.com/Qe6nVSb.png)

Now you can go back and visit the local instance of Webaverse that you have running and select this file.

Click on the "Maps" icon on the top right and you should see your new `test-environment.scn` file appear here.

With this displayed, you can make changes to the underlying file and see your changes whenever you refresh the browser.

### Adding to your Test Environment
[(Back to top)](#table-of-contents)

Up next is editing your new Scene!

Revisit the `test-environment.scn` file. Each Scene starts out with ``"objects"`` which references the different parts of the scene you will be creating.

This covers everything from the position of your avatar, the lighting within the scene, and the full environment that we have downloaded.

Our first step will be to remove the next section under the directional light object so that we can add a new position.

![Removing an Object](https://i.imgur.com/tdm8Z6z.png)

Once removing these, we can add in new objects.

We will start by adjusting the render settings to add in fog and a depth of field.

Copy the following code block underneath the object, beginning with `},`:

```shell=
    },
    {
      "type": "application/rendersettings",
      "content": {
        "fog": {
          "fogType": "exp",
          "args": [[255, 255, 255], 0.001]
        },
        "dof": {
          "focus": 1.5,
          "aperture": 0.0004,
          "maxblur": 0.002
        }
      }
    },
```

Then we will place the downloaded environment into the center of our scene and increase its scale by 10x.

Place this code block right underneath the one above:

```shell=
    {
	"position": [
		0,
		0,
		0
	],
	"scale": [
        10,
        10,
        10
	],
	"start_url": "/test-models/environment.glb"
    },
```

Finally, we can add the avatar and place it two meters to the right of our view. 

When you initially opened your local scene, you most likely noticed the first-person view. With this example, and others in the `scenes` folder, you can play around with different ways for your avatar to be displayed.

Copy this code block underneath the environment and close it out like this:

```shell=
{
	"position": [
		2,
		0,
		0
	],
    	"start_url": "/test-models/avatar.vrm",
        "dynamic": true
    }
  ]
}
```

Now save your file, go back to your browser's local instance, and refresh! You should now be able to move around in a brand new city scene with an equippable avatar.

# Additional Tips
[(Back to top)](#table-of-contents)

# Exploring
[(Back to top)](#table-of-contents)

With your brand new scene up and running, we suggest getting familiar with even more as you learn. 

You can start by testing out different parameters or looking at other files in the `scenes` folder to understand how everything works.

Eventually, your experimentation will lead you toward new ideas to build out and help you understand what is possible in Webaverse.

## Helping Out
[(Back to top)](#table-of-contents)

We always encourage everyone to contribute where they can! To make changes as simple as possible, we suggest forking the repository to your own Github account. 

Then, go through the [Installation](#installation) steps as described.

Whenever you are ready to have your changes reviewed, refer to [Let's Build Together!](#lets-build-together) on best practices and our current processes.

# Contributors
[(Back to top)](#table-of-contents)

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/empec-webastudios"><img src="https://avatars.githubusercontent.com/u/113935397?v=4?s=100" width="100px;" alt="empec-webastudios"/><br /><sub><b>empec-webastudios</b></sub></a><br /><a href="#infra-empec-webastudios" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://webaverse.com/"><img src="https://avatars.githubusercontent.com/u/6926057?v=4?s=100" width="100px;" alt="Avaer Kazmer"/><br /><sub><b>Avaer Kazmer</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=avaer" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://gonnavis.com"><img src="https://avatars.githubusercontent.com/u/10785634?v=4?s=100" width="100px;" alt="Vis"/><br /><sub><b>Vis</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=gonnavis" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/codingbycl"><img src="https://avatars.githubusercontent.com/u/29695350?v=4?s=100" width="100px;" alt="codingbycl"/><br /><sub><b>codingbycl</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=codingbycl" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://xrdevlog.com/"><img src="https://avatars.githubusercontent.com/u/32600939?v=4?s=100" width="100px;" alt="jin"/><br /><sub><b>jin</b></sub></a><br /><a href="#content-madjin" title="Content">🖋</a> <a href="https://github.com/webaverse-studios/webaverse/commits?author=madjin" title="Code">💻</a> <a href="https://github.com/webaverse-studios/webaverse/commits?author=madjin" title="Documentation">📖</a> <a href="#ideas-madjin" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://thenexus.city"><img src="https://avatars.githubusercontent.com/u/18633264?v=4?s=100" width="100px;" alt="M̵̞̗̝̼̅̏̎͝Ȯ̴̝̻̊̃̋̀Õ̷̼͋N̸̩̿͜ ̶̜̠̹̼̩͒"/><br /><sub><b>M̵̞̗̝̼̅̏̎͝Ȯ̴̝̻̊̃̋̀Õ̷̼͋N̸̩̿͜ ̶̜̠̹̼̩͒</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=lalalune" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.sjain.dev"><img src="https://avatars.githubusercontent.com/u/8850830?v=4?s=100" width="100px;" alt="Shubham Jain"/><br /><sub><b>Shubham Jain</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=shu8" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://demo.iconix.io"><img src="https://avatars.githubusercontent.com/u/1478866?v=4?s=100" width="100px;" alt="TheoTheDev"/><br /><sub><b>TheoTheDev</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=TheoTheDev" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tcm390"><img src="https://avatars.githubusercontent.com/u/60634884?v=4?s=100" width="100px;" alt="tcm390"/><br /><sub><b>tcm390</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=tcm390" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GuiltyRegicide"><img src="https://avatars.githubusercontent.com/u/58578426?v=4?s=100" width="100px;" alt="GuiltyRegicide"/><br /><sub><b>GuiltyRegicide</b></sub></a><br /><a href="#design-GuiltyRegicide" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abeersaqib"><img src="https://avatars.githubusercontent.com/u/5277220?v=4?s=100" width="100px;" alt="Muhammad Abeer"/><br /><sub><b>Muhammad Abeer</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=abeersaqib" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/arya-prod"><img src="https://avatars.githubusercontent.com/u/64514807?v=4?s=100" width="100px;" alt="arya"/><br /><sub><b>arya</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=arya-prod" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Loryhoof"><img src="https://avatars.githubusercontent.com/u/29487929?v=4?s=100" width="100px;" alt="Loryhoof"/><br /><sub><b>Loryhoof</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=Loryhoof" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/plankatron"><img src="https://avatars.githubusercontent.com/u/5592454?v=4?s=100" width="100px;" alt="plankatron"/><br /><sub><b>plankatron</b></sub></a><br /><a href="#design-plankatron" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/torchesburn"><img src="https://avatars.githubusercontent.com/u/51108458?v=4?s=100" width="100px;" alt="torchesburn"/><br /><sub><b>torchesburn</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=torchesburn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://a.goblin.life"><img src="https://avatars.githubusercontent.com/u/462380?v=4?s=100" width="100px;" alt="a Goblin King"/><br /><sub><b>a Goblin King</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=AGoblinKing" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jakezira"><img src="https://avatars.githubusercontent.com/u/14852075?v=4?s=100" width="100px;" alt="Jack Z."/><br /><sub><b>Jack Z.</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=jakezira" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alisaad673"><img src="https://avatars.githubusercontent.com/u/35926530?v=4?s=100" width="100px;" alt="Ali Saad"/><br /><sub><b>Ali Saad</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=alisaad673" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0reo"><img src="https://avatars.githubusercontent.com/u/7738818?v=4?s=100" width="100px;" alt="Adam Clarke"/><br /><sub><b>Adam Clarke</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=0reo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Arthur-Acha"><img src="https://avatars.githubusercontent.com/u/96268540?v=4?s=100" width="100px;" alt="2AM"/><br /><sub><b>2AM</b></sub></a><br /><a href="#audio-Arthur-Acha" title="Audio">🔊</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://cybermancers.ca"><img src="https://avatars.githubusercontent.com/u/889851?v=4?s=100" width="100px;" alt="Matthew Willox"/><br /><sub><b>Matthew Willox</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=mwmwmw" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/memelotsqui"><img src="https://avatars.githubusercontent.com/u/1117257?v=4?s=100" width="100px;" alt="memelotsqui"/><br /><sub><b>memelotsqui</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=memelotsqui" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ChristopherTrimboli"><img src="https://avatars.githubusercontent.com/u/27584221?v=4?s=100" width="100px;" alt="cjft"/><br /><sub><b>cjft</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=ChristopherTrimboli" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ultrabot2022"><img src="https://avatars.githubusercontent.com/u/80860637?v=4?s=100" width="100px;" alt="UltraBot"/><br /><sub><b>UltraBot</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=ultrabot2022" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/intelliverse777"><img src="https://avatars.githubusercontent.com/u/103969701?v=4?s=100" width="100px;" alt="intelliverse777"/><br /><sub><b>intelliverse777</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=intelliverse777" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rondoor124"><img src="https://avatars.githubusercontent.com/u/92342281?v=4?s=100" width="100px;" alt="Ron"/><br /><sub><b>Ron</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=rondoor124" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mavisakalyan"><img src="https://avatars.githubusercontent.com/u/55106546?v=4?s=100" width="100px;" alt="ꈤꍟꎭꍟꌗꀤꌗ"/><br /><sub><b>ꈤꍟꎭꍟꌗꀤꌗ</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=mavisakalyan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/patriboz"><img src="https://avatars.githubusercontent.com/u/49231818?v=4?s=100" width="100px;" alt="Patrick Bozic"/><br /><sub><b>Patrick Bozic</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=patriboz" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GaladWarder"><img src="https://avatars.githubusercontent.com/u/29031531?v=4?s=100" width="100px;" alt="Grant Roberts"/><br /><sub><b>Grant Roberts</b></sub></a><br /><a href="#design-GaladWarder" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alextitonis"><img src="https://avatars.githubusercontent.com/u/45359358?v=4?s=100" width="100px;" alt="alextitonis"/><br /><sub><b>alextitonis</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=alextitonis" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ahadshams"><img src="https://avatars.githubusercontent.com/u/44798013?v=4?s=100" width="100px;" alt="ahadshams"/><br /><sub><b>ahadshams</b></sub></a><br /><a href="#business-ahadshams" title="Business development">💼</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://emotionull.art/"><img src="https://avatars.githubusercontent.com/u/91581825?v=4?s=100" width="100px;" alt="Emotionull"/><br /><sub><b>Emotionull</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=helloama" title="Documentation">📖</a> <a href="#ideas-helloama" title="Ideas, Planning, & Feedback">🤔</a> <a href="#content-helloama" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aerydna"><img src="https://avatars.githubusercontent.com/u/7593650?v=4?s=100" width="100px;" alt="Andrea Ruzzenenti"/><br /><sub><b>Andrea Ruzzenenti</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=aerydna" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/soulofmischief"><img src="https://avatars.githubusercontent.com/u/30357883?v=4?s=100" width="100px;" alt="soulofmischief"/><br /><sub><b>soulofmischief</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=soulofmischief" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/belopot"><img src="https://avatars.githubusercontent.com/u/46432435?v=4?s=100" width="100px;" alt="belopot"/><br /><sub><b>belopot</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=belopot" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ctrlaltstudio.com"><img src="https://avatars.githubusercontent.com/u/7455448?v=4?s=100" width="100px;" alt="David Rowe"/><br /><sub><b>David Rowe</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=ctrlaltdavid" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/blockchainFull2022"><img src="https://avatars.githubusercontent.com/u/117472008?v=4?s=100" width="100px;" alt="potoelite"/><br /><sub><b>potoelite</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=blockchainFull2022" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/NotFuji_"><img src="https://avatars.githubusercontent.com/u/38316883?v=4?s=100" width="100px;" alt="NotFuji"/><br /><sub><b>NotFuji</b></sub></a><br /><a href="#design-NotFuji" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zenkale"><img src="https://avatars.githubusercontent.com/u/111510128?v=4?s=100" width="100px;" alt="zenkale"/><br /><sub><b>zenkale</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=zenkale" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/semilistnik"><img src="https://avatars.githubusercontent.com/u/6167566?v=4?s=100" width="100px;" alt="Dmytro Fomenko"/><br /><sub><b>Dmytro Fomenko</b></sub></a><br /><a href="#design-semilistnik" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kiibarina"><img src="https://avatars.githubusercontent.com/u/108288701?v=4?s=100" width="100px;" alt="kiibarina"/><br /><sub><b>kiibarina</b></sub></a><br /><a href="#design-kiibarina" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JFKraasch"><img src="https://avatars.githubusercontent.com/u/76698239?v=4?s=100" width="100px;" alt="Jonas Kraasch"/><br /><sub><b>Jonas Kraasch</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=JFKraasch" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/listofbanned"><img src="https://avatars.githubusercontent.com/u/50330310?v=4?s=100" width="100px;" alt="Jimmy"/><br /><sub><b>Jimmy</b></sub></a><br /><a href="https://github.com/webaverse-studios/webaverse/commits?author=listofbanned" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kishdr"><img src="https://avatars.githubusercontent.com/u/17167456?v=4?s=100" width="100px;" alt="kishdr"/><br /><sub><b>kishdr</b></sub></a><br /><a href="#design-kishdr" title="Design">🎨</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

# Support
[(Back to top)](#table-of-contents)

## Let's Build Together!
[(Back to top)](#table-of-contents)

We would love for you to come build with us. Before getting started, please review the documentation in it's entirety before contributing. 

We have provided both the [User Documentation](https://www.notion.so/User-Docs-3a36b223e39b4f94b3d1f6921a4c297a) and the [Developer Documentation](https://docs.webaverse.com/docs/index) for you to begin with.

For additional questions and to meet our contributors, join our [Discord](https://discord.gg/webaverse) and introduce yourself!

### New Issues and Features
[(Back to top)](#table-of-contents)

For developers adding to this repository, please search Github issues before reporting a new issue or starting a new feature. 

If you are starting a new feature or bug fix, we ask that you summarize and reference the issue, then indicate that you are working on it.

### Pull Requests
[(Back to top)](#table-of-contents)

Please make sure your PRs change as little existing code as is necessary to prevent upstream merge conflicts. 

When posting a pull request, document what the PR does and how it can be reviewed for Quality Assurance (QA).

PRs will be reviewed and accepted if they conform to our linting and code conventions. These include PRs that do not cause any bugs and will not decrease performance of the app.

# We Hope to See You Soon!
[(Back to top)](#table-of-contents)

<img align="middle" style='margin: 1em' src="packages/docs/town.jpeg" width=100% />
