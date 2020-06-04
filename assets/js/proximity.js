class ProximityManager {
	constructor(element) {
		this.proxim = element;
		this.radius = 80;
	}

	effect(pos) {
		let rect = this.proxim.getBoundingClientRect();
		let x = pos.x - rect.left; // offset from corner
		let y = pos.y - rect.top;
		let color = getComputedStyle(document.documentElement).getPropertyValue("--hover-color");
		let lighterColor = getComputedStyle(document.documentElement).getPropertyValue("--light-hover-color");

		if (this.proxim.matches(":hover"))
			this.proxim.style.background = lighterColor + ` radial-gradient( circle at ${x}px ${y}px, ${color} 0%, transparent ${this.radius}px)`;
		else
			this.proxim.style.background = `radial-gradient( circle at ${x}px ${y}px, ${lighterColor} 0%, transparent ${this.radius}px)`;
	}
}

const listener = (elementArray) => {
	Array.prototype.forEach.call(elementArray, (proxim) => {
		let proximityManager = new ProximityManager(proxim)
		window.addEventListener("mousemove", (mouse) => proximityManager.effect({ x: mouse.x, y: mouse.y }));
	})
}
export default listener