---
title: Blog Posts
permalink: /blog/
material: true
---

# NightScript's Domain -- Blog Section
I like to write a lot so I thought I might as well write things in a blog. These posts are mearly expressing my viewpoints, opinions and thoughts. Please keep an open mind when reading this.

<div class="mb-3 d-flex" style="justify-content: space-between;">
	<div>
		<div class="mdc-select mdc-select--outlined rounded">
			<div class="mdc-select__anchor">
				<span class="mdc-notched-outline">
					<span class="mdc-notched-outline__leading"></span>
					<span class="mdc-notched-outline__notch"><span id="outlined-select-label" class="mdc-floating-label mdc-floating-label--float-above">Type</span></span>
					<span class="mdc-notched-outline__trailing"></span>
				</span>
				<span class="mdc-select__selected-text-container"><span id="filterSelected" class="mdc-select__selected-text">All/No Filter</span></span>
				<span class="mdc-select__dropdown-icon">
					<svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
						<polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
						<polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
					</svg>
				</span>
			</div>
			<div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
				<ul class="mdc-list" role="listbox" aria-label="Type">
					<li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="all" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">All/No Filter</span>
					</li>
					<li class="mdc-list-item" aria-selected="false" data-value="education" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">Educational/School</span>
					</li>
					<li class="mdc-list-item" aria-selected="false" data-value="personal" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">Personal Stories</span>
					</li>
					<li class="mdc-list-item" aria-selected="false" data-value="vgames" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">Video Gaming</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div>
		<div class="mdc-select mdc-select--outlined rounded">
			<div class="mdc-select__anchor">
				<span class="mdc-notched-outline">
					<span class="mdc-notched-outline__leading"></span>
					<span class="mdc-notched-outline__notch"><span id="outlined-select-label" class="mdc-floating-label mdc-floating-label--float-above">Sort</span></span>
					<span class="mdc-notched-outline__trailing"></span>
				</span>
				<span class="mdc-select__selected-text-container"><span id="sortSelected" class="mdc-select__selected-text">Date</span></span>
				<span class="mdc-select__dropdown-icon">
					<svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
						<polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
						<polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
					</svg>
				</span>
			</div>
			<div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
				<ul class="mdc-list" role="listbox" aria-label="Type">
					<li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="date" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">Date</span>
					</li>
					<li class="mdc-list-item" aria-selected="false" data-value="length" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">Length</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="mdc-select mdc-select--outlined rounded">
			<div class="mdc-select__anchor" aria-labelledby="outlined-select-label">
				<span class="mdc-notched-outline">
					<span class="mdc-notched-outline__leading"></span>
					<span class="mdc-notched-outline__notch"><span id="outlined-select-label" class="mdc-floating-label mdc-floating-label--float-above">Direction</span></span>
					<span class="mdc-notched-outline__trailing"></span>
				</span>
				<span class="mdc-select__selected-text-container"><span id="directionSelected" class="mdc-select__selected-text">Descending</span></span>
				<span class="mdc-select__dropdown-icon">
					<svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
						<polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
						<polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
					</svg>
				</span>
			</div>
			<div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
				<ul class="mdc-list" role="listbox" aria-label="Type">
					<li class="mdc-list-item" aria-selected="false" data-value="education" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">Ascending</span>
					</li>
					<li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="all" role="option">
						<span class="mdc-list-item__ripple"></span>
						<span class="mdc-list-item__text">Descending</span>
					</li>
				</ul>
			</div>
		</div>
		<button class="btn btn-primary" onclick="refreshListing()">Submit</button>
	</div>
