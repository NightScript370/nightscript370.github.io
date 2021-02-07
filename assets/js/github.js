import Decimal from './libs/decimal.js';

const gitStatsDisplay = 'piecard';
const corsURL = '';

function htmlToElem(html) {
	var template = document.createElement('template');
	template.innerHTML = html.trim();
	return template.content.childNodes[0];
}

export default async function (elements) {
	if (!elements.length)
		return;

	if (!String.prototype.replaceAll)
		Object.defineProperty(String.prototype, "replaceAll", { value: function replaceAll(search, replacement) {
			var target = this;
			let result = target;
		
			if (search instanceof Array) {
				for (var splitvar of search) {
					result = result.split(splitvar).join(replacement)
				}
			} else {
				result = result.split(search).join(replacement)
			}
		
			return result;
		}, enumerable: false})

	for (let element of elements) {
		const iframeData = htmlToElem(element.innerText)

		const attributes = {
			'username': (iframeData.src).match(/github\.com\/([^/]+)/)[1],
			'hide_border': 'true',
			'theme': 'algolia',
			'bg_color': '00000000'
		}

		const gitStatsURL = (url) => corsURL
			+ 'https://github-readme-stats.nightyoshi370.vercel.app/api'
			+ url
			+ Object.keys(attributes).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(attributes[k])).join('&');

		const langStatsURL = gitStatsURL('/top-langs?layout=compact&card_width=100&')

		const gridContainer = document.createElement('div')
		gridContainer.classList.add('gitGrid')

		const langBar = document.createElement("div")
		langBar.classList.add(gitStatsDisplay == 'piechart' || gitStatsDisplay == 'piecard' ? "gitLangPie" : "gitLangBar")

		const langElementList = document.createElement("div")
		langElementList.classList.add("gitLangGrid")

		/* let ProfileStatsHTML;
		try {
			const langsResponse = await fetch(langStatsURL);
			if (!langsResponse.ok)
				throw new Error();

			const langStatsPage = htmlToElem(await langsResponse.text());
			const langItems = langStatsPage.querySelectorAll('[data-testid="lang-name"]')

			switch (gitStatsDisplay) {
				case 'piechart':
				case 'piecard':
				case 'bar':
					let barItemSize, barItemColor;
					let previousSize = new Decimal(0)
					langItems
						.forEach(r => {
							barItemColor = r.previousElementSibling.getAttribute("fill")
							langElementList.innerHTML += `<div><div class="gitLangIcon" style="background: ${barItemColor};"></div> ${r.innerHTML}</div>`

							barItemSize = /(\d+(?:.\d+)?)/.exec(r.innerHTML)[1]

							if (gitStatsDisplay == 'piechart' || gitStatsDisplay == 'piecard') {
								langBar.innerHTML += `<div class="pie__segment" style="--offset: ${previousSize}; --value: ${barItemSize}; --bg: ${barItemColor}; ${parseInt(barItemSize) > 50 ? '--over50: 1;' : ''}"></div>`;
								previousSize = previousSize.plus(barItemSize)
							} else
								langBar.innerHTML += `<div style="width: ${barItemSize}%; background: ${barItemColor};"></div>`
						})

					if (gitStatsDisplay == 'bar') {
						element.insertAdjacentElement('afterend', langElementList);
						element.insertAdjacentElement('afterend', langBar);
						element.insertAdjacentHTML('afterend', '<h4 class="mb-0">Most Used Languages</h4>')
					}
					break;
				case 'imagemanipulate':
					langStatsPage.removeAttribute('width')
					langStatsPage.removeAttribute('height')
					langStatsPage.setAttribute('style', 'width: 100%; filter: drop-shadow(0px 1.25px 1px var(--shadow-color))')

					// Fix Heading Padding
					langStatsPage
						.querySelector('[data-testid="card-title"]')
						.setAttribute('transform', 'translate(25, 20)')

					// Fix body padding
					langStatsPage
						.querySelector('[data-testid="main-card-body"]')
						.setAttribute('transform', 'translate(0, 30)')

					const style = langStatsPage.querySelector('style')
					style.innerHTML = style.innerHTML
						.replace(".lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: #FFFFFF }", ".lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: var(--text-color); font-weight: bold; }")
						.replace("fill: #00AEFF;", "fill: var(--text-color);")

					// WideBox sizing - Length of bar: 315
					const wideLangBox = langStatsPage.cloneNode(true);
					wideLangBox.classList.add('d-none')
					wideLangBox.classList.add('d-xl-block')
					wideLangBox.setAttribute('viewBox', '24 0 365 85')

					// Until this PR gets merged, we have to manually extract the percent from the inner values themselves
					// https://github.com/anuraghazra/github-readme-stats/pull/516

					const wideLangItems = wideLangBox
						.querySelectorAll('[data-testid="lang-name"]')

					let WideBoxBarWidth = new Decimal(0);
					let WideBoxRectWidth;
					wideLangBox
						.querySelectorAll('[data-testid="lang-progress"]')
						.forEach((r, num) => {
							//WideBoxRectWidth = new Decimal(r.getAttribute("width")).toDecimalPlaces(2).times(2);
							WideBoxRectWidth = new Decimal(/(\d+(?:.\d+)?)/.exec(wideLangItems[num].innerHTML)[1]).toDecimalPlaces(2).times(3.5);

							r.setAttribute("x", WideBoxBarWidth.toFixed(2));
							r.setAttribute("width", WideBoxRectWidth.toFixed(2))

							WideBoxBarWidth = WideBoxBarWidth.plus(WideBoxRectWidth);
						})

					try {
						wideLangBox
							.getElementById("rect-mask")
							.firstElementChild
							.setAttribute("width", WideBoxBarWidth)
					} catch(e) {
						wideLangBox
							.querySelector("mask#rect-mask rect")
							.setAttribute("width", WideBoxBarWidth)
					}

					let i = 0;
					wideLangBox
						.querySelector('[data-testid="lang-items"]')
						.querySelectorAll('g')
						.forEach(r => {
							r.setAttribute("transform", "translate(" + (130 * (i % 3)) + "," + (20 + 20 * Math.floor(i / 3)) + ")");
							i++;
						});

					// TallBox sizing - Length of bar: 250
					const tallLangBox = langStatsPage.cloneNode(true);
					tallLangBox.classList.add('d-xl-none')
					tallLangBox.setAttribute('viewBox', '24 0 250 125')

					const tallLangItems = tallLangBox
						.querySelectorAll('[data-testid="lang-name"]')

					let tallBoxBarWidth = new Decimal(0);
					let tallBoxRectWidth;
					tallLangBox
						.querySelectorAll('[data-testid="lang-progress"]')
						.forEach((r, num) => {
							//tallBoxRectWidth = new Decimal(r.getAttribute("width")).toDecimalPlaces(2).times(2);
							tallBoxRectWidth = new Decimal(/(\d+(?:.\d+)?)/.exec(tallLangItems[num].innerHTML)[1]).toDecimalPlaces(2).times(2.4);

							r.setAttribute("x", tallBoxBarWidth.toFixed(2));
							r.setAttribute("width", tallBoxRectWidth.toFixed(2))

							tallBoxBarWidth = tallBoxBarWidth.plus(tallBoxRectWidth);
						})

					try {
						tallLangBox
							.getElementById("rect-mask")
							.firstElementChild
							.setAttribute("width", tallBoxBarWidth)
					} catch(e) {
						tallLangBox
							.querySelector("mask#rect-mask rect")
							.setAttribute("width", tallBoxBarWidth)
					}

					element.insertAdjacentElement('afterend', tallLangBox)
					element.insertAdjacentElement('afterend', wideLangBox)
					break;
			}
		} catch (e) {
			console.error("[ERROR] Lang Insert error. RESORTING TO IMAGE", e) */
			const langStatsImage = document.createElement('img')
			langStatsImage.src = langStatsURL
				.replace(corsURL, '')
				.replace('card_width=100', 'card_width=250')
			langStatsImage.setAttribute('style', 'width: 100%; filter: drop-shadow(0px 1.25px 1px var(--shadow-color))')
			element.insertAdjacentElement('afterend', langStatsImage)
		// }

		const profStatsURL = gitStatsURL('?hide_title=true&show_icons=true&disable_animations=true&' + (gitStatsDisplay == 'imagemanipulate' ? '' : 'hide_rank=true&'))
		/* try {
			const profStatsResponse = await fetch(profStatsURL)
			if (!profStatsResponse.ok)
				throw new Error();

			const profStatsPage = htmlToElem(await profStatsResponse.text());
			switch (gitStatsDisplay) {
				case 'bar':
				case 'piechart':
				case 'piecard':
					let CommitsPushedTitle;
					try {
						CommitsPushedTitle = Array.from(profStatsPage.querySelectorAll('text'))
							.find(elem => elem.hasAttribute('data-testlabel') && elem.getAttribute('data-testlabel') == 'commits')
							.innerHTML
					} catch (e) {
						console.error('Taking advantage of fallback', e);
						CommitsPushedTitle = 'Commits Pushed (2021)'
					}

					ProfileStatsHTML = `<div class="gitProfileStatsGrid ${gitStatsDisplay == 'bar' ? 'mb-3' : ''}">
						<div class="rightAlign">${profStatsPage.querySelector('text[data-testid="stars"]').innerHTML}</div>
						<img src="/assets/images/icons/star.svg">
						<div>Stars Gained</div>

						<div class="rightAlign">${profStatsPage.querySelector('text[data-testid="commits"]').innerHTML}</div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1" width="16" height="16">
							<path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>
						</svg>
						<div>${CommitsPushedTitle}</div>

						<div class="rightAlign">${profStatsPage.querySelector('text[data-testid="prs"]').innerHTML}</div>
						<img src="/assets/images/icons/prs.png">
						<div>PRs Sent</div>

						<div class="rightAlign">${profStatsPage.querySelector('text[data-testid="issues"]').innerHTML}</div>
						<img src="/assets/images/icons/info.svg">
						<div>Total Issues</div>

						<div class="rightAlign">${profStatsPage.querySelector('text[data-testid="contribs"]').innerHTML}</div>
						<img src="/assets/images/icons/repo.png">
						<div>Contributed To</div>
					</div>`

					if (gitStatsDisplay == 'bar')
						element.insertAdjacentHTML('afterend', ProfileStatsHTML);
					break;
				case 'imagemanipulate':
					profStatsPage.removeAttribute('width')
					profStatsPage.removeAttribute('height')
					profStatsPage.setAttribute('style', 'width: 100%; filter: drop-shadow(0px 1.25px 1px var(--shadow-color))')
					profStatsPage.classList.add('mb-2')

					// Remove Padding
					profStatsPage
						.querySelector('[data-testid="main-card-body"]')
						.removeAttribute('transform')

					let style = profStatsPage.querySelector('style')
					style.innerHTML = style.innerHTML
						.replaceAll("fill: #FFFFFF;", "fill: var(--text-color);")

					const wideProfStats = profStatsPage.cloneNode(true);
					wideProfStats.classList.add('d-none')
					wideProfStats.classList.add('d-xl-block')
					wideProfStats.setAttribute('viewBox', '22 0 355 125')

					// Move circle rank more left
					wideProfStats
						.querySelector('[data-testid="rank-circle"]')
						.setAttribute('transform', 'translate(330, 52)')

					const tallProfStats = profStatsPage.cloneNode(true);
					tallProfStats.classList.add('d-xl-none')
					tallProfStats.setAttribute('viewBox', '22 0 230 230')
					tallProfStats
						.querySelector('[data-testid="rank-circle"]')
						.setAttribute('transform', 'translate(152, 40)')
					tallProfStats
						.querySelector('[data-testid="main-card-body"]')
						.children[1]
						.setAttribute('y', '105')

					element.insertAdjacentElement('afterend', wideProfStats)
					element.insertAdjacentElement('afterend', tallProfStats)
					break;
			}
		} catch (e) {
			console.error("[ERROR] Profile Insert error. RESORTING TO IMAGE", e) */
			const profStatsImage = document.createElement('img')
			profStatsImage.src = profStatsURL.replace(corsURL, '')
			profStatsImage.setAttribute('style', 'width: 100%; filter: drop-shadow(0px 1.25px 1px var(--shadow-color))')
			element.insertAdjacentElement('afterend', profStatsImage)
		//}

		/* if (gitStatsDisplay == 'piechart') {
			element.insertAdjacentElement('afterend', gridContainer);
			gridContainer.insertAdjacentHTML('beforeend', ProfileStatsHTML);

			langBar.innerHTML = `<div class="pie" style="--size: ${Math.min(gridContainer.clientHeight, gridContainer.clientWidth)}">` + langBar.innerHTML + '</div>';
			gridContainer.insertAdjacentElement('beforeend', langBar);

			gridContainer.insertAdjacentElement('beforeend', langElementList);
		} else if (gitStatsDisplay == 'piecard') {
			element.insertAdjacentHTML('afterend', ProfileStatsHTML);
			element.parentElement.parentElement.insertAdjacentHTML('afterend', `
				<div class="socialPageCard">
					<div class="socialCardContent">
						<div class="socialCardOffsetGrid">
							<span class="socialCardImage" alt="Language Pie"><div class="pie" style="--size: 96">${langBar.innerHTML}</div></span>
							<span class="h2 socialCardTitle">Most Used languages</a>
						</div>
						${langElementList.outerHTML}
					</div>
				</div>
			`);
		} */

		try {
			const gitContributeGraph = document.createElement('div')
			gitContributeGraph.classList.add('gitCalendar')
			gitContributeGraph.classList.add('mb-3')
			element.insertAdjacentElement('afterend', gitContributeGraph)
			await GitHubCalendar(".gitCalendar", attributes.username, { responsive: true, tooltips: false, summary_text: "Calender of events" });

			const date = new Date();
			let yearData = [
				{ name: 'January', days: 31 },
				{ name: 'Febuary', days: (date.getFullYear() % 4 != 0 || (date.getFullYear() % 100 == 0 && date.getFullYear() % 400 != 0)) ? 28 : 29 },
				{ name: 'March', days: 31 },
				{ name: 'April', days: 30 },
				{ name: 'May', days: 31 },
				{ name: 'June', days: 30 },
				{ name: 'July', days: 31 },
				{ name: 'August', days: 31 },
				{ name: 'September', days: 30 },
				{ name: 'October', days: 31 },
				{ name: 'November', days: 30 },
				{ name: 'December', days: 31 }
			]

			let boxesToKeep = { xl: 2, sm: 2 };
			let monthLookup = date.getMonth();

			const xlGitHistoryGraph = gitContributeGraph.getElementsByClassName('js-calendar-graph-svg')[0]
			const smGitHistoryGraph = xlGitHistoryGraph.cloneNode(true)

			for (var i = 0; i < 6; i++) {
				monthLookup--;
				if (monthLookup < 0)
					monthLookup = yearData.length - 1;

				if (i !== 2 && i !== 3 && i !== 4 && i !== 5)
					boxesToKeep.sm += yearData[monthLookup].days

				if (i !== 5)
					boxesToKeep.xl += yearData[monthLookup].days
			}

			boxesToKeep.sm += date.getDay();
			boxesToKeep.sm += yearData[monthLookup].days - date.getDay();

			boxesToKeep.xl += date.getDay();
			boxesToKeep.xl += yearData[monthLookup].days - date.getDay();

			while (boxesToKeep.sm % 7 != 0)
				boxesToKeep.sm++;

			while (boxesToKeep.xl % 7 != 0)
				boxesToKeep.xl++;

			const xlDates = xlGitHistoryGraph.querySelectorAll('rect.day')
			for (var i = xlDates.length - 1; i >= 0; i--) {
				if (i < boxesToKeep.xl)
					xlDates[i].remove();
			}

			const smDates = smGitHistoryGraph.querySelectorAll('rect.day')
			for (var i = smDates.length - 1, ri = 0; i >= 0; i--, ri++) {
				if (ri > boxesToKeep.sm)
					smDates[i].remove();
			}

			xlGitHistoryGraph
				.querySelectorAll('text.wday')
				.forEach(e => e.setAttribute('dx', 330))

			xlGitHistoryGraph
				.querySelectorAll('text.month')
				.forEach(e => { if (e.getAttribute('x') < 345) e.remove(); })

			xlGitHistoryGraph.setAttribute('viewBox', '335 0 380 112')
			xlGitHistoryGraph.classList.add('d-none')
			xlGitHistoryGraph.classList.add('d-xl-block')

			smGitHistoryGraph
				.querySelectorAll('text.wday')
				.forEach(e => e.setAttribute('dx', 475))

			smGitHistoryGraph
				.querySelectorAll('text.month')
				.forEach(e => { if (e.getAttribute('x') < 495) e.remove(); })

			smGitHistoryGraph.setAttribute('viewBox', '475 0 245 112')
			smGitHistoryGraph.classList.add('d-xl-none')
			xlGitHistoryGraph.insertAdjacentElement('afterend', smGitHistoryGraph)

		} catch (error) {
			console.error('[ERROR] Git Contribution Graph JS', error)
		}

		/* try {
			let gitActivityResponse = await fetch(corsURL + (iframeData.src).replace('.pibb', '/raw'))
			if (!gitActivityResponse.ok)
				throw new Error();

			const codeElement = document.createElement('code')
			codeElement.classList.add('language-text')
			codeElement.innerText = await gitActivityResponse.text();

			const preElement = document.createElement('pre')
			preElement.appendChild(codeElement)
			element.insertAdjacentElement('afterend', preElement)
		} catch { */
			const iframeElement = document.createElement('iframe')
			iframeElement.style.width = '100%'
			iframeElement.setAttribute('src', iframeData.src)
			element.insertAdjacentElement('afterend', iframeElement)
		// }
	}
}