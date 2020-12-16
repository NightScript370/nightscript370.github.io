function hardcodedShare (noShareElem) {
	const replacementElem = document.createElement("div");
	replacementElem.innerHTML = noShareElem.innerHTML;

	for (let index = noShareElem.attributes.length - 1; index >= 0; --index) {
		replacementElem.attributes.setNamedItem(noShareElem.attributes[index].cloneNode());
	}

	noShareElem.parentNode.replaceChild(replacementElem, noShareElem);
}

export default function (noShareElements) {
	if (!noShareElements.length)
		return;

	let noShareElement;
	if (!navigator.share) {
		for (noShareElement of noShareElements)
			hardcodedShare(noShareElement);
	} else {
		const shareElementBase = document.createElement("a")
		shareElementBase.classList.add("univShare");

		const univShareImage = document.createElement("img")
		univShareImage.setAttribute("src", "/assets/images/icons/share-traditional.svg")

		shareElementBase.appendChild(univShareImage);

		let cardBody, shareElement;
		for (noShareElement of noShareElements) {
			cardBody = noShareElement.previousElementSibling;

			shareElement = shareElementBase.cloneNode(true);
			shareElement.addEventListener('click', () => navigator.share({
					title: `Look at this cool blog entry I found on NightScript Domain - "${cardBody.firstElementChild.innerText}"`,
					text: cardBody.firstElementChild.nextElementSibling.innerText,
					url: cardBody.firstElementChild.getAttribute("href"),
				})
				.then(() => console.log('Successful share'))
				.catch((error) => {
					console.error('Error sharing', error);
					hardcodedShare(noShareElement)
				})
			)

			cardBody.insertAdjacentElement('afterbegin', shareElement)
		}
	}
}