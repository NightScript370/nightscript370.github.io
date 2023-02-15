---
title: DSi Modding Guide
description: Documenting my works on the DSi Modding Guide
permalink: /projects/dsi-guide
---
# My contributions to the DSi Modding Guide
dsi.cfw.guide is a website made to guide users through modding their Nintendo DSi (XL) systems. Originally made by emiyl and jerbear64, I started submitting Pull Requests in 2020 to fix up the language and other things I thought could be improved.

- Halvorsen#9996 on Discord provided images of their Nintendo DSi, which I used for a splash image on the website homepage. This makes it consistent with the other modding guide websites and gives the homepage a bit of needed color.
- Rather than have a complete guide from exploit -> hiya in one-shot, each section got its own page. Thereby, we could swap the exploit on section one, maintain the same text for section 2 (Dumping NAND) and give users the option to install Unlaunch (section 3) without bloating up their SD card if they chose not to proceed with it.
- The TempNAND section has been removed due to the NAND degration, which can cause serious damage. There wasn't really much use for it either way, since the regular way works fine and there wouldn't be a use case where the other way wouldn't work but this does.
- The tools were switched to use community maintained tools.
	- As TWiLight gained more functionality usage without Unlaunch, we were now comfortable suggesting it as part of the main guide rather than tell people to download one launcher (HBMenu) only to replace it with TWiLight. In addition to the .nds homebrew launching capabilities of HBMenu, TWiLight can launch a lot of other applications and even has specific patches for Unlaunch. As a bonus, TWiLight Menu++ comes distributed in the `.7z` archive format, which is more common for users.
	- dumpTool is now used instead of fwTool 2.0 for dumping your NAND. dumpTool is a standalone tool, unlike fwTool which requires users to download an archive for an entirely different exploit in order to link to just one file. We couldn't rehost the file either, as the developer of fwTool sent a DMCA when attempting to do so. As a bonus, dumpTool is an Open Source homebrew application, unlike the closed source fwTool.

	The advantage of using community-maintained tools are more accessible support, and higher quality functionality. 
- hiyaCFW was slowly phased out to the DSi Mode Hacking Wiki
- The DSiWare dumping guide was more of a "how to dump from a 3DS" guide, instead of it being a *DSi* guide for a *DSi* website. I've switched it to use GodMode9i to dump DSiWare from your DSi NAND.
- TWiLight Menu++'s SD card setup section was removed, instead replacing it with "place your files wherever you'd like on the SD Card". It did say that at the bottom of the SD card setup section but by the time you've read that and followed along with the guide, you've already organized all your roms. It's better you tell them outright first that it can be disorganized but organizations can be maade.
- The credits and donations page have been merged and simplified down to homebrew devs and guide editors with a commit history in the GitHub Repository.
- The engine has been fixed to not hardcode more than 2 footer links. It now does a loop in the yml file (which also now contains the links as it should have, since the titles were already there)
- Added a "what can you do" section, that I stole from Yamamura.

<!-- You can't put markdown inside a div, so I'm leaving this as HTML -->
<div class="mb-2 d-flex align-top">
	<img class="rounded mw-25 me-2" src="/assets/images/projects/dsi-guide.png" alt="DSi Guide">
	<span>After these changes and other general changes (mostly rewords), emiyl has approached me in my discord DMs congratulating me on my work and thanking me for maintaining the guide while she couldn't due to IRL activities. I was given push access to the repository and am now considered the main manager of the website. Ironic how all this happened despite me not even owning a DSi. We then moved the guide to the DS(i) Mode Hacking hands, where I brought on other hands to help me. In the end, we ended up migrating the project away from jekyll to VuePress, introduced StyleHax and other changes. This was a good thing to be the leader of.</span>
</div>

### Some goals I have for the website
- Maybe add a carousel image gallery for things you could do with a modded DSi on the homepage.
- Include Privacy Policy page (cause ads and links to other website).

[Be sure to check it out. Your road of Custom Firmware is waiting for you!](https://dsi.cfw.guide)
