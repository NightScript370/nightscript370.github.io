document.getElementById('sidebarCollapse').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('active'));

let sidebarLogo = document.getElementById("sidebar-logo");

let canvas = document.createElement("canvas");
canvas.setAttribute('width', sidebarLogo.offsetWidth);
canvas.setAttribute('height', sidebarLogo.offsetHeight);
canvas.style.position = 'absolute';
canvas.classList.add('fade')
sidebarLogo.parentElement.insertAdjacentElement('afterbegin', canvas)

var ctx = canvas.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "#020C49");
my_gradient.addColorStop(1, "#00000F");
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

function random(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let circles = [];
const circleMax = random(4, 10);
while (circles.length < circleMax) {
	// Pick a random circle
	circles.push({
		x: random(0, canvas.width),
		y: random(0, canvas.height / 2),
		r: random(3, 16)
	});
}

// Draw all the circles
for (let circle of circles) {
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.r * 2, 0, 2 * Math.PI);
	ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--lighter-menu-element");
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--menu-element");
	ctx.stroke();
}

setTimeout(() => { canvas.classList.add('show') }, 200);