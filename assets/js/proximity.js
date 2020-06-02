class ProximityManager {
	constructor() {
		this.color = "rgba( 255, 255, 255, 0.3 )";
		this.radius = 80;
	}

	effect(proxim, pos) {
		let rect = proxim.getBoundingClientRect();
		let x = pos.x - rect.left; // offset from corner
		let y = pos.y - rect.top;
		proxim.style.background = "radial-gradient( circle at " + x + "px " + y + "px, " + this.color + " 0%, transparent " + this.radius + "px)";
	}
}

const proximityManager = new ProximityManager();

window.addEventListener("mousemove", ( mouse ) =>  Array.prototype.forEach.call(document.getElementsByClassName("proxim"), (proxim) => proximityManager.effect( proxim, { x: mouse.x, y: mouse.y } )));