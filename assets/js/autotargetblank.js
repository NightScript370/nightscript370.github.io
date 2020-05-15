const host = location.hostname;
export function autoTargetBlank (linkelements) {
	for (let element of linkelements) {
		if (element.hostname == host || element.hostname == '')
			continue;

		element.target = '_blank'
	}
}