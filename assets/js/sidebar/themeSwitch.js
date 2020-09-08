if(!localStorage.theme)
	localStorage.theme = "default";

function setThemePicker() {
	Array.from(document.styleSheets).forEach(r => {
		let theme = r.href.match(/assets\/css\/themes\/(.*?).css/);
		if(theme)
			theme = theme[1];
		else
			return;

		let span = document.createElement("span");
		span.setAttribute('data-tooltip', theme);
		span.classList.add('themeDot')
		span.classList.add('nstooltip')
		span.style.background = r.cssRules[0].cssText.match(/--menu-element: *(.*?);/)[1];
		span.onclick = () => themeSet(theme);
		span.innerHTML = `<div data-tippy-content="${theme}" style="height: 100%; width: 100%;"></div>`;
		document.getElementById("themesContainer").prepend(span);
	});
}

function themeSet(theme) {
	if(theme)
		localStorage.theme = theme;
	
	Array.from(document.styleSheets).forEach(r => {
		let theme = r.href.match(/assets\/css\/themes\/(.*?).css/);
		if(theme)
			theme = theme[1];
		else
			return;

		if(theme == localStorage.theme) {
			r.disabled = false;
		} else {
			r.disabled = true;
		}
	});
}

if (!window.matchMedia("print").matches)
	themeSet();
