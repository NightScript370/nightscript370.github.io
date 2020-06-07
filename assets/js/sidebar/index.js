import './themeSwitch.js'

document.getElementById('sidebarCollapse').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('active'));

let sidebarLogo = document.getElementById("sidebar-logo");

let bubblesCanvas = document.createElement("canvas");
bubblesCanvas.setAttribute('width', sidebarLogo.offsetWidth);
bubblesCanvas.setAttribute('height', sidebarLogo.offsetHeight);
bubblesCanvas.setAttribute('id', 'bubblesCanvas');
bubblesCanvas.style.position = 'absolute';

let gradientDiv = document.getElementById("gradient-sidebar")
gradientDiv.setAttribute('style', `width:${sidebarLogo.offsetWidth}px;height:${sidebarLogo.offsetHeight}px;`);

gradientDiv.insertAdjacentElement('afterend', bubblesCanvas)

import('./circles.js');