</div>

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-4 mb-3" id="articleList">
	<div class="col">{% include articleCard.html cardTitle="Privacy Issues" cardLink="/blog/privacy" cardDescription="Where's the fine line of how much info you have on someone? How do you even get that person's info?" articleDate="8" articleLength="2" %}</div>
	<div class="col">{% include articleCard.html cardTitle="Progressive Development" cardLink="/blog/progressive-development" cardDescription="The true definition of progressive development, when you realize your newer work is better than your old one. How did that happen? What process is taking place?" articleDate="7" articleLength="8" %}</div>
	<div class="col">{% include articleCard.html cardTitle="Effects of my 9th grade" cardLink="/blog/effects-of-9th-grade" cardDescription="Most of my personality can be traced back to key moments that occured to me in 9th grade." articleDate="6" articleLength="3" %}</div>
	<div class="col">{% include articleCard.html cardTitle="Online School Issues" cardLink="/blog/online-school-issues" cardDescription="Debating whether video-conferencing is about inclusion or control." articleDate="5" articleLength="4" %}</div>
	<div class="col">{% include articleCard.html cardTitle="My Summer of 2020" cardLink="/blog/summer-2020" cardDescription="A summer where everything is supposed to go wrong ended up being the best summer of my life (so far)." articleDate="4" articleLength="1" %}</div>
	<div class="col">{% include articleCard.html cardTitle="Edgenuity Issues" cardLink="/blog/edgenuity-issues" cardDescription="Edgenuity's failure at adapting learning into the digital age." articleDate="3" articleLength="7" %}</div>
	<div class="col">{% include articleCard.html cardTitle="Classic Sonic: Return of Infinite" cardLink="/blog/sonic-return-of-infinite" cardDescription="Could a potential sequel to Mania include Forces and its story, while being simultaneously fresh and original?" articleDate="2" articleLength="6" %}</div>
	<div class="col">{% include articleCard.html cardTitle="What is considered ownership" cardLink="/blog/ownership-issues" cardDescription="How are you the owner of something? Is it based on if you're the author, or can that be ripped out of you?" articleDate="1" articleLength="5" %}</div>
</div>

## Statistics

- Most recent article with a broad topic: [Progressive Development](/blog/progressive-development)
- Most recent article with a specific yet broad topic: [Privacy Issues](/blog/privacy)
- Tallest article (images and layouts included): [My Summer of 2020](/blog/summer-2020)
- Tallest article (purely text): [What is considered ownership](/blog/ownership-issues)
- Shortest article: [Progressive Development](/blog/progressive-development)
- Most recent personal event: [My Summer of 2020](/blog/summer-2020)
- Most recent article describing a personal event: [Effects of 9th grade](/blog/effects-of-9th-grade)
- Most recent rant: [Edgenuity Issues](/blog/edgenuity-issues)
- Most recent constructive analysis at issue: [Online School Issues](/blog/online-school-issues)
- Most recent video game related article: [Classic Sonic: Return of Infinite](/blog/sonic-return-of-infinite)

<script>
	const articleListContainer = document.getElementById("articleList");
	const filter = {
		'All/No Filter': {
			'Date (Ascending)': [...articleListContainer.children].sort((x, y) => parseInt(x.firstElementChild.getAttribute("articledate")) - parseInt(y.firstElementChild.getAttribute("articledate"))),
			'Date (Descending)': [...articleListContainer.children].sort((x, y) => parseInt(x.firstElementChild.getAttribute("articledate")) + parseInt(y.firstElementChild.getAttribute("articledate"))),
			'Length (Ascending)': [...articleListContainer.children].sort((x, y) => parseInt(x.firstElementChild.getAttribute("articlelength")) - parseInt(y.firstElementChild.getAttribute("articlelength"))).reverse(),
			'Length (Descending)': [...articleListContainer.children].sort((x, y) => parseInt(x.firstElementChild.getAttribute("articlelength")) - parseInt(y.firstElementChild.getAttribute("articlelength"))),
		},
		'Educational/School': {
			'Date (Ascending)': [...articleListContainer.children]
				.filter(elem => elem.firstElementChild.getAttribute("articletype") == 'school')
				.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articledate")) - parseInt(y.firstElementChild.getAttribute("articledate"))),
			'Date (Descending)': [...articleListContainer.children]
				.filter(elem => elem.firstElementChild.getAttribute("articletype") == 'school')
				.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articledate")) + parseInt(y.firstElementChild.getAttribute("articledate"))),
			'Length (Ascending)': [...articleListContainer.children]
				.filter(elem => elem.firstElementChild.getAttribute("articletype") == 'school')
				.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articlelength")) - parseInt(y.firstElementChild.getAttribute("articlelength"))).reverse(),
			'Length (Descending)': [...articleListContainer.children]
				.filter(elem => elem.firstElementChild.getAttribute("articletype") == 'school')
				.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articlelength")) - parseInt(y.firstElementChild.getAttribute("articlelength"))),
		}
	};

	const refreshListing = () => {
		Array.prototype.slice.call(articleListContainer.children, 0).forEach(e => e.remove());
		filter[document.getElementById("filterSelected").innerHTML][document.getElementById("sortSelected").innerHTML + ` (${document.getElementById("directionSelected").innerHTML})`].forEach(e => articleListContainer.appendChild(e));
	};
</script>