/*! tableOfContents.js v1.0.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/table-of-contents */

/*
 * Automatically generate a table of contents from the headings on the page
 * @param  {String} content A selector for the element that the content is in
 * @param  {String} target  The selector for the container to render the table of contents into
 * @param  {Object} options An object of user options [optional]
 */
export default function (content, target, options) {
	// Get content
	const contentWrap = document.querySelector(content);
	const toc = document.querySelectorAll(target);
	if (!contentWrap || !toc.length) return console.log('Elements not found');

	// Settings & Defaults
	const defaults = {
		levels: 'h2, h3, h4, h5, h6',
		heading: 'Table of Contents',
		headingLevel: 'h2',
		listType: 'ul',
		idPrefix: 'toc_'
	};
	let settings = {};

	// Placeholder for headings
	let headings;


	//
	// Methods
	//

	/**
	 * Merge user options into defaults
	 * @param  {Object} obj The user options
	 */
	const merge = (obj) => {
		for (var key in defaults) {
			if (Object.prototype.hasOwnProperty.call(defaults, key))
				settings[key] = Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : defaults[key];
		}
	};

	/**
	 * Create an ID for a heading if one does not exist
	 * @param  {Node} heading The heading element
	 */
	const createID = (heading) => {
		if (heading.id.length) return;
		heading.id = settings.idPrefix + heading.textContent.replace(/[^A-Za-z0-9]/g, '-');
	};

	/**
	 * Get the HTML to indent a list a specific number of levels
	 * @param  {Integer} count The number of times to indent the list
	 * @return {String}        The HTML
	 */
	const getIndent = (count) => {
		let html = '';
		for (let i = 0; i < count; i++) {
			html += '<' + settings.listType + '>';
		}
		return html;
	};

	/**
	 * Get the HTML to close an indented list a specific number of levels
	 * @param  {Integer} count The number of times to "outdent" the list
	 * @return {String}        The HTML
	 */
	const getOutdent = (count) => {
		let html = '';
		for (let i = 0; i < count; i++) {
			html += '</' + settings.listType + '></li>';
		}
		return html;
	};

	/**
	 * Get the HTML string to start a new list of headings
	 * @param  {Integer} diff  The number of levels in or out from the current level the list is
	 * @param  {Integer} index The index of the heading in the "headings" NodeList
	 * @return {String}        The HTML
	 */
	const getStartingHTML = (diff, index) => {
		// If indenting
		if (diff > 0)
			return getIndent(diff);
		else if (diff < 0)
			return getOutdent(Math.abs(diff));

		// If it's not the first item and there's no difference
		if (index && !diff)
			return '</li>';

		return '';
	};

	/**
	 * Inject the table of contents into the DOM
	 */
	const injectTOC = () => {

		// Track the current heading level
		let level = headings[0].tagName.slice(1);
		const startingLevel = level;

		// Cache the number of headings
		const len = headings.length - 1;

		const headerElement = document.createElement(settings.headingLevel);
		headerElement.setAttribute('noAnchor', '');
		headerElement.innerHTML = settings.heading;

		const tocCode = document.createElement(settings.listType);
		tocCode.innerHTML = Array.prototype.map.call(headings, (heading, index) => {
			// Add an ID if one is missing
			createID(heading);

			// Check the heading level vs. the current list
			var currentLevel = heading.tagName.slice(1);
			var levelDifference = currentLevel - level;
			level = currentLevel;
			var html = getStartingHTML(levelDifference, index);

			let tempheading = heading.cloneNode(true);
			for (let element of tempheading.getElementsByClassName("anchor"))
				element.remove();

			// Generate the HTML
			html += `<li><a href="#${encodeURIComponent(heading.getAttribute("id"))}">${tempheading.innerHTML.trim()}</a>`;

			// If the last item, close it all out
			if (index === len)
				html += getOutdent(Math.abs(startingLevel - currentLevel));

			return html;
		}).join('')

		for (let tocElement of toc)
			tocElement.innerHTML = headerElement.outerHTML + tocCode.outerHTML + tocElement.innerHTML;
	};

	/**
	 * Initialize the script
	 */
	const init = () => {
		// Merge any user settings into the defaults
		merge(options || {});

		// Get the headings
		// If none are found, don't render a list
		headings = contentWrap.querySelectorAll(settings.levels);
		if (!headings.length) return;

		// Inject the table of contents
		injectTOC();

	};


	//
	// Initialize the script
	//

	init();
};