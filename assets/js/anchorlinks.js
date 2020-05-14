for (let element of document.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
	if (!element.getAttribute('id')) {
		if (element.getAttribute('noAnchor') == "true")
			continue;

		element.setAttribute("id", element.innerHTML.toLowerCase().replace(/ /g, "_"))
	}

	let anchor = document.createElement("a");
	anchor.className = 'header-link';
	anchor.href = '#' + element.getAttribute("id");
	anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fa fa-link\"></i>';
	anchor.title = "Permalink";
	element.insertAdjacentElement('afterbegin', anchor);
};