const hoverradius = 275;
const nohoverradius = 60;

class ProximityManager {
	constructor(element) {
		this.proxim = element;
	}

	effect(pos) {
		const rect = this.proxim.getBoundingClientRect();
		const x = pos.x - rect.left; // offset from corner
		const y = pos.y - rect.top;

		if (this.proxim.matches(":hover") && !this.proxim.classList.contains('no-enhanced-hover-proxim'))
			this.proxim.style.background = `radial-gradient( circle at ${x}px ${y}px, var(--light-hover-color) 0%, transparent ${hoverradius}px)`
		else if (!this.proxim.classList.contains('no-not-hover'))
			this.proxim.style.background = `radial-gradient( circle at ${x}px ${y}px, var(--light-hover-color) 0%, transparent ${nohoverradius}px)`;
		else
			this.proxim.style.background = '';

		if (!window.chrome) {
			this.proxim.style.borderImageSource = `radial-gradient( circle at ${x}px ${y}px, var(--light-hover-color) 0%, transparent ${nohoverradius}px)`;
			this.proxim.style.borderColor = "var(--hover-color)"
		}
	}
}

export default function (elementArray) {
	const proximityArray = Array.from(elementArray, (proxim) => new ProximityManager(proxim))
	window.addEventListener("mousemove", (mouse) => proximityArray.forEach(proximityManager => proximityManager.effect({ x: mouse.x, y: mouse.y })));
}