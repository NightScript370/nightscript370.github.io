---
title: Home
description: This website was made to document things I've accomplished over the years. Maybe you'll find something interesting here?
permalink: /
landing: true
github: true
---

{% capture blog %}
<div class="card mb-2">
	<div class="card-body">
		<h3 noAnchor class="card-title">Latest blog posts</h3>
		<div class="card-text">
			<div>
				<a class="h5" href="/blog/effects-of-9th-grade">The Effects of my 9th grade</a>
				<div class="mb-0">Most of my personality can be traced back to key moments that occured to me in 9th grade, between hacked software, rap battles and teachers.</div>
				<a href="/blog/effects-of-9th-grade" style="text-align: right;">Read More...</a>
			</div>
			<hr>
			<div>
				<a class="h5" href="/blog/online-school-issues">Online School Issues</a>
				<div class="mb-0">Due to the COVID-19 pandemic, there has been a move to online school. However, the video-conference aspect of it brings issues and generally is not needed.</div>
				<a href="/blog/online-school-issues" style="text-align: right;">Read More...</a>
			</div>
			<hr>
			<div>
				<a class="h5" href="/blog/summer-2020">My Summer of 2020</a>
				<div class="mb-0">Despite being in a year where everything is supposed to go wrong and generally disliking summer, this summer managed to be the best summer of my life (so far).</div>
				<a href="/blog/summer-2020" style="text-align: right;">Read More...</a>
			</div>
			<hr>
			<div>
				<a class="h5" href="/blog/edgenuity-issues">Edgenuity Issues</a>
				<div class="mb-0">Edgenuity is a platform designed to replace traditional teaching with video watching and quizes. The problem is that it fails to make a platform where students would actually learn.</div>
				<a href="/blog/edgenuity-issues" style="text-align: right;">Read More...</a>
			</div>
			<hr>
			<div>
				<a class="h5" href="/blog/sonic-return-of-infinite">Classic Sonic: Return of Infinite</a>
				<div class="mb-0">Could a potential sequel to Mania include Forces and its story, while being simultaneously fresh and original?</div>
				<a href="/blog/sonic-return-of-infinite" style="text-align: right;">Read More...</a>
			</div>
			<hr>
			<div style="text-align: center;">
				<a href="/blog" type="button" class="btn btn-primary">Read more articles!</a>
			</div>
		</div>
	</div>
</div>
{% endcapture %}

{% assign nsdomain = "/projects/ns-domain | NightScript Domain | projects/ns-domain.png |  | A website I made to document my accomplishments | Visit its history" | split: ' | ' %}
{% assign yamamura = "# | Yamamura | projects/yamamura.png |  | A discord bot focused on modding communities. Discontinued in January 2020 but the source code is still available | See what it was (Coming Soon)" | split: ' | ' %}
{% assign twilight = "https://github.com/DS-Homebrew/TWiLightMenu | TWiLight Menu++ | projects/twilight.png |  | An all in one menu for launching any application that works on the NTR/TWL environment | View Source Code" | split: ' | ' %}
{% assign dsi = "/projects/dsi-guide | dsi.cfw.guide | projects/dsi-guide-icon.png | The guide to softmodding your DSi | A site originally led by emiyl and jerbear64 now has the backing of the community (mostly myself). | See changes made since power-shift" | split: ' | ' %}
{% assign mmm = "# | Mario Making Mods | projects/MMM.png |  | The community for modding games in the Super Mario Maker series. | Visit its archive (coming soon)" | split: ' | ' %}
{% assign uu = "https://universal-team.net/projects/universal-updater.html | Universal Updater | projects/universal-updater.png |  | An application for downloading homebrew onto your Nintendo 3DS. | Visit its webpage" | split: ' | ' %}

{% assign my_array = "" | split: ',' %}
{% assign my_array = my_array | push: dsi %}
{% assign my_array = my_array | push: yamamura %}
{% assign my_array = my_array | push: twilight %}
{% assign my_array = my_array | push: nsdomain %}
{% assign my_array = my_array | push: mmm %}
{% assign my_array = my_array | push: uu %}

