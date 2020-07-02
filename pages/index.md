---
title: Home
description: This website was made to document things I've accomplished over the years. Maybe you'll find something interesting here?
permalink: /
carousel: true
---

# Welcome to the NightScript Domain!

This website was made to record various accomplishments I've done over the years. The content you may find here could range from video game reviews, blogs, projects or other things I may throw onto here. Maybe you'll find something interesting here? Who knows, but hey; at least appreciate the nice beautiful background of a mountain. Well, for those of you who weren't distracted and did not go to the source code of this website to see the image in its full glory, note that this website is open source on GitHub. Heck, this website is hosted on GitHub using GitHub Pages. I guess that should tell you what type of person I am.

If you haven't figured it out yet, I'm kind of a laid-back yet lazy 16 year old programmer that is extremely enthusiastic in open source code and external contributions. I mainly program for the homebrew community, specifically the Nintendo DS Homebrew community. I can code in PHP, JavaScript, Python and some C++.     
Programming isn't the only thing I do (but it's my specialty). I also find interest in graphic design (using Photoshop CS6), writing, gaming and moderating. Outside of my own personal server, I moderate Mario Making Mods (a discord server on modding the Super Mario Maker series) and the DS(i) Mode Hacking Discord Server. It's rare that you'll see me moderate though, because most of the userbase are rule-abiding users.

I do most of my communications on Discord (primarily on my personal Discord Server) but I'm also reachable elsewhere. Just take a look at my social page to know where to find me. I go by three names: maorninja(322), NightYoshi370 and NightScript. I much prefer NightScript but some sites either have it taken or don't allow name changes.   
I also take PayPal donations, if that's sort of your thing.

### Graphic Design

Being in a Graphic design class for my 11th grade, I got introduced to the powerful tool known as photoshop. We made a lot of wacky things, some of them I absolutely adore. Here are examples of a few:

{% assign symbolface = "" | split: ',' | push: "/assets/images/gd/CropLetterYoshi.jpg" | push: "Here's an image of myself, but in symbolism" %}
{% assign tyson = "" | split: ',' | push: "/assets/images/gd/tysonhesse.jfif" | push: "A fan book of Tyson Hesse, made in a low budget design (class assignment)" %}
{% assign mspaint = "" | split: ',' | push: "/assets/images/gd/ns_doodle.jpg" | push: "A doodle I had to make for class" %}
{% assign movie = "" | split: ',' | push: "/assets/images/gd/Maor_Movie.jpg" | push: "A fan made movie poster I had to make for class. Based on the old sonic movie cause :^)" %}
{% assign smashshoe = "" | split: ',' | push: "/assets/images/gd/smash.jpg" | push: "A poster for a Super Smash Bros Shoe (awful)" %}
{% assign splatoon = "" | split: ',' | push: "/assets/images/gd/splatoon.jpg" | push: "A poster for a Splatoon Shoe" %}
{% assign harryshoe = "" | split: ',' | push: "/assets/images/gd/hp-poster.jpg" | push: "A poster for a Shoe based on the Harry Potter series" %}
{% assign link = "" | split: ',' | push: "/assets/images/gd/link.jpg" | push: "A poster about the Hyrule warrior and the Kalamity he's supposed to be saving the princess from" %}

{% assign my_array = "" | split: ',' %}
{% assign my_array = my_array | push: symbolface %}
{% assign my_array = my_array | push: tyson %}
{% assign my_array = my_array | push: mspaint %}
{% assign my_array = my_array | push: movie %}
{% assign my_array = my_array | push: smashshoe %}
{% assign my_array = my_array | push: splatoon %}
{% assign my_array = my_array | push: harryshoe %}
{% assign my_array = my_array | push: link %}

{% include carousel.html pages=my_array id="graphicDesign" %}

### Gaming

When I have the time to play video games, I'd much prefer to play them on my Lenovo Yoga 710. While it is objectively underpowered for complex gaming, I don't play complex games. My gameplay preferences mostly come down to the traditional old school video games. It's why I'm a huge Nintendo fan, despite their obviously bad practices. Heck, they're the only exceptions that I make for consoles. I have an Old 3DS XL, a DS Lite and a Nintendo Wii.

There are multiple blog entries where I will be talking about my gaming experiences. The one with the pin icon best describes what I think games should be, but I also go into game reviews.

<div class="card shareCard mb-2">
	<div class="card-body">
		<a class="h5 card-title" href="/blog/gaming">My Gaming Experiences</a>
		<p class="card-text">I go in depth about my analysis on gaming. It describes my love for Super Smash Bros, Classic Sonic and my dislove for Mario (Guest Starring: Kirby!).</p>
		<noscript class="card-text noShare">Sorry, JavaScript is required in order to see share links.</noscript>
	</div>
</div>

### Blogging
Oh yeah, what you see above are some of my blog entries. They range from life experiences, frustrations I have, opinions or random topics. They can all be found in the blog index page (currently not developed) but here are some of my highlists and the newest ones

<div class="card shareCard mb-2">
	<div class="card-body">
		<a class="h5 card-title" href="/blog/ownership-issues">Issues with ownership</a>
		<p class="card-text">Is what you have really yours? What is the true definition of ownership?</p>
		<noscript class="card-text noShare">Sorry, JavaScript is required in order to see share links.</noscript>
	</div>
</div>