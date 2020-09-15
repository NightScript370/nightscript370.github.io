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
		<div style="min-height: 8rem;" class="mb-3">
			<img src="/assets/images/avatar.png" style="float:right; height: 8rem; line-height:1; border-radius: .5rem;" class="ml-2">
			I'm NightScript, a 16 year old open-source developer with a love for Nintendo modding.
			<div class="row text-center mt-3" id="contactMeButtons">
				<a class="col nstooltip" data-tooltip="Follow me on Twitter" href="https://twitter.com/NightScript"><img src="/assets/images/icons/twitter.svg"></a>
				<a class="col nstooltip" data-tooltip="Join my Discord Server" href="https://discord.gg/vbYZCRZ"><img src="/assets/images/icons/discord.svg"></a>
				<a class="col nstooltip" data-tooltip="Donate on PayPal" href="https://paypal.me/maorninja"><img src="/assets/images/social/paypal.svg"></a>
			</div>
		</div>
		<div class="card mb-3">
			<div class="card-body">
				<a class="h5 card-title card-header-icon" href="https://github.com/NightYoshi370" style="text-decoration: none;"><img src="/assets/images/icons/github.svg" style="height: 1.5em;"> <u>Github Profile stats</u></a>
				<script src="https://gist.github.com/NightYoshi370/9430c9b83c3b5482295115982c843520.js"></script>
				<img src="https://github-readme-stats.vercel.app/api?username=NightYoshi370&hide_title=true&hide_border=true&theme=algolia&show_icons=true" style="width: 100%;" class="mb-3">
				<img src="https://github-readme-stats.vercel.app/api/top-langs?username=NightYoshi370&hide_border=true&theme=algolia&layout=compact" style="width: 100%;">
			</div>
			<div class="card-footer"><small class="text-muted">Stats made using <a href="https://github.com/anuraghazra/github-readme-stats">Github Readme Stats</a></small></div>
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
	</div>
	<div class="col-md-8">
		<div class="card mb-3">
			<div class="card-body">
				<h3 noAnchor class="card-title">Previous Contributions of mine</h3>
				<div class="card-text">
					<div style="min-height: 6rem;">
						<img src="/assets/images/projects/servericon-trim.png" style="float:right; height: 6rem; line-height:1; border-radius: .5rem;" class="ml-2">
						<a class="h5" href="/projects/ns-domain">NightScript Domain</a>
						<p>The very website you are using right now was something I (alongside my friends) coded back during the COVID-19 quarantine</p>
					</div>
					<hr>
					<div style="min-height: 6rem;">
						<img src="/assets/images/projects/yamamura.png" style="float:right; height: 6rem; line-height:1; border-radius: .5rem;" class="ml-2">
						<a class="h5" href="#">Yamamura (Link not working yet)</a>
						<p>A discord bot focused on modding communities. Discontinued in January 2020 but the source code is still available</p>
					</div>
					<hr>
					<div style="min-height: 6rem;">
						<img src="/assets/images/projects/twilight.png" style="float:right; height: 6rem; line-height:1; border-radius: .5rem;" class="ml-2">
						<a class="h5" href="https://github.com/DS-Homebrew/TWiLightMenu">TWiLight Menu++</a>
						<p>An all in one menu for launching title launchers (such as emulators, hypervisors and how would I explain nds-bootstrap :P). Works on all NTR/TWL environments</p>
					</div>
					<hr>
					<div style="min-height: 6rem;">
						<img src="/assets/images/projects/dsi-guide-icon.png" style="float:right; height: 6rem; line-height:1; border-radius: .5rem;" class="ml-2">
						<a class="h5" href="/projects/dsi-guide">dsi.cfw.guide</a>
						<p>dsi.cfw.guide is a website made to guide users through modding their Nintendo DSi (XL) systems. Originally made by emiyl and jerbear64, I have decided to rewrite it to bring along a few improvements (mostly in wordings).</p>
					</div>
				</div>
			</div>
		</div>
		<div class="card mb-2">
			<div class="card-body">
				<h3 noAnchor class="card-title">Latest blog posts</h3>
				<div class="card-text">
					<div style="position: relative;">
						<a class="h5" href="/blog/summer-2020">My Summer of 2020</a>
						<p style="display:block;">Despite being in a year where everything is supposed to go wrong and generally disliking summer, this summer managed to be the best summer of my life (so far).</p>
						<a href="/blog/summer-2020" style="position: absolute; right: 0; bottom: 0">Read More...</a>
					</div>
					<hr>
					<div style="position: relative;">
						<a class="h5" href="/blog/edgenuity-issues">Issues with Edgenuity</a>
						<p style="display:block;">Edgenuity is a platform designed to replace traditional teaching with video watching and quizes. The problem is that it fails to make a platform where students would actually learn.</p>
						<a href="/blog/edgenuity-issues" style="position: absolute; right: 0; bottom: 0">Read More...</a>
					</div>
					<hr>
					<div style="position: relative;">
						<a class="h5" href="/blog/sonic-return-of-infinite">Classic Sonic: Return of Infinite</a>
						<p style="display:block;">Could a potential sequel to Mania include Forces and its story, while being simultaneously fresh and original?</p>
						<a href="/blog/sonic-return-of-infinite" style="position: absolute; right: 0; bottom: 0">Read More...</a>
					</div>
					<hr>
					<div style="position: relative;">
						<a class="h5" href="/blog/ownership-issues">Issues with Ownership</a>
						<p style="display:block;">The true definition of ownership is complicated. Does it mean what you made, or does it mean power?</p>
						<a href="/blog/ownership-issues" style="position: absolute; right: 0; bottom: 0">Read More...</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!--
<h3>Graphic Design Works</h3>
{% include carousel.html pages=my_array id="graphicDesign" %}
-->