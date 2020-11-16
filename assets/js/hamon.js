export default function (elementArray) {
	elementArray.forEach(element => element.addEventListener('click', function (e) {
		if (!e.isTrusted) return;
		console.log("clicked")

		e = e.touches ? e.touches[0] : e;

		const r = element.getBoundingClientRect();
		const d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
		element.style.cssText = "--s: 0; --o: 1;";
		element.offsetTop;
		element.style.cssText = "--t: 1; --o: 0; --d: " + d + "; --x:" + (e.clientX - r.left) + "; --y:" + (e.clientY - r.top) + ";";
	}));
}