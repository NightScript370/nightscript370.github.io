const canvas = document.getElementById("gradientCanvas");
const ctx = canvas.getContext("2d");
const my_gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * .98);
my_gradient.addColorStop(0, "#020C49");
my_gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue("--main-bg-color"));
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);