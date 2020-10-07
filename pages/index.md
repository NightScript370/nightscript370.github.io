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
				<a class="h5" href="/blog/online-school-issues">Online School Issues</a>
				<div class="mb-0">Due to the COVID-19 pandemic, there has been a move to online school. However, the video-conference aspect of it brings issues and generally isn't needed.</div>
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
			<div>
				<a class="h5" href="/blog/ownership-issues">Ownership Issues</a>
				<div class="mb-0">The true definition of ownership is complicated. Does it mean what you made, or does it mean power?</div>
				<a href="/blog/ownership-issues" style="text-align: right;">Read More...</a>
			</div>
		</div>
	</div>
</div>
{% endcapture %}

{% assign twitter = "/projects/ns-domain | NightScript Domain | projects/ns-domain.png |  | <br>A website I made to document my accomplishments | Visit its history" | split: ' | ' %}
{% assign github = "# | Yamamura | projects/yamamura.png | Pages coming soon | A discord bot focused on modding communities. Discontinued in January 2020 but the source code is still available | See what it was" | split: ' | ' %}
{% assign paypal = "https://github.com/DS-Homebrew/TWiLightMenu | TWiLight Menu++ | projects/twilight.png | Though I'm not the leader, I'm an active contributor | An all in one menu for launching title launchers (such as emulators, hypervisors and how would I explain nds-bootstrap :P). Works on all NTR/TWL environments | View Source Code" | split: ' | ' %}
{% assign discord = "/projects/dsi-guide | dsi.cfw.guide | projects/dsi-guide-icon.png | A community-oriented project | dsi.cfw.guide is a website made to guide users through modding their Nintendo DSi (XL) systems. Originally made by emiyl and jerbear64, I have decided to rewrite it to bring along a few improvements (mostly in wordings). | See what I've changed" | split: ' | ' %}

{% assign my_array = "" | split: ',' %}
{% assign my_array = my_array | push: twitter %}
{% assign my_array = my_array | push: github %}
{% assign my_array = my_array | push: paypal %}
{% assign my_array = my_array | push: discord %}

<div class="row">
	<div class="col-md-525 col-lg-4 mb-3">
		<div style="min-height: 8rem;" class="mb-3">
			<img src="/assets/images/avatar.png" style="float:right; height: 8rem; line-height:1; border-radius: .5rem;" class="ml-2">
			I'm NightScript, a 16 year old open-source developer with a love for Nintendo modding.
			<div class="row text-center mt-3" id="contactMeButtons">
				<a class="col nstooltip" data-tooltip="Donate on PayPal" href="https://paypal.me/maorninja"><img src="/assets/images/icons/paypal.svg"></a>
				<a class="col nstooltip" data-tooltip="Join my Discord Server" href="https://discord.gg/vbYZCRZ"><img src="/assets/images/icons/discord.svg"></a>
				<a class="col nstooltip" data-tooltip="Follow me on Twitter" href="https://twitter.com/NightScript"><img src="/assets/images/icons/twitter.svg"></a>
			</div>
		</div>
		<div class="card mb-3">
			<div class="card-body">
				<a class="h5 card-title card-header-icon" href="https://github.com/NightYoshi370" style="text-decoration: none;"><img src="/assets/images/icons/github.svg" style="height: 1.5em;"> <u>Github Profile stats</u></a>
				<noscript class="gitStats">
					<iframe src="https://gist.github.com/NightYoshi370/9430c9b83c3b5482295115982c843520.pibb"></iframe>
				</noscript>
				<!-- <img src="https://github-readme-stats.vercel.app/api?username=NightYoshi370&hide_title=true&hide_border=true&theme=algolia&show_icons=true&bg_color=00000000" style="width: 100%; filter: drop-shadow(0px 2.5px 1px var(--shadow-color))">
					<img src="https://github-readme-stats.vercel.app/api/top-langs?username=NightYoshi370&hide_border=true&theme=algolia&layout=compact&bg_color=00000000" style="width: 100%; filter: drop-shadow(0px 2.5px 1px var(--shadow-color))"> -->
			</div>
			<div class="card-footer"><small class="text-muted">Stats made using <a href="https://github.com/anuraghazra/github-readme-stats">Github Readme Stats</a> & <a href="https://github.com/Bloggify/github-calendar">Github Calendar</a></small></div>
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
	<div class="col-md-675 col-lg-8">
		<h3 noAnchor class="card-title">Previous Contributions of mine</h3>
		{% include socialGrid.html pages=my_array grid="mini" %}
		<div class="d-none d-lg-block">{{ blog }}</div>
	</div>
</div>
<div class="d-lg-none">{{blog}}</div>