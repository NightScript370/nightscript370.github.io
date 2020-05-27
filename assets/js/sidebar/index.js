import './themes.js'
import gradient from './gradient.js'

document.getElementById('sidebarCollapse').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('active'));

let sidebarLogo = document.getElementById("sidebar-logo");

let gradientCanvas = document.createElement("canvas");
gradientCanvas.setAttribute('width', sidebarLogo.offsetWidth);
gradientCanvas.setAttribute('height', sidebarLogo.offsetHeight);
gradientCanvas.setAttribute('id', 'gradientCanvas');
gradientCanvas.style.position = 'absolute';
//gradientCanvas.style.background = 'rgba(0,0,0,0)'

let bubblesCanvas = gradientCanvas.cloneNode(true);
bubblesCanvas.setAttribute('id', 'bubblesCanvas');

gradientCanvas.classList.add('fade')
bubblesCanvas.classList.add('fade')

sidebarLogo.parentElement.insertAdjacentElement('afterbegin', bubblesCanvas)
sidebarLogo.parentElement.insertAdjacentElement('afterbegin', gradientCanvas)

export function doProfileBG() {
	gradient();
	import('./circles.js');
}
doProfileBG();

setTimeout(() => { gradientCanvas.classList.add('show'); bubblesCanvas.classList.add('show') }, 200);