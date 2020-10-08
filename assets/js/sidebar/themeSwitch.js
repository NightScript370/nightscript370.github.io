if(!localStorage.theme)
	localStorage.theme = "default";

function setThemePicker() {
	Array.from(document.styleSheets).forEach(r => {
		if(!r.href)
			return;

		let theme = r.href.match(/assets\/css\/themes\/(.*?).css/);
		if(theme)
			theme = theme[1];
		else
			return;

		let span = document.createElement("span");
		span.setAttribute('data-tooltip', theme);
		span.classList.add('themeDot')
		span.classList.add('nstooltip')
		span.style.background = r.cssRules[0].cssText.match(/--sidebar-theme-switcher: *(.*?);/)[1];
		span.onclick = () => themeSet(theme);
		document.getElementById("themesContainer").prepend(span);
	});
}

function themeSet(theme) {
	if (theme)
		localStorage.theme = theme;

	Array.from(document.styleSheets).forEach(r => {
		if (!r.href)
			return;

		let theme = r.href.match(/assets\/css\/themes\/(.*?).css/);
		if (theme)
			theme = theme[1];
		else
			return;

		r.disabled = (theme != localStorage.theme);
	});
}

if (!window.matchMedia("print").matches)
	themeSet();