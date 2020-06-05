const host = location.hostname;
let cache = {};
function linksFilter (element) {
	if (element.href in cache)
		return cache[element.href];

	let setAttribute = (![host, ''].includes(element.hostname) && !element.hasAttribute('target'));

	cache[element.href] = setAttribute;
	return setAttribute;
}

export default function (linkelements) {
	for (let element of linkelements) {
		if (linksFilter(element))
			element.setAttribute('target', '_blank');
	}
}