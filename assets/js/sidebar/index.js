document.getElementById('sidebarCollapse').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('active'));

let sidebarLogo = document.getElementById("sidebar-logo");

let canvas = document.createElement("canvas");
canvas.setAttribute('width', sidebarLogo.offsetWidth);
canvas.setAttribute('height', sidebarLogo.offsetHeight);
canvas.setAttribute('id', 'profileCanvas');
canvas.style.position = 'absolute';
canvas.classList.add('fade')
sidebarLogo.parentElement.insertAdjacentElement('afterbegin', canvas)

export function doProfileBG() {
	import('./gradient.js').then(() => import('./circles.js'));
}
doProfileBG();

setTimeout(() => { canvas.classList.add('show') }, 200);