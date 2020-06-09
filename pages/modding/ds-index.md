---
title: Nintendo DS Modding Index
description: The complete guide to modding the Nintendo DS
permalink: /modding/ds-index
---
# Nintendo DS Modding Guide

<div class="d-block d-xl-none" data-toc></div>
<div class="row" markdown="1">
<div class="col-xl-8" data-content markdown="1">

Welcome to the resources for Nintendo DS modding. This will attempt to explain most things related to Nintendo DS modding as well as be a basic introduction to the NTR firmware of the Nintendo DS, the TWL firmware of the Nintendo DSi and TWL_FIRM of the Nintendo 3DS

<div class="alert alert-warning alert-dismissible fade show" role="alert">
	If you need help, ask the <a href="https://discord.gg/yD3spjv" class="alert-link">DS⁽ⁱ⁾ Mode Hacking!</a> or the <a href="https://discord.gg/Ymj3Kex" class="alert-link">NDS(i)Brew Scene</a> Discord servers.
	<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	</button>
</div>

### Anti-Piracy

AP (short for anti-piracy) is a method used by developers to enforce legitimate purchases and prevent piracy. This can be circumvented either from the loader or the ROM itself.

- For nds-bootstrap's purposes, you could load a `.IPS` file in order to circumvent said patches. This `.IPS` file will be patched inside nds-bootstrap, so you could keep the ROM files intact. A pack of `.IPS` files are automatically included with TWiLight Menu++.
- For Wood R4 purposes, these patches are included in the software itself. You will not need to modify the ROM itself.

In case there isn't a `.IPS` file for your ROM or your software didn't patch your ROM, you could try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### Flashcards

DS mode flashcards are a slot-1 method of running Nintendo DS applications. Flashcarts have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcarts on the market, each with different kernel requirements. The kernel you use is the most important.

We have a niche list of kernels on this website: https://nightyoshi370.github.io/mm-github-pages-starter/

This is a WIP and it isn't properly made, but it should help you with the bare minimum

### DLDI

DLDI (short for Dynamically Linked Device Interface) is a unified interface for libfat made by Chishm that homebrew developers can attach to their projects.
This was made due to each flashcard having different read/write commands. It was a hassle to code in a read/write function for every card, especially considering there are cards that are unknown to the marker.

