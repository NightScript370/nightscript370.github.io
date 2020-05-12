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

// Add anchors for headings
for (let element of document.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
	if (!element.getAttribute('id')) {
		if (element.getAttribute('noAnchor') == "true")
			continue;

		element.setAttribute("id", element.innerHTML.toLowerCase().split(" ").join("-"))
	}

	let anchor = document.createElement("a");
	anchor.className = 'header-link';
	anchor.href = '#' + element.getAttribute("id");
	anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fa fa-link\"></i>';
	anchor.title = "Permalink";
	element.insertBefore(anchor, element.childNodes[0]);
};

const host = location.hostname;
for (element of document.querySelectorAll('a')) {
	if (element.hostname == host || element.hostname == '')
		continue;

	element.target = '_blank'
}

/* Share Links button for cards */
const sharedLinks = [
	{
		"title": "FaceBook",
		"icon": "facebook-official",
		"baselink": "https://www.facebook.com/sharer/sharer.php?u=",
		"cardview": true
	},
	{
		"title": "Twitter",
		"icon": "twitter",
		"baselink": "https://twitter.com/intent/tweet?text=",
		"text": 'Look at this cool blog entry I found on NightScript Domain - "$title$": ',
		"cardview": true
	},
	{
		"title": "Pinterest",
		"icon": "pinterest",
		"baselink": "http://pinterest.com/pin/create/button/?description=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "LinkedIn",
		"icon": "linkedin",
		"baselink": "http://www.linkedin.com/shareArticle?mini=true&title=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "WhatsApp",
		"icon": "whatsapp",
		"baselink": "https://wa.me/?text=",
		"text": 'Look at this cool blog entry I found on NightScript Domain - "$title$": ',
		"cardview": true
	},
	{
		"title": "Reddit",
		"icon": "reddit-alien",
		"baselink": "http://www.reddit.com/submit?title=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "Tumblr",
		"icon": "tumblr",
		"baselink": "http://www.tumblr.com/share?v=3&t=''$TEXT$''&u=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
	}
];

function replaceCardNoShare(cards) {
	if (!cards.length)
		return;

	let entrylink, entrytitle, socialLinksHTML;
	for (const int of cards) {
		entrylink = int.parentElement.firstElementChild.getAttribute("href");
		entrytitle = int.parentElement.firstElementChild.innerHTML;

		socialLinksHTML = '<div class="text-center cardShareLinks">';
		for (let socialEntry of sharedLinks.filter(entry => entry.cardview)) {
			socialLinksHTML += `<a
					class="card-link"
					data-tippy-content="Share this on ${socialEntry.title}!"
					href="${
						socialEntry.baselink.replace("''$TEXT$''", (socialEntry.separateText ? encodeURI(socialEntry.separateText.replace("$title$", entrytitle)) : ''))
							+ (socialEntry.text ? encodeURI(socialEntry.text.replace("$title$", entrytitle)) : '')
							+ encodeURI(window.location.protocol + "//" + window.location.hostname + entrylink)
					}"
				><i class="fa fa-${socialEntry.icon} fa-2x"></i></a>`;
		}
		socialLinksHTML += "</div>";
		int.parentElement.insertAdjacentHTML('beforeend', socialLinksHTML)
	}
}
replaceCardNoShare(document.getElementsByClassName('noShare'));

tippy('[data-tippy-content]');