<div class="landing-style pb-5">
	<div class="bgAvatar"></div>
	<div class="landingText container">
		<h1 noAnchor class="text-center page-padding-top">Welcome to the NightScript Domain!</h1>
		<h4 noAnchor class="text-center" id="characterDescription">
			I'm <img src="/assets/images/avatar.png" style="width: 1em; border-radius: 50%;"> NightScript, a 17 year old open-source developer with a love for Nintendo Modding.<br>
			I also specialize in these aspects:
		</h4>
		<ul>
			<li>Graphic Design (using Photoshop CS6 + Paint.NET)</li>
			<li>Website Design (using HTML, CSS and JavaScript)</li>
			<li>DS Homebrew Development (using devKitARM and libnds)</li>
			<li>Leadership + Community Management</li>
			<li>Comprehensive story writing (and other writing in general)</li>
		</ul>
		<div class="text-center mt-3" id="contactMeButtons">
			<a class="nstooltip" data-tooltip="Donate on PayPal" href="https://paypal.me/maorninja"><img src="/assets/images/icons/paypal.svg"></a>
			<a class="nstooltip" data-tooltip="Join my Discord Server" href="https://discord.gg/vbYZCRZ"><img src="/assets/images/icons/discord.svg"></a>
			<a class="nstooltip" data-tooltip="Follow me on Twitter" href="https://twitter.com/NightScript"><img src="/assets/images/icons/twitter.svg"></a>
		</div>
	</div>
</div>
<div class="noAnchorsPadding" style="background-color: var(--background-filter);">
	<h3 noAnchor>Projects I've contributed to</h3>
	{% include socialGrid.html pages=my_array grid="3" %}
</div>
<div class="noAnchorsPadding pt-5" style="background-color: var(--background-filter);">
	<div class="row">
		<div class="col-md-525 col-lg-525 col-xl-4 mb-3">
			<!--<div style="min-height: 8rem;" class="mb-3">
				<picture style="float: right; width: 8rem; line-height: 1;" class="ml-2">
					<source srcset="/assets/images/avatar.avif" style="border-radius: .5rem;" type="image/avif">
					<img src="/assets/images/avatar.png" style="border-radius: .5rem;">
				</picture>
				I'm NightScript, a 16 year old open-source developer with a love for Nintendo modding.
				<div class="row text-center mt-3" id="contactMeButtons">
					<a class="col nstooltip" data-tooltip="Donate on PayPal" href="https://paypal.me/maorninja"><img src="/assets/images/icons/paypal.svg"></a>
					<a class="col nstooltip" data-tooltip="Join my Discord Server" href="https://discord.gg/vbYZCRZ"><img src="/assets/images/icons/discord.svg"></a>
					<a class="col nstooltip" data-tooltip="Follow me on Twitter" href="https://twitter.com/NightScript"><img src="/assets/images/icons/twitter.svg"></a>
				</div>
			</div> -->
			<div class="card mb-3">
				<div class="card-body">
					<a class="h5 card-title card-header-icon" href="https://github.com/NightYoshi370" style="text-decoration: none;"><img src="/assets/images/icons/github.svg" style="height: 1.5em;"> <u>Github Profile stats</u></a>
					<noscript class="gitStats">
						<iframe src="https://gist.github.com/NightYoshi370/9430c9b83c3b5482295115982c843520.pibb" style="width: 100%; height: 100%;"></iframe>
						<img src="https://github-readme-stats.vercel.app/api?username=NightYoshi370&hide_title=true&hide_border=true&theme=algolia&show_icons=true&bg_color=00000000" style="width: 100%; filter: drop-shadow(0px 2.5px 1px var(--shadow-color))">
						<img src="https://github-readme-stats.vercel.app/api/top-langs?username=NightYoshi370&hide_border=true&theme=algolia&layout=compact&bg_color=00000000" style="width: 100%; filter: drop-shadow(0px 2.5px 1px var(--shadow-color))">
					</noscript>
				</div>
				<div class="card-footer"><small class="text-muted">Stats made using <a href="https://github.com/anuraghazra/github-readme-stats">Github Readme Stats</a> & <a href="https://github.com/Bloggify/github-calendar">Github Calendar</a></small></div>
			</div>
		</div>
		<div class="col-md-675 col-lg-675 col-xl-8">
			{{ blog }}
		</div>
	</div>
</div>