---
title: Blog Posts
permalink: /blog/
material: true
noBG: true
---

<style>
	.carousel-item img {
		height: 75vh;
		width: 100vw;
		object-fit: cover;
	}

	.carousel-item a.h1 {
		color: var(--text-color);
	}

	.imageFadeGradient::after {
		display: block;
		position: relative;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, var(--background-filter) 100%);
		margin-top: -25vh;
		height: 25vh;
		width: 100%;
		content: '';
	}

	.carousel-caption {
		right: 0;
		text-align: left;
		color: var(--text-color);
	}
</style>

<div id="blogCarousel" class="carousel slide" data-bs-ride="carousel">
	<div class="carousel-inner">
		<div class="carousel-item active">
			<div class="imageFadeGradient"><img src="https://raw.githubusercontent.com/privacytools/brand/master/shield/shield.svg" alt="..."></div>
			<div class="carousel-caption">
				<a href="/blog/privacy" class="h1">Privacy Issues</a>
				<h4 noAnchor>Where's the fine line of how much info you have on someone? How do you even get that person's info?</h4>
			</div>
		</div>
		<div class="carousel-item">
			<div class="imageFadeGradient"><img src="https://www.woodtv.com/wp-content/uploads/sites/51/2020/03/zoom-school-pic.jpg" alt="..."></div>
			<div class="carousel-caption">
				<a href="/blog/online-school-issues" class="h1">Online School Issues</a>
				<h4 noAnchor>Debating whether video-conferencing is about inclusion or control.</h4>
			</div>
		</div>
		<div class="carousel-item">
			<div class="imageFadeGradient"><img src="https://sc-manage.com/wp-content/uploads/2020/07/Covid-Safety-1080x675.png" alt="..."></div>
			<div class="carousel-caption">
				<a href="/blog/summer-2020" class="h1">My summer of 2020</a>
				<h4 noAnchor>A summer where everything is supposed to go wrong ended up being the best summer of my life (so far).</h4>
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

<div class="page-padding" style="background-color: var(--background-filter);">
	<div class="mb-3 d-md-flex" style="justify-content: space-between;">
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
						{% assign all_categories = site.pages | map: "articleType" | sort_natural %}
						{% assign filteredCategory = " " | split: " " %}
						{% for item in all_categories %}
							{% if filteredCategory contains item or item == blank or item == nil %}{%else%}{% assign filteredCategory = filteredCategory | push: item %}{% endif %}
						{% endfor %}
						{% for item in filteredCategory %}
							<li class="mdc-list-item" aria-selected="false" data-value="{{ item }}" role="option">
								<span class="mdc-list-item__ripple"></span>
								<span class="mdc-list-item__text">{{ item }}</span>
							</li>
						{% endfor %}
					</ul>
				</div>
			</div>
			<label class="mdc-text-field mdc-text-field--outlined">
				<span class="mdc-notched-outline">
					<span class="mdc-notched-outline__leading"></span>
					<span class="mdc-notched-outline__notch"><span class="mdc-floating-label" id="searchFilterNotch">Filter by Title</span></span>
					<span class="mdc-notched-outline__trailing"></span>
				</span>
				<input id="titleFilterField" type="text" class="mdc-text-field__input" aria-labelledby="searchFilterNotch">
			</label>
		</div>
		<div>
			<div class="mdc-select mdc-select--outlined rounded">
				<div class="mdc-select__anchor">
					<span class="mdc-notched-outline">
						<span class="mdc-notched-outline__leading"></span>
						<span class="mdc-notched-outline__notch"><span id="outlined-select-label" class="mdc-floating-label mdc-floating-label--float-above">Sort</span></span>
						<span class="mdc-notched-outline__trailing"></span>
					</span>
					<span class="mdc-select__selected-text-container"><span id="sortSelected" class="mdc-select__selected-text">Initial Publishing Date</span></span>
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
							<span class="mdc-list-item__text">Initial Publishing Date</span>
						</li>
						<li class="mdc-list-item" aria-selected="false" data-value="editDate" role="option">
							<span class="mdc-list-item__ripple"></span>
							<span class="mdc-list-item__text">Last Edited Date</span>
						</li>
						<li class="mdc-list-item" aria-selected="false" data-value="length" role="option">
							<span class="mdc-list-item__ripple"></span>
							<span class="mdc-list-item__text">Length</span>
						</li>
						<li class="mdc-list-item" aria-selected="false" data-value="title" role="option">
							<span class="mdc-list-item__ripple"></span>
							<span class="mdc-list-item__text">Title</span>
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
		{% for articlePage in site.pages %}
			{% if articlePage.blog %}
				<div class="col">
					{% include articleCard.html cardTitle=articlePage.title cardLink=articlePage.permalink cardDescription=articlePage.description articleDate=articlePage.initialPublishDate articleLength=articlePage.length articleType=articlePage.articleType articleEditDate=articlePage.editDate %}
				</div>
			{% endif %}
		{% endfor %}
	</div>
</div>

<script>
	const articleListContainer = document.getElementById("articleList");
	let filter = {
		'All/No Filter': {
			'Initial Publishing Date (Descending)': [...articleListContainer.children].sort((x, y) => new Date(y.firstElementChild.getAttribute("articledate")) - new Date(x.firstElementChild.getAttribute("articledate"))),
			'Initial Publishing Date (Ascending)': [...articleListContainer.children].sort((x, y) => new Date(x.firstElementChild.getAttribute("articledate")) - new Date(y.firstElementChild.getAttribute("articledate"))),
			'Last Edited Date (Descending)': [...articleListContainer.children].sort((x, y) => new Date(y.firstElementChild.getAttribute("articleeditdate")) - new Date(x.firstElementChild.getAttribute("articleeditdate"))),
			'Last Edited Date (Ascending)': [...articleListContainer.children].sort((x, y) => new Date(x.firstElementChild.getAttribute("articleeditdate")) - new Date(y.firstElementChild.getAttribute("articleeditdate"))),
			'Length (Descending)': [...articleListContainer.children].sort((x, y) => parseInt(x.firstElementChild.getAttribute("articlelength")) - parseInt(y.firstElementChild.getAttribute("articlelength"))),
			'Title (Descending)': [...articleListContainer.children].sort((a, b) => b.getElementsByClassName('card-title')[0].innerText.localeCompare(a.getElementsByClassName('card-title')[0].innerText)),
			'Title (Ascending)': [...articleListContainer.children].sort((a, b) => a.getElementsByClassName('card-title')[0].innerText.localeCompare(b.getElementsByClassName('card-title')[0].innerText)),
		},
	};
	filter['All/No Filter']['Length (Ascending)'] = [...filter['All/No Filter']['Length (Descending)']].reverse();

	const allTypes = [{% for item in filteredCategory %}"{{item}}",{% endfor %}];
	allTypes.forEach(type => {
		filter[type] = {};
		for (const [key, value] of Object.entries(filter["All/No Filter"]))
			filter[type][key] = [...value].filter(elem => elem.firstElementChild.getAttribute("articletype") == type);
	});

	const refreshListing = () => {
		Array.prototype.slice.call(articleListContainer.children, 0).forEach(e => e.remove());
		let searchResults = [...filter[document.getElementById("filterSelected").innerHTML][document.getElementById("sortSelected").innerHTML + ` (${document.getElementById("directionSelected").innerHTML})`]];

		if (document.getElementById("titleFilterField").value != "")
			searchResults = searchResults.filter(elem => elem.getElementsByClassName('card-title')[0].innerText.includes(document.getElementById("titleFilterField").value));

		searchResults.forEach(e => articleListContainer.appendChild(e));
	};
	refreshListing();
</script>