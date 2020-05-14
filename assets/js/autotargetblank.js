const host = location.hostname;
for (let element of document.querySelectorAll('a')) {
	if (element.hostname == host || element.hostname == '')
		continue;

	element.target = '_blank'
}