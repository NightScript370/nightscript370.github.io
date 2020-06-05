const hoverradius = 300;
const nohoverradius = 80;

class ProximityManager {
	constructor(element) {
		this.proxim = element;
	}

	effect(pos) {
		let rect = this.proxim.getBoundingClientRect();
		let x = pos.x - rect.left; // offset from corner
		let y = pos.y - rect.top;

		if (this.proxim.matches(":hover"))
			this.proxim.style.background = `var(--light-hover-color) radial-gradient( circle at ${x}px ${y}px, var(--hover-color) 0%, transparent ${hoverradius}px)`;
		else
			this.proxim.style.background = ``;

		this.proxim.style.borderImageSource = `radial-gradient( circle at ${x}px ${y}px, var(--light-hover-color) 0%, transparent ${nohoverradius}px)`;
		this.proxim.style.borderColor = "var(--hover-color)"
	}
}

const listener = (elementArray) => {
	let proximityArray = [];
	Array.prototype.forEach.call(elementArray, (proxim) => proximityArray.push(new ProximityManager(proxim)))
	window.addEventListener("mousemove", (mouse) => proximityArray.forEach(proximityManager => proximityManager.effect({ x: mouse.x, y: mouse.y }));
}
export default listener