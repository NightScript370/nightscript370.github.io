if (!window.matchMedia("print").matches) {
	if (localStorage['particles'] == 'on')
		import('./js/particles.js');

	console.log('test')
	import("./js/sidebar/index.js")
	import("./js/scrollup.js")
	import("./js/proximity.js").then(mod => mod.default(document.getElementsByClassName("proxim")))

	import("./js/sharelinks.js").then(mod => mod.default(document.getElementsByClassName('noShare')))
	import("./js/anchorlinks.js").then(mod => mod.default(document.querySelectorAll('h1, h2, h3, h4, h5, h6')))
	import("./js/table-of-contents.js").then(mod => mod.default('[data-content]', '[data-toc]'))
	import("./js/autotargetblank.js").then(mod => mod.default(document.querySelectorAll('a')))
}

//document.designMode = 'on';