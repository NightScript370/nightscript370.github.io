/*Scroll to top button */
const mybutton = document.getElementById("bttbtn");
mybutton.classList.toggle('fade');
mybutton.setAttribute('href', '');
mybutton.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	event.preventDefault()
});

document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.opacity = 1 : mybutton.style.opacity = 0;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.opacity = 1 : mybutton.style.opacity = 0;