import importThemes from './themes/index.js';

const themeSet = (key, theme) => {
	for (const property in theme) {
		if (theme.hasOwnProperty(property)) {
			const element = theme[property];
			document.documentElement.style.setProperty(property, element);
		}
	}

	localStorage.setItem('theme', key);
}

(async () => {
	const themes = await importThemes();

	if (localStorage['theme'])
		themeSet(localStorage['theme'], themes[localStorage['theme']].default)
})()

export default async function setThemePicker() {
	const themes = await importThemes();
	const bottomLinks = document.getElementsByClassName('bottomLinks')[0];

	const themesContainer = document.createElement("div");
	for (const key in themes) {
		if (!themes.hasOwnProperty(key))
			continue;

		const theme = themes[key].default;

		let div = document.createElement("span");
		div.setAttribute('data-tippy-content', key);
		div.classList.add('themeDot')
		div.style.background = theme['--menu-element'];
		div.addEventListener('click', () => themeSet(key, theme))
		div.innerHTML = `<div data-tippy-content="${key}" style="height: 100%; width: 100%;"></div>`;

		themesContainer.appendChild(div);
	}

	bottomLinks.insertAdjacentElement('afterbegin', themesContainer)
}