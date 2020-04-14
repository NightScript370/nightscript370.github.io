//document.designMode = 'on';
document.getElementById('sidebarCollapse').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('active'));

mybutton = document.getElementById("bttbtn");
mybutton.classList.toggle('fade');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.opacity = 1 : mybutton.style.opacity = 0;