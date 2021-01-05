---
title: Blog Posts
permalink: /blog/
---

# NightScript's Domain -- Blog Section
I like to write a lot so I thought I might as well write things in a blog. These posts are mearly expressing my viewpoints, opinions and thoughts. Please keep an open mind when reading this.

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-4" id="articleList">
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

	let sort = {};
	['length-ascending', 'length-descending', 'date-ascending', 'date-descending'].forEach(elem => sort[elem] = {button: document.createElement("button"), elements: Array.from(articleListContainer.children)});

	sort['length-ascending']['elements']
		.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articlelength")) + parseInt(y.firstElementChild.getAttribute("articlelength")));

	sort['length-ascending'].button.innerHTML = 'Length (Ascending)';
	sort['length-ascending'].button.addEventListener('click', () => {
		Array.prototype.slice.call(articleListContainer.children, 0).forEach(e => e.remove());
		console.log(sort['length-ascending'].button.innerHTML, sort['length-ascending'].elements.map(e=>e.firstElementChild));
		sort['length-ascending']['elements'].forEach(e => articleListContainer.appendChild(e));
	});

	sort['length-descending']['elements']
		.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articlelength")) - parseInt(y.firstElementChild.getAttribute("articlelength")));

	sort['length-descending'].button.innerHTML = 'Length (Descending)';
	sort['length-descending'].button.addEventListener('click', () => {
		Array.prototype.slice.call(articleListContainer.children, 0).forEach(e => e.remove());
		console.log(sort['length-descending'].button.innerHTML, sort['length-descending'].elements.map(e=>e.firstElementChild));
		sort['length-descending']['elements'].forEach(e => articleListContainer.appendChild(e));
	});

	sort['date-descending']['elements']
		.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articledate")) + parseInt(y.firstElementChild.getAttribute("articledate")));

	sort['date-descending'].button.innerHTML = 'Date (Descending)';
	sort['date-descending'].button.addEventListener('click', () => {
		Array.prototype.slice.call(articleListContainer.children, 0).forEach(e => e.remove());
		console.log(sort['date-descending'].button.innerHTML, sort['date-descending'].elements.map(e=>e.firstElementChild));
		sort['date-descending']['elements'].forEach(e => articleListContainer.appendChild(e));
	});

	sort['date-ascending']['elements']
		.sort((x, y) => parseInt(x.firstElementChild.getAttribute("articledate")) - parseInt(y.firstElementChild.getAttribute("articledate")));

	sort['date-ascending'].button.innerHTML = 'Date (Ascending)';
	sort['date-ascending'].button.addEventListener('click', () => {
		Array.prototype.slice.call(articleListContainer.children, 0).forEach(e => e.remove());
		console.log(sort['date-ascending'].button.innerHTML, sort['date-ascending'].elements.map(e=>e.firstElementChild));
		sort['date-ascending']['elements'].forEach(e => articleListContainer.appendChild(e));
	});

	Object.values(sort).forEach(({button}) => {
		button.classList.add('btn');
		button.classList.add('btn-primary');

		button.classList.add('m-3');
		articleListContainer.insertAdjacentElement('afterend', button);
	})
</script>