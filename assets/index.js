if (!window.matchMedia("print")) {
	if (document.cookie.includes('particles=on'))
		import('./js/particles.js');

	import("./js/sidebar/index.js").then(mod => mod.default());
	import("./js/scrollup.js").then(mod => mod.default());
	import("./js/proximity.js").then(mod => mod.default(document.getElementsByClassName("proxim")))

	import("./js/sharelinks.js").then(mod => mod.default(document.getElementsByClassName('noShare')))
	import("./js/anchorlinks.js").then(mod => mod.default(document.querySelectorAll('h1, h2, h3, h4, h5, h6')))
	import("./js/table-of-contents.js").then(mod => mod.default('[data-content]', '[data-toc]'))
	import("./js/autotargetblank.js").then(mod => mod.default(document.querySelectorAll('a')))
}

//document.designMode = 'on';