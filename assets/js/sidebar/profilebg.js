function random(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const sidebarLogo = document.getElementById("sidebar-logo");
/* const sidebarMarginTop = () => {
	sidebarLogo.style.marginTop = document.documentElement.scrollTop + 'px';
}
window.addEventListener('scroll', () => sidebarMarginTop());
sidebarMarginTop() */

const bubblesCanvas = document.createElement("canvas");
bubblesCanvas.setAttribute('width', sidebarLogo.offsetWidth);
bubblesCanvas.setAttribute('height', sidebarLogo.offsetHeight);
bubblesCanvas.setAttribute('id', 'bubblesCanvas');

sidebarLogo.insertAdjacentElement('afterbegin', bubblesCanvas)
const ctx = bubblesCanvas.getContext("2d");

let circleSpeed = 0.02;
let circleMovement = 0.2;

let circles = [];
const circleMax = random(5, 7);
while (circles.length < circleMax) {
	// Pick a random circle
	circles.push({
		x: random(0, bubblesCanvas.width),
		y: random(0, bubblesCanvas.height / 1.4),
		r: random(3, 12),
		a: random(0, 360)
	});
}

ctx.globalAlpha = 0;
function repeatOften() {
	ctx.clearRect(0, 0, bubblesCanvas.width, bubblesCanvas.height)
	for (let circle of circles) {
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.r * 2, 0, 2 * Math.PI);
		ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--lighter-menu-element");
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--menu-element");
		ctx.stroke();
		circle.a += circleSpeed;
		circle.y += Math.sin(circle.a) * circleMovement;

		if (ctx.globalAlpha != 1)
			ctx.globalAlpha+=0.015;
	}

	requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);