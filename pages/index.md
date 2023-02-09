---
title: Home
description: This website was made to document things I've accomplished over the years. Maybe you'll find something interesting here?
permalink: /
landing: true
noBG: true
---

<div class="landing-style pb-5">
	<div class="bgAvatar"></div>
	<div class="landingText container">
		<h1 noAnchor class="text-center page-padding-top">Welcome to the NightScript Domain!</h1>
		<h4 noAnchor class="text-center" id="characterDescription">
			I'm <img src="/assets/images/avatar.png" style="width: 1em; border-radius: 50%;"> NightScript, a <noscript id="age">19</noscript> year old open-source developer with a love for Nintendo Modding.<br>
			I also specialize in these aspects:
		</h4>
		<ul>
			<li>Graphic Design (using Photoshop CS6 + Paint.NET)</li>
			<li>Website Design (using HTML, CSS and JavaScript)</li>
			<li>DS Homebrew Development (using devKitARM and libnds)</li>
			<li>Leadership + Community Management</li>
			<li>Comprehensive story writing (and other writing in general)</li>
			<li>Video Editing (using HitFilm Express + Windows Movie Maker)</li>
		</ul>
		<div class="text-center mt-3" id="contactMeButtons">
			<a class="nstooltip" data-tooltip="Check out my FOSS portfolio" href="/social/github"><img src="/assets/images/icons/github.svg"></a>
			<a class="nstooltip" data-tooltip="Join my Discord Server" href="/social/discord"><img src="/assets/images/icons/discord.svg"></a>
		</div>
	</div>
