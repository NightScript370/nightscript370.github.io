---
title: Projects Index (WIP)
permalink: /projects/
---

{% assign nsdomain = "/projects/ns-domain | NightScript Domain | projects/ns-domain.png |  | A website I made to document my accomplishments | Visit its history" | split: ' | ' %}
{% assign yamamura = "# | Yamamura | projects/yamamura.png |  | A discord bot focused on modding communities. Discontinued in January 2020 but the source code is still available | See what it was (Coming Soon)" | split: ' | ' %}
{% assign twilight = "https://github.com/DS-Homebrew/TWiLightMenu | TWiLight Menu++ | projects/twilight.png |  | An all in one menu for launching any application that works on the NTR/TWL environment | View Source Code" | split: ' | ' %}
{% assign dsi = "/projects/dsi-guide | dsi.cfw.guide | projects/dsi-guide-icon.png | The guide to softmodding your DSi | A site originally led by emiyl and jerbear64 now has the backing of the community (mostly myself). | See changes made since power-shift" | split: ' | ' %}
{% assign mmm = "https://mariomakingmods.github.io/localhost/index.html | Mario Making Mods | projects/MMM.png |  | The community for modding games in the Super Mario Maker series. | Visit its archive" | split: ' | ' %}
{% assign uu = "https://universal-team.net/projects/universal-updater.html | Universal Updater | projects/universal-updater.png |  | An application for downloading homebrew onto your Nintendo 3DS. | Visit its webpage" | split: ' | ' %}

{% assign my_array = "" | split: ',' %}
{% assign my_array = my_array | push: dsi %}
{% assign my_array = my_array | push: yamamura %}
{% assign my_array = my_array | push: twilight %}
{% assign my_array = my_array | push: nsdomain %}
{% assign my_array = my_array | push: mmm %}
{% assign my_array = my_array | push: uu %}

{% include socialGrid.html pages=my_array grid="3" %}