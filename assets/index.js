if (!window.matchMedia("print").matches) {
	import("./js/sidebar/index.js")
	import("./js/scrollup.js")

	if (document.getElementsByClassName("proxim").length)
		import("./js/proximity.js").then(mod => mod.default(document.getElementsByClassName("proxim")))

	if (localStorage['particles'] == 'on')
		import('./js/particles.js');

	if (document.getElementsByClassName('noShare').length)
		import("./js/sharelinks.js").then(mod => mod.default(document.getElementsByClassName('noShare')))

	if (document.querySelectorAll('h1, h2, h3, h4, h5, h6').length)
		import("./js/anchorlinks.js").then(mod => mod.default(document.querySelectorAll('h1, h2, h3, h4, h5, h6')))

	if (document.querySelectorAll('a').length)
		import("./js/autotargetblank.js").then(mod => mod.default(document.querySelectorAll('a')))

	import("./js/table-of-contents.js").then(mod => mod.default('[data-content]', '[data-toc]'))

	if (document.getElementsByClassName('gitStats').length)
		import("./js/github.js").then(async (mod) => await mod.default(document.getElementsByClassName('gitStats')))
}

//document.designMode = 'on';