</div>
<div class="noAnchorsPadding" style="background-color: var(--background-filter);">
	<div class="row">
		<div class="col-md-525 col-lg-525 col-xl-4 mb-3">
			<!-- <div class="card mb-3">
				<div class="card-body">
					<a class="h5 card-title card-header-icon" href="https://github.com/NightYoshi370" style="text-decoration: none;"><img src="/assets/images/icons/github.svg" style="height: 1.5em;"> <u>Github Profile stats</u></a>
					<noscript class="gitStats">
						<iframe src="https://gist.github.com/NightYoshi370/9430c9b83c3b5482295115982c843520.pibb" style="width: 100%; height: 100%;"></iframe>
						<img src="https://github-readme-stats.nightyoshi370.vercel.app/api?username=NightYoshi370&hide_title=true&hide_border=true&theme=algolia&show_icons=true&bg_color=00000000" style="width: 100%; filter: drop-shadow(0px 2.5px 1px var(--shadow-color))">
						<img src="https://github-readme-stats.nightyoshi370.vercel.app/api/top-langs?username=NightYoshi370&hide_border=true&theme=algolia&layout=compact&bg_color=00000000" style="width: 100%; filter: drop-shadow(0px 2.5px 1px var(--shadow-color))">
					</noscript>
				</div>
				<div class="card-footer"><small class="text-muted">Stats made using <a href="https://github.com/anuraghazra/github-readme-stats">Github Readme Stats</a> & <a href="https://github.com/Bloggify/github-calendar">Github Calendar</a></small></div>
			</div> -->
			{% assign filteredCategory = " " | split: " " %}
			{% for articlePage in site.pages %}
				{% if articlePage.blog %}
					{% assign filteredCategory = filteredCategory | push: articlePage %}
				{% endif %}
			{% endfor %}
			<div class="card mb-2">
				<div class="card-body">
					<h3 noAnchor class="card-title">Latest blog posts <noscript>(Order requires JS)</noscript></h3>
					<div class="card-text">
						<div id="blogList">
							{% for articlePage in filteredCategory %}
								<div articleDate="{{ articlePage.initialPublishDate }}">
									<a class="h5" href="{{articlePage.permalink}}">{{articlePage.title}}</a>
									<div class="mb-0">{{articlePage.description}}</div>
									<a href="{{articlePage.permalink}}" style="text-align: right;">Read More...</a>
									<hr>
								</div>
							{% endfor %}
						</div>
						<div style="text-align: center;">
							<a href="/blog" type="button" class="btn btn-primary">Read more articles!</a>
						</div>
					</div>
					<script>
						let blogList = [...document.getElementById("blogList").children]
							.sort((x, y) => new Date(y.getAttribute("articledate")) - new Date(x.getAttribute("articledate")))
							.slice(0, 3);
						Array.from(document.getElementById("blogList").children).forEach(e=>e.remove());
						blogList.forEach(article => document.getElementById("blogList").appendChild(article));
					</script>
				</div>
			</div>
		</div>
		<div class="col-md-675 col-lg-675 col-xl-8">
			<a class="h3" href="/projects">Projects I've contributed to</a>
			<style>
				.carousel-item img {
					height: 512px;
					width: 512px;
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
				.carousel-item a.h1 {
					color: var(--text-color);
				}
				.imageFadeGradient::after {
					display: block;
					position: relative;
					background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(0,0,0,1) 100%);
					margin-top: -256px;
					height: 256px;
					width: 100%;
					content: '';
				}
				.carousel-caption {
					right: 0;
					text-align: left;
					color: var(--text-color);
				}
			</style>
			<div id="blogCarousel" class="carousel slide mb-3 mt-3" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="imageFadeGradient"><img src="/assets/images/projects/universal-updater.png" alt="..."></div>
						<div class="carousel-caption">
							<a href="https://universal-team.net/projects/universal-updater.html" class="h1">Universal Updater</a>
							<h4 noAnchor>An application for downloading homebrew onto your Nintendo 3DS.</h4>
						</div>
					</div>
					<div class="carousel-item">
						<div class="imageFadeGradient"><img src="/assets/images/projects/dsi-guide-icon.png" alt="..."></div>
						<div class="carousel-caption">
							<a href="/projects/dsi-guide" class="h1">dsi.cfw.guide</a>
							<h4 noAnchor>A site originally led by emiyl and jerbear64 now has the backing of the community (mostly myself).</h4>
						</div>
					</div>
					<div class="carousel-item">
						<div class="imageFadeGradient"><img src="/assets/images/projects/twilight.png" alt="..."></div>
						<div class="carousel-caption">
							<a href="https://github.com/DS-Homebrew/TWiLightMenu" class="h1">TWiLight Menu++</a>
							<h4 noAnchor>An all in one menu for launching any application that works on the NTR/TWL environment</h4>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#blogCarousel" role="button" data-bs-slide="prev">
					<picture style="width: 4em;">
						<source srcset="/assets/images/icons/icons8-back-48.png" type="image/avif">
						<img src="/assets/images/icons/icons8-back-48.png">
					</picture>
				</a>
				<a class="carousel-control-next" href="#blogCarousel" role="button" data-bs-slide="next">
					<picture style="width: 4em;">
						<source srcset="/assets/images/icons/icons8-forward-48.png" type="image/avif">
						<img src="/assets/images/icons/icons8-forward-48.png">
					</picture>
				</a>
			</div>
		</div>
	</div>
</div>

<script>
	const dob = new Date("10/22/2003");
	const month_diff = Date.now() - dob.getTime();  
	const age_dt = new Date(month_diff);
	const year = age_dt.getUTCFullYear();  
	const age = Math.abs(year - 1970);
	
	const hardcodeAgeElement = document.getElementById("age");
	const dynamicAgeElement = document.createElement("span");
	dynamicAgeElement.appendChild(document.createTextNode("0"))
	hardcodeAgeElement.insertAdjacentElement("afterend", dynamicAgeElement);

	while (dynamicAgeElement.innerText !== age.toString()) {
		delay(250).then(() => { dynamicAgeElement.innerText = (parseInt(dynamicAgeElement.innerText) + 1).toString() });
	}

	function delay(time) {
		return new Promise(resolve => setTimeout(resolve, time));
	}
</script>