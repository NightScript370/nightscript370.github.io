import drawGradient from './gradient.js';

const bottomLinks = document.getElementsByClassName('bottomLinks')[0];
const themes = {
	'default': {
		'--main-bg-color': '#00000F',
		'--menu-element': '#02194B',
		'--darker-menu-element': '#01083A',
		'--menu-element-text-color': 'white',
		'--lighter-menu-element': '#132A5C',
		'--gradient-top': '#020C49',
		'--text-color': 'white',
		'--background': "url('/assets/images/starBG.jpg') center top/cover no-repeat",
		'--background-filter': 'rgba(0, 0, 15, 0.8)',
		'--sidebar-link': 'rgba(255, 255, 255, 0.6)',
		'--sidebar-link-active': 'white',
		'--shadow-color': 'black'
	},
	'light': {
		'--main-bg-color': '#D0CEC9',
		'--menu-element': '#C9C6C0',
		'--darker-menu-element': '#B8B5B0',
		'--menu-element-text-color': 'black',
		'--lighter-menu-element': '#DAD7D1',
		'--gradient-top': '#666',
		'--text-color': 'black',
		'--background': "white center top/cover no-repeat",
		'--background-filter': 'inherit',
		'--sidebar-link': 'rgba(0, 0, 0, 0.6)',
		'--sidebar-link-active': 'black',
		'--shadow-color': '#666'
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