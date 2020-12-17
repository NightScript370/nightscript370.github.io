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

		let shareElement;
		for (noShareElement of noShareElements) {
			shareElement = shareElementBase.cloneNode(true);
			noShareElement.previousElementSibling.insertAdjacentElement('afterbegin', shareElement)

			shareElement.onclick = async function () {
				try {
					await navigator.share({
						title: `Look at this cool blog entry I found on NightScript Domain - "${this.nextElementSibling.innerText}"`,
						text: this.nextElementSibling.nextElementSibling.innerText,
						url: window.location.protocol + "//" + window.location.host + this.nextElementSibling.getAttribute("href"),
					})
					console.log('Share Successful');
				} catch (error) {
					console.error('Error Sharing', error);
					hardcodedShare(noShareElement)
				}
			}
		}
	}
}