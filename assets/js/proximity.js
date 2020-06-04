class ProximityManager {
	constructor() {
		this.radius = 80;
	}

	effect(proxim, pos) {
		let rect = proxim.getBoundingClientRect();
		let x = pos.x - rect.left; // offset from corner
		let y = pos.y - rect.top;
		let color = getComputedStyle(document.documentElement).getPropertyValue("--hover-color");
		let lighterColor = getComputedStyle(document.documentElement).getPropertyValue("--light-hover-color");

		if (proxim.matches(":hover"))
			proxim.style.background = lighterColor + ` radial-gradient( circle at ${x}px ${y}px, ${color} 0%, transparent ${this.radius}px)`;
		else
			proxim.style.background = `radial-gradient( circle at ${x}px ${y}px, ${lighterColor} 0%, transparent ${this.radius}px)`;
	}
}

const listener = (elementArray) => {
	const proximityManager = new ProximityManager();

	window.addEventListener("mousemove", (mouse) => Array.prototype.forEach.call(elementArray, (proxim) => proximityManager.effect( proxim, { x: mouse.x, y: mouse.y } )));
}
export default listener