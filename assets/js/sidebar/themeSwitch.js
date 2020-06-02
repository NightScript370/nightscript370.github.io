import importThemes from './themes/index.js';

const bottomLinks = document.getElementsByClassName('bottomLinks')[0];

(async () => {
	const themes = await importThemes();

	const themesContainer = document.createElement("div");
	for (let theme of Object.values(themes)) {
		theme = theme.default;

		let div = document.createElement("span");
		div.classList.add('themeDot')
		div.style.background = theme['--menu-element'];
		div.addEventListener('click', () => {
			for (const key in theme) {
				if (theme.hasOwnProperty(key)) {
					const element = theme[key];
					document.documentElement.style.setProperty(key, element);
				}
			}
		})

		themesContainer.appendChild(div);
	}
	bottomLinks.insertAdjacentElement('afterbegin', themesContainer)
})()