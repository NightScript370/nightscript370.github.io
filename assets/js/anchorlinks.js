export default function (elements) {
	for (let element of elements) {
		if (element.hasAttribute('noAnchor'))
			continue;

		if (!element.getAttribute('id'))
			element.setAttribute("id", encodeURIComponent(element.innerHTML.toLowerCase().replace(/ /g, "_")))

		let anchor = document.createElement("a");
		anchor.setAttribute('title', "Permalink");
		anchor.setAttribute('href', '#' + element.getAttribute("id"));
		anchor.classList.add('header-link');
		anchor.classList.add('anchor');
		anchor.setAttribute('style', `margin-left: -${getComputedStyle(element).getPropertyValue("font-size")}`);

		let image = document.createElement("img")
		image.src = "/assets/images/icons/link.png";
		image.style.width = getComputedStyle(element).getPropertyValue("font-size");
		//image.style.marginRight = '2em';

		anchor.innerHTML = '<span class="sr-only">Permalink</span>' + image.outerHTML
		element.insertAdjacentElement('afterbegin', anchor);
	};
}