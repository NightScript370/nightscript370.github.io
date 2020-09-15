export default function (elements) {
	let anchorsMade = 0;
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

		let image = document.createElement("img")
		image.src = "/assets/images/icons/link.png";
		//image.style.marginRight = '2em';

		anchor.innerHTML = '<span class="visually-hidden">Permalink</span>' + image.outerHTML
		element.insertAdjacentElement('afterbegin', anchor);

		anchorsMade++;
	}

	if (!anchorsMade) {
		let bodyElement = document.getElementById("content")
		bodyElement.classList.add('noAnchorsPadding')
	}
}