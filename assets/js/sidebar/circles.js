function random(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const canvas = document.getElementById("profileCanvas");
const ctx = canvas.getContext("2d");

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