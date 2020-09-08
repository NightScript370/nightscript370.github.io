---
title: Home
description: This website was made to document things I've accomplished over the years. Maybe you'll find something interesting here?
permalink: /
carousel: true
landing: true
---

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

<div class="row">
	<div class="col-md-4">
		<div style="min-height: 5.5rem;">
			<img src="/assets/images/avatar.png" style="float:right; height: 5rem; line-height:1; border-radius: .5rem;">
			I'm NightScript, a 16 year old open-source developer with a love for Nintendo modding.
		</div>
		<div class="card mb-2">
			<div class="card-body">
				<h5 noAnchor class="card-title">My abilities</h5>
				<ul class="card-text">
					<li>Graphic Design (using Photoshop CS6 + Paint.NET)</li>
					<li>Website Design (using HTML, CSS and JavaScript)</li>
					<li>DS Homebrew Development (using devKitARM and libnds)</li>
					<li>Leadership + Community Management</li>
					<li>Comprehensive story writting (and other writting in general)</li>
				</ul>
			</div>
		</div>
		<div class="card mb-2">
			<div class="card-body">
				<h5 noAnchor class="card-title">Previous Contributions of mine</h5>
				<ul class="card-text">
					<li>The complete guide to softmodding a Nintendo DSi</li>
					<li>Yamamura - The customizable Discord Bot</li>
					<li>NightScript Domain</li>
					<li>TWiLight Menu++</li>
				</ul>
			</div>
		</div>
		<div class="card mb-2">
			<div class="card-body">
				<h5 noAnchor class="card-title">Recent Blog Articles</h5>
				<ul class="card-text">
					<li><a href="/blog/summer-2020">My Summer of 2020</a></li>
					<li><a href="/blog/edgenuity-issues">Issues with Edgenuity</a></li>
					<li><a href="/blog/sonic-return-of-infinite">Sonic: Return of Infinite</a></li>
					<li><a href="/blog/ownership-issues">Issues with ownership</a></li>
				</ul>
			</div>
		</div>
		<div class="row text-center" id="contactMeButtons">
			<a class="col nstooltip" data-tooltip="Follow me on Twitter" href="https://twitter.com/NightScript"><img src="/assets/images/social/twitter.svg"></a>
			<a class="col nstooltip" data-tooltip="See my projects on GitHub" href="https://github.com/NightYoshi370"><img src="/assets/images/social/github.svg" class="icon-invert"></a>
			<a class="col nstooltip" data-tooltip="Join my Discord Server" href="https://discord.gg/vbYZCRZ"><img src="/assets/images/social/discord.svg"></a>
			<a class="col nstooltip" data-tooltip="Donate on PayPal" href="https://paypal.me/maorninja"><img src="/assets/images/social/paypal.svg"></a>
		</div>
	</div>
	<div class="col-md-8">
		<h3 noAnchor>Graphic Design Works</h3>
		{% include carousel.html pages=my_array id="graphicDesign" %}
	</div>
</div>