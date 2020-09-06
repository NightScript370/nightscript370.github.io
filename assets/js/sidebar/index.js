import('./themeSwitch.js').then(mod => mod.default());
import('./profilebg.js')

document.getElementById('sidebarCollapse').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('active'));
document.addEventListener("click", (evt) => {
	if (window.innerWidth > 991.98) return;

	const flyoutElement = document.getElementById("sidebar");
	let targetElement = evt.target; // clicked element

	do {
		if (targetElement == flyoutElement) return;
		targetElement = targetElement.parentNode;
	} while (targetElement);

	// This is a click outside.
	if (document.getElementById('sidebar').classList.value == 'active')
		document.getElementById('sidebar').classList.toggle('active')
});