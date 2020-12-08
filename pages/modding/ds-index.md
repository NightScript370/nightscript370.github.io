---
title: Nintendo DS Modding Index
description: The complete guide to modding the Nintendo DS
permalink: /modding/ds-index
---
# Nintendo DS Modding Guide

<div class="d-xl-none" data-toc></div>
<div class="row" markdown="1">
<div class="col-xl-8" data-content markdown="1">

Welcome to the resources for Nintendo DS modding. This will attempt to explain most things related to Nintendo DS modding as well as be a basic introduction to the NTR firmware of the Nintendo DS, the TWL firmware of the Nintendo DSi and TWL_FIRM of the Nintendo 3DS

{% include alert.html alert-type="warning" alert-text='If you need help, ask the <a href="https://discord.gg/yD3spjv" class="alert-link">DS<sup>(i)</sup> Mode Hacking!</a> Discord server.' %}

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

### Homebrew
#### Development

Developing Nintendo DS Homebrew typically uses devKitPro tools, such as devKitARM, libnds, and libfat. However, there is the possibility to branch out and use alternative software:

- **SD Card libraries:** devKitPro recommends libfat. We recommend using libslim instead, as it allows usage of different partitions, quicker speeds and non-blocking.
- **Graphic Library:** We recommend using easyGL2D, which comes shipped with libnds. However, you could use NightFox Lib.
- **Entire Toolchains:** We recommend using devKitARM and libnds, as it includes DSi compatibility and has a larger ecosystem. However, if your target is exclusively flashcarts on a Nintendo DS, feel free to use ToolchainGenericDS.

#### Flashcards

DS mode flashcards are a slot-1 method of running Nintendo DS applications. Flashcarts have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcarts on the market, each with different kernel requirements. The kernel you use is the most important.

[There is a **work in progress** flashcart index](https://nightyoshi370.github.io/mm-github-pages-starter/), which has kernels, firmware, reviews and purchase links.

#### DLDI

Different SD card slots have different hardware (most of the time) and code written for one card won't necessarily work for another card. DLDI (short for Dynamically Linked Device Interface) attempts to solve this by having the SD card handling code patched in externally. Loaders like YSMenu, Wood R4 and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, feel free to use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) depending on your device.

#### Time Bomb

A time bomb is a expiration date on flashcart kernels that manufacturers use to force users to buy a new card. Once your system clock goes beyond a certain date, the kernel will refuse to boot past the expiration screen. Thankfully, a flag is not set anywhere and it's handled in the flashcart firmware, giving us two options for work arounds:

- Since it relies on the system clock, you could set back the date. This will break any game that uses your system clock, but it will allow you to use the default kernel.
- Since it relies on the kernel and not the firmware, you could switch to an alternative kernel. There are two options available:
  - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- The menu is quite ugly and only displays `.nds` files, but it has far better game support, cheat support and no memory pak requirement.
  - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) with B4DS -- This is useful if you'd like to have all your ROMs in the same menu that you could launch NES, GBA and other console titles too. However, it does require a Memory Expansion Pak for extended game compatibility and does not support cheats.

We recommend YSMenu due to the higher compatibility, cheats and lack of need for a Memory Expansion Pak. If you want to setup YSMenu, DeadSkullzJr has made a [Dropbox repo](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) with all the primary boot kernels set up for your flashcart. All it requires is a drag and drop to your SD card root and you have completed.
  - You could still lanuch into TWiLight Menu++ for an all-in-one menu for emulators, but you can't launch into YSMenu from TWiLight Menu++.

In order to test whether your flashcart has a timebomb, set the date on your system to the latest value possible and launch the flashcart.

#### ARGV Support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It could be used for forwarders or alternative menus.

- The homebrew needs to be programmed in order to take advantage of it. For example, GBARunner2, NesDS and GameYob all have ARGV implementation
- There also needs to have a way to set the ARGV variables. TWiLight Menu++ and HBMenu allow setting ARGV arguments

### Hardmod
Hardmodding is when you physically solder the motherboard of the Nintendo DSi to an SD card adapter in order to be read on a computer. This is useful for restoring NAND backups, viewing NAND on your PC, etc...
#### Nintendo DS
![](https://media.discordapp.net/attachments/547986366357700620/736370094392999947/mobo_pinout.png?width=893&height=603)

#### Nintendo DSi
Follow the "Hardware NAND Mod Guide" and "Decrypting your NAND" of [this](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) guide

### Retail ROMs
#### Anti-Piracy

AP (short for anti-piracy) is a method used by developers to enforce legitimate purchases and prevent piracy. This can be circumvented either from the loader or the ROM itself.

- For nds-bootstrap's purposes, you could load a `.IPS` file in order to circumvent said patches. This `.IPS` file will be patched inside nds-bootstrap, so you could keep the ROM files intact. A pack of `.IPS` files are automatically included with TWiLight Menu++.
- For Wood R4 purposes, these patches are included in the software itself. You will not need to modify the ROM itself.

In case there isn't a `.IPS` file for your ROM or your software didn't patch your ROM, you could try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

#### CloneBoot

Cloneboot is when a game sends it's own loaded arm9/arm7 binary to another console. It is used for DS Download Play, for single-card multiplayer. Not all games that have single-card multiplayer uses cloneboot though.

Currently, nds-bootstrap's cloneboot patches is broken due to arm9/7 binaries being patched, which makes the RSA signatures invalid.

#### Thumb instructions
Instead of the 32-bit regular ARM instructions, THUMB use 16-bit instructions. This is useful when memory bandwidth is a bottleneck.

#### Save Files
Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Though rare, there are DS Cartridges with NAND based saves: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you use a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php

#### Card Read DMA
Card DMA (stands for Direct Memory Access) is a more efficient way to read catridge data than by software. When there isn't any data available, code can still execute. In software catridge data reads, polling the register to see if there is new data wastes times. It is the preferred way of accessing data.

You can spot a game that uses dma via no$gba by enabling the DMA log on ARM9. A DMA access to the card uses AF000001 as the third parameter.
- For example: `DMA2: 04100010 023C18C0 AF000001`

#### Donor ROM

In previous nds-bootstrap versions, a Mario Kart DS ROM was needed for SDK3-4 games to work or save.
The ROM acted as a Donor ROM. nds-bootstrap grabs the donor's arm7 binary, replacing the original ROM's arm7 binary, in order for the save patches to work, and there was a few side effects as a result.
In later nds-bootstrap versions, a Donor ROM is needed for certain THUMB or SDK5 games to boot, as well as save.

#### Action Replay Cheats

Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which could alter the experience of the game(s) being played altogether.

Flashcarts can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcart kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- NitroHax (`cheats.xml`)
  - The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and trys to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- TWiLight Menu++ (`usrcheat.dat`)
  - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
  - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, the cheats file does not have a real limit.
  - Bootstrap 4 DS (aka the nds-bootstrap version used on flashcarts) does not support cheats, due to not having enough RAM and the limitations of the Memory Expansion Pack.

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711/page-38#post-9090779)

Cheat codes generally have types A through E, and here is a description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutives addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job.

Credits: (`DeadSkullzJr`)

### Nintendo DSi/TWL_FIRM of Nintendo 3DS
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

#### Nintendo DSi Bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a filesize limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

</div>

<div class="col-xl-4 d-none d-xl-block">

<div class="sticky-top" data-toc=""><iframe src="https://discordapp.com/widget?id=283769550611152897&theme=dark" height="500" allowtransparency="true" frameborder="0"></iframe></div>

</div>

</div>