---
title: Nintendo DS Modding Index
description: The complete guide to modding the Nintendo DS
permalink: /modding/ds-index
syntax-highlight: true
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

### CPU Speeds

The Nintendo DS shipped with a 67Mhz processor in 2004. The Nintendo DSi shipped with an 133Mhz processor in 2009. Most games of the Nintendo DS library were made before the Nintendo DSi came out, and as such the only processor available to them was 67Mhz. Some applications tied themselves to that clock speed and as a result, would not work well with a higher clock speed. Most games, however, would outperform the original with a higher clock speed.

nds-bootstrap has TWL Clock Speed as an option, but it will not try to adjust the ROM to work with the higher clock speed. That's on the application itself, and applications not working with a higher clock speed is NOT a bug on the nds-bootstrap end.

### Setting-up CFW

While most of the benefits of Custom Firmware are for the Nintendo DSi and the Nintendo 3DS family of systems, it allows you to unlock your consoles possibilities. Installing Custom Firmware is quite easy, and in most cases, all you need is a (micro)SD Card. We have the best of guides for you to follow, with step-by-step instructions.

- [3DS Hacking Guide](https://3ds.hacks.guide)
  - Lightning command: `mod 3ds`
  - Kuriisu command: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
  - Lightning command: `mod dsi cfw`
  - Kuriisu command: `guide dsi`

### Flashcards

DS mode flashcards are a slot-1 method of running Nintendo DS applications. Flashcarts have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcarts on the market, each with different kernel requirements. The kernel you use is the most important.

We have a niche list of kernels on this website: https://ds-homebrew.github.io/flashcard

### DLDI

DLDI (short for Dynamically Linked Device Interface) is a unified interface for libfat made by Chishm that homebrew developers can attach to their projects.
This was made due to each flashcard having different read/write commands. It was a hassle to code in a read/write function for every card, especially considering there are cards that are unknown to the marker.

nds-bootstrap automatically applies DLDI patches your Homebrew, but there is a DLDI patcher for flashcards: https://www.chishm.com/DLDI#tools

### CloneBoot

Cloneboot is when a game sends it's own loaded arm9/arm7 binary to another console. It is used for DS Download Play, for single-card multiplayer. Not all games that have single-card multiplayer uses cloneboot though.

Currently, nds-bootstrap's cloneboot patches is broken due to arm9/7 binaries being patched, which makes the RSA signatures invalid.

### WiFi

- On Nintendo DS applications, you could only use WEP and Open WiFi
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA2 support.

Hotspots are usable, so you don't need to change your router configuration

#### Nintendo DS WFC Restoration

1) Launch the Nintendo WFC settings.
2) Connect to your access point.
3) Set your Primary DNS value as one of the values below, depending on which service you want to use.
   *  **Wiimmfi** - `164.132.44.106`
   *  **AltWFC/WFCZwei** - `172.104.88.237` or `104.131.93.87`
   *  **BenFi** - `24.218.177.103`
   *  **Twilit WFC** - `34.66.49.81`
4) Set `1.1.1.1` as your secondary DNS.
5) You might need to NoSSL patch your game at this point, depending on the game.

### Time Bomb

A time bomb is a expiration scheme in the kernel that flashcart manufacturers use to force users to buy a new card. Past that date, the kernel refuses to work once it reaches the expiration screen. Since the timebombs rely on the system's clock, changing the date back would be a fix, albeit a temporary one. For a permanent fix, options include using YSMenu or TWiLight Menu++ with B4DS. We recommend YSMenu due to its current higher compatibility.

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

### Nintendo DSi System Menu
The Nintendo DSi System Menu uses a signed 32-bit integer to determine the free space on the NAND. Using the actual NAND, amount will never go above 128 MB so it was safe. However, when we redirect the NAND to the SD Card, it goes above the 32-bit integer limit, which makes it overflow to a negative number. The negative number of free space will unfortunately cause an "An error has occurred" error message, not letting you boot into the menu. Fortunately, this can be fixed by making a dummy file to put it in a positive number.

The positive and negative numbers are determined by pairs of two. For example, 1-2 GB of free space is allowed while 3-4 isn't. 5-6 GB of free space is allowed while 7-8 isn't.

### Donor ROM

In previous nds-bootstrap versions, a Mario Kart DS ROM was needed for SDK3-4 games to work or save.
The ROM acted as a Donor ROM. nds-bootstrap grabs the donor's arm7 binary, replacing the original ROM's arm7 binary, in order for the save patches to work, and there was a few side effects as a result.
In later nds-bootstrap versions, a Donor ROM is needed for certain THUMB or SDK5 games to boot, as well as save.

</div>

<div class="col-xl-4 d-none d-xl-block">

<div class="sticky-top" data-toc=""><iframe src="https://discordapp.com/widget?id=283769550611152897&theme=dark" height="500" allowtransparency="true" frameborder="0"></iframe></div>

</div>

</div>