In order to patch DLDI, you will need a patcher. Here is a [list](https://www.chishm.com/DLDI#tools) of patchers out there depending on your device
- nds-bootstrap automatically applies DLDI patches your Homebrew

### CloneBoot

Cloneboot is when a game sends it's own loaded arm9/arm7 binary to another console. It is used for DS Download Play, for single-card multiplayer. Not all games that have single-card multiplayer uses cloneboot though.

Currently, nds-bootstrap's cloneboot patches is broken due to arm9/7 binaries being patched, which makes the RSA signatures invalid.

### WiFi

- On Nintendo DS applications, you could only use WEP and Open WiFi
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA2 support.

Hotspots are usable, so you don't need to change your router configuration

#### Nintendo DS WFC Restoration

1. Launch the Nintendo WFC settings.
2. Connect to your access point.
3. Set your Primary DNS value as one of the values below, depending on which service you want to use.
   *  **Wiimmfi** - `164.132.44.106`
   *  **AltWFC/WFCZwei** - `172.104.88.237` or `104.131.93.87`
   *  **BenFi** - `24.218.177.103`
   *  **Twilit WFC** - `34.66.49.81`
4. Set `1.1.1.1` as your secondary DNS.
5. You might need to NoSSL patch your game at this point, depending on the game.

### Time Bomb

A time bomb is a expiration date on flashcart kernels that manufacturers use to force users to buy a new card. Once your system clock goes beyond a certain date, the kernel will refuse to boot past the expiration screen. Thankfully, a flag is not set anywhere and it's handled in the flashcart firmware, giving us two options for work arounds:

- Since it relies on the system clock, you could set back the date. This will break any game that uses your system clock, but it will allow you to use the current kernel.
- Since it relies on the kernel and not the firmware, you could switch to an alternative kernel. There are two options available:
  - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- The menu is quite ugly and only displays `.nds` files, but it has far better game support, cheat support and no memory pak requirement.
  - [TWiLight Menu++](twilight) with B4DS -- This is useful if you'd like to have all your ROMs in the same menu that you could launch NES, GBA and other console titles too. However, it does require a Memory Expansion Pak for extended game compatibility and does not support cheats.

We recommend YSMenu due to the higher compatibility, cheats and lack of need for a Memory Expansion Pak. If you want to setup YSMenu, DeadSkullzJr has made a [Dropbox repo](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) with all the primary boot kernels set up for your flashcart. All it requires is a drag and drop to your SD card root and you have completed.
  - You could still lanuch into TWiLight Menu++ for an all-in-one menu for emulators, but you can't launch into YSMenu from TWiLight Menu++.

In order to test whether your flashcart has a timebomb, set the date on your system to the latest value possible and launch the flashcart.

### ARGV Support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It could be used for forwarders or alternative menus.

- The homebrew needs to be programmed in order to take advantage of it. For example, GBARunner2, NesDS and GameYob all have ARGV implementation
- There also needs to have a way to set the ARGV variables. TWiLight Menu++ and HBMenu allow setting ARGV arguments

### Thumb instructions

Instead of the 32-bit regular ARM instructions, THUMB use 16-bit instructions. This is useful when memory bandwidth is a bottleneck.

### Save Files

Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Though rare, there are DS Cartridges with NAND based saves: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you use a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php

### Card Read DMA
Card DMA (stands for Direct Memory Access) is a more efficient way to read catridge data than by software. When there isn't any data available, code can still execute. In software catridge data reads, polling the register to see if there is new data wastes times. It is the preferred way of accessing data.

You can spot a game that uses dma via no$gba by enabling the DMA log on ARM9. A DMA access to the card uses AF000001 as the third parameter.
- For example: `DMA2: 04100010 023C18C0 AF000001`

### Nintendo DSi

#### Setting-up CFW
While most of the benefits of Custom Firmware are for the Nintendo DSi and the Nintendo 3DS family of systems, it allows you to unlock your consoles possibilities. Installing Custom Firmware is quite easy, and in most cases, all you need is a (micro)SD Card. We have the best of guides for you to follow, with step-by-step instructions.

- [3DS Hacking Guide](https://3ds.hacks.guide)
  - Lightning command: `mod 3ds`
  - Kuriisu command: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
  - Lightning command: `mod dsi cfw`
  - Kuriisu command: `guide dsi`

#### CPU Speeds
The Nintendo DS shipped with a 67Mhz processor in 2004. The Nintendo DSi shipped with an 133Mhz processor in 2009. Most games of the Nintendo DS library were made before the Nintendo DSi came out, and as such the only processor available to them was 67Mhz. Some applications tied themselves to that clock speed and as a result, would not work well with a higher clock speed. Most games, however, would outperform the original with a higher clock speed.

nds-bootstrap has TWL Clock Speed as an option, but it will not try to adjust the ROM to work with the higher clock speed. That's on the application itself, and applications not working with a higher clock speed is NOT a bug on the nds-bootstrap end.

#### Hardmodding

Hardmodding is when you physically solder the motherboard of the Nintendo DSi to an SD card adapter in order to be read on a computer. This is useful for restoring NAND backups, viewing NAND on your PC, etc...

Here is a guide on how to do so: [Link](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/)

Keep in mind you only need to follow "Hardware NAND Mod Guide" and "Decrypting your NAND". The rest isn't necessary.

#### Nintendo DSi System Menu
The Nintendo DSi System Menu uses a signed 32-bit integer to determine the free space on the NAND. Using the actual NAND, amount will never go above 128 MB so it was safe. However, when we redirect the NAND to the SD Card, it goes above the 32-bit integer limit, which makes it overflow to a negative number. The negative number of free space will unfortunately cause an "An error has occurred" error message, not letting you boot into the menu. Fortunately, this can be fixed by making a dummy file to put it in a positive number.

The positive and negative numbers are determined by pairs of two. For example, 1-2 GB of free space is allowed while 3-4 isn't. 5-6 GB of free space is allowed while 7-8 isn't.

In version 1.4.0, RSA signatures in the DS Cart Whitelist aren't verified.there is an exploit regarding a vulnerability in the Nintendo DSi Flashcart whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcart with a modified ROM

#### Nintendo DSi Slot-1 Access & Blockout
Slot-1 access is blocked when launching applications from the System Menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcarts and you cannot dump ROMs to your SD card.

The flashcart white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcarts that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfullness of putting any sanity check, we can overflow into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SFCG registers, we could run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcart with a modified ROM. Also, the expoit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

#### Nintendo DSi Camera
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, wther its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Donor ROM

In previous nds-bootstrap versions, a Mario Kart DS ROM was needed for SDK3-4 games to work or save.
The ROM acted as a Donor ROM. nds-bootstrap grabs the donor's arm7 binary, replacing the original ROM's arm7 binary, in order for the save patches to work, and there was a few side effects as a result.
In later nds-bootstrap versions, a Donor ROM is needed for certain THUMB or SDK5 games to boot, as well as save.

</div>

<div class="col-xl-4 d-none d-xl-block">

<div class="sticky-top" data-toc=""><iframe src="https://discordapp.com/widget?id=283769550611152897&theme=dark" height="500" allowtransparency="true" frameborder="0"></iframe></div>

</div>

</div>