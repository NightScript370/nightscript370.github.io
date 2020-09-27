export default function (elementArray) {
	elementArray.forEach(element => element.onclick = function (e) {
		if (!e.isTrusted) return;

		const hamon = document.createElement("span");
		hamon.classList.add("hamon");
		this.appendChild(hamon);

		// Position the hamon
		hamon.style.left = e.offsetX + "px"; 
		hamon.style.top = e.offsetY + "px"; 

		// CEEEESAR (sorry for those who hadn't seen JoJo part 2)
		setTimeout(() => hamon.remove(), 3000);
	});
}