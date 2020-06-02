---
title: DSi Modding Guide
description: Documenting my works on the DSi Modding Guide
permalink: /projects/dsi-guide
---
# My contributions to the DSi Modding Guide
dsi.cfw.guide is a website made to guide users through modding their Nintendo DSi (XL) systems. Originally made by emiyl and jerbear64, I have decided to rewrite it to bring along a few improvements (mostly in wordings).

- Halvorsen#9996 on Discord provided images of their Nintendo DSi, which I used for a splash image on the website homepage. This makes it consistent with the other modding guide websites and gives the homepage a bit of needed color.
- Flipnote Lenny is now a sub-section of the main Unlaunch Installation guide instead of being separate. It's quite difficult to maintain two different guides when only one section is different.<br>
How it is now handled is that it uses Memory Pit as the main guide but if the user could not use Memory Pit, it tells users to check the Flipnote Lenny page.
- Now, there is an indepth troubleshooting on what went wrong. It now shows detailed messages on bad SD cards or misconfigured setups.
- The TempNAND section has been removed due to the NAND degration, which can cause serious damage. There wasn't really much use for it either way, since the regular way works fine and there wouldn't be a use case where the other way wouldn't work but this does.
- Each "SD card setup" section was made into an unlinear guide. Quite frankly, users can copy files in whatever order they want and it wouldn't matter as long as they coppied all the files.
- The tools were switched to use community maintained tools.
	- GodMode9i is now used instead of HBMenu to launch .nds files. GodMode9i has much more utility functionality and as such serves a purpose after installing Unlaunch (as opposed to the simple ended HBMenu). Such functionality includes deleting/renaming files and dumping Slot-1. There is nothing to lose since GodMode9i has the launching feature of HBMenu (which is HBMenu's only feature). As a bonus, GodMode9i is compressed in .7z, which is more common for users.
	- dumpTool is now used instead of fwTool 2.0 for dumping your NAND. dumpTool is a standalone tool, unlike fwTool which requires users to download an archive for an entirely different exploit in order to link to just one file. We couldn't rehost the file either, as the developer of fwTool sent a DMCA when attempting to do so. As a bonus, dumpTool is an Open Source homebrew application, unlike the closed source fwTool.

	The advantage of using community-maintained tools are more accessible support, and higher quality functionality. 
- hiyaCFW and TWiLight Menu++ has been solidified as addons, with the website homepage description update.
- Evie11 and I combined our work to explain hiyaCFW's free-space issue. While she made the discovery, the original documentation and javascript tool for checking if your SD card is acceptable, I moved it to the website FAQ and reworded the accompaning text.
- The DSiWare dumping guide was more of a "how to dump from a 3DS" guide, instead of it being a *DSi* guide for a *DSi* website. I've switched it to use GodMode9i to dump DSiWare from your DSi NAND.
- TWiLight Menu++'s SD card setup section was removed, instead replacing it with "place your files wherever you'd like on the SD Card". It did say that at the bottom of the SD card setup section but by the time you've read that and followed along with the guide, you've already organized all your roms. It's better you tell them outright first that it can be disorganized but organizations can be maade.
- The credits and donations page have been merged and simplified down to homebrew devs and guide editors with a commit history in the GitHub Repository.
- The engine has been fixed to not hardcode more than 2 footer links. It now does a loop in the yml file (which also now contains the links as it should have, since the titles were already there)
- Added a "what can you do" section, that I stole from Yamamura.

<!-- You can't put markdown inside a div, so I'm leaving this as HTML -->
<div class="mb-2 d-flex align-top">
	<img class="rounded mw-25 mr-2" src="/assets/images/projects/dsi-guide.png" alt="DSi Guide">
	<span>After these changes and other general changes (mostly rewords), emiyl has approached me in my discord DMs congratulating me on my work and thanking me for maintaining the guide while she couldn't due to IRL activities. I was given push access to the repository and am now considered the main manager of the website. Ironic how all this happened despite me not even owning a DSi.</span>
</div>

### Some goals I have for the website
- Evie11 and I are working together to make a NAND restoration guide. While it is highly unrecommended, we'd rather users do it right if they really want to.
- Maybe add a carousel image gallery for things you could do with a modded DSi on the homepage.
- Describe things in TWiLight Menu++ a bit better.
- Include Privacy Policy page (cause ads and links to other website).

[Be sure to check it out. Your road of Custom Firmware is waiting for you!](https://dsi.cfw.guide)
