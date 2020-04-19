//document.designMode = 'on';
document.getElementById('sidebarCollapse').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('active'));

/*Scroll to top button */
mybutton = document.getElementById("bttbtn");
mybutton.classList.toggle('fade');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.opacity = 1 : mybutton.style.opacity = 0;

function scrollUp() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	event.preventDefault()
}

/* Share Links button for cards */

const sharedLinks = [
	{
		"title": "FaceBook",
		"icon": "facebook-official",
		"baselink": "https://www.facebook.com/sharer/sharer.php?u="
	},
	{
		"title": "Twitter",
		"icon": "twitter",
		"baselink": "https://twitter.com/intent/tweet?text=",
		"text": 'Look at this cool blog entry I found on NightScript Domain - "$title$": '
	}
]

function replaceNoShare(cards) {
	if (!cards.length)
		return;

	let entrylink, entrytitle, socialLinksHTML;
	for (const int of cards) {
		entrylink = int.parentElement.firstElementChild.getAttribute("href");
		entrytitle = int.parentElement.firstElementChild.innerHTML;

		socialLinksHTML = '<div class="text-center cardShareLinks">';
		for (let socialEntry of sharedLinks) {
			socialLinksHTML += `<a class="card-link" href="${
					socialEntry.baselink
						+ (socialEntry.text ? encodeURI(socialEntry.text.replace("$title$", entrytitle)) : '')
						+ encodeURI(window.location.protocol + "//" + window.location.hostname + entrylink)
				}"><i class="fa fa-${socialEntry.icon} fa-2x"></i></a>`;
		}
		socialLinksHTML += "</div>";
		int.parentElement.insertAdjacentHTML('beforeend', socialLinksHTML)
	}
}
replaceNoShare(document.getElementsByClassName('noShare'));