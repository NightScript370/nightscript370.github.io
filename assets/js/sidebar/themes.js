import drawGradient from './gradient.js';

const bottomLinks = document.getElementsByClassName('bottomLinks')[0];
const themes = {
	'default': {
		'--main-bg-color': '#00000F',
		'--menu-element': '#02194B',
		'--darker-menu-element': '#01083A',
		'--menu-element-text-color': 'white',
		'--lighter-menu-element': '#132A5C'
	}
}

const themesContainer = document.createElement("div");
for (let theme of Object.values(themes)) {
	let div = document.createElement("span");
	div.classList.add('themeDot')
	div.style.background = theme['--menu-element'];
	div.addEventListener('click', () => {
		for (const key in theme) {
			if (theme.hasOwnProperty(key)) {
				const element = theme[key];
				document.documentElement.style.setProperty(key, element);

				drawGradient();
			}
		}
	})

	themesContainer.appendChild(div);
}
bottomLinks.insertAdjacentElement('afterbegin', themesContainer)