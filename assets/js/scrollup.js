/*Scroll to top button */
const mybutton = document.getElementById("bttbtn");
mybutton.classList.toggle('fade');
mybutton.removeAttribute('href');
mybutton.addEventListener('click', () => mybutton.style.opacity == 1 ? document.documentElement.scrollTo({ top: 0 }) : null);

function stateCheckAndChange() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.opacity = 1;
		mybutton.style.cursor = 'pointer';
	} else {
		mybutton.style.opacity = 0;
		mybutton.style.cursor = 'default';
	}
}

stateCheckAndChange()
window.addEventListener('scroll', () => stateCheckAndChange())