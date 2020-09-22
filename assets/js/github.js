function htmlToElem(html) {
	var template = document.createElement('template');
	template.innerHTML = html.trim();
	return template.content.childNodes[0];
}

export default async function (elements) {
	if (!elements.length)
		return;

	for (let element of elements) {
		const iframeData = htmlToElem(element.innerHTML)

		const attributes = {
			'username': (iframeData.src).match(/github\.com\/([^/]+)/)[1],
			'hide_border': 'true',
			'theme': 'algolia',
			'bg_color': '00000000'
		}
		const paramsURL = Object.keys(attributes).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(attributes[k])).join('&')

		const gitStatsURL = (url) => 'https://cors-anywhere.herokuapp.com/'
			+ 'https://github-readme-stats.vercel.app/api'
			+ url
			+ paramsURL;

		let langsResponse = await fetch(gitStatsURL('/top-langs?layout=compact&card_width=240&'))
		if (langsResponse.ok) {
			let langStatsPage = await langsResponse.text();
			langStatsPage = htmlToElem(langStatsPage)
			langStatsPage.setAttribute('width', null)
			langStatsPage.setAttribute('height', null)
			langStatsPage.setAttribute('viewBox', '24 34 245 110')

			let header = langStatsPage.querySelector('[data-testid="header"]')
			header.setAttribute('y', '15')

			element.insertAdjacentElement('afterend', langStatsPage)
		}

		let profStatsResponse = await fetch(gitStatsURL('?hide_title=true&show_icons=true&'))
		if (profStatsResponse.ok) {
			let profStatsPage = await profStatsResponse.text();
			profStatsPage = htmlToElem(profStatsPage)
			profStatsPage.setAttribute('width', null)
			profStatsPage.setAttribute('height', null)
			profStatsPage.setAttribute('viewBox', '22 22 370 125')
			profStatsPage.classList.add('mb-3')

			let circleRank = profStatsPage.querySelector('[data-testid="rank-circle"]')
			circleRank.setAttribute('transform', 'translate(350, 47.5)')

			profStatsPage.querySelectorAll('[data-testid="icon"]')
				.forEach(iconElem => iconElem.setAttribute('x', '35'))

			profStatsPage.querySelectorAll('text')
				.forEach(elem => {
					switch (parseInt(elem.getAttribute('x'))) {
						case 25:
							elem.setAttribute('x', '55');
							elem.classList.remove('bold')
							break;
						case 200:
							elem.setAttribute('x', '30');
							elem.classList.add('bold')
							elem.setAttribute('text-anchor', 'end')
							break;
					}

					elem.innerHTML = elem.innerHTML
						.replace('Total Stars', 'Stars Gained')
						.replace('Total Commits', 'Commits Pushed')
						.replace('Total PRs', 'PRs sent')
						.replace('Total Issues', 'Issues Opened')
						.replace(':', '')
				})

			element.insertAdjacentElement('afterend', profStatsPage)
		}

		let gitActivityResponse = await fetch('https://cors-anywhere.herokuapp.com/' + (iframeData.src).replace('.pibb', '/raw'))
		if (gitActivityResponse.ok) {
			let codeElement = document.createElement('code')
			codeElement.classList.add('language-text')
			codeElement.innerText = await gitActivityResponse.text();

			let preElement = document.createElement('pre')
			preElement.appendChild(codeElement)
			element.insertAdjacentElement('afterend', preElement)
		}
	}
}