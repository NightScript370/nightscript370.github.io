/* Share Links button for cards */
const sharedLinks = [
	{
		"title": "FaceBook",
		"image": "/assets/images/icons/facebook.svg",
		"baselink": "https://www.facebook.com/sharer/sharer.php?u=",
		"cardview": true
	},
	{
		"title": "Twitter",
		"image": "/assets/images/icons/twitter.svg",
		"baselink": "https://twitter.com/intent/tweet?text=",
		"text": 'Look at this cool blog entry I found on NightScript Domain - "$title$": ',
		"cardview": true
	},
	{
		"title": "Pinterest",
		"image": "/assets/images/icons/pinterest.svg",
		"baselink": "http://pinterest.com/pin/create/button/?description=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "LinkedIn",
		"image": "/assets/images/icons/linkedin.png",
		"baselink": "http://www.linkedin.com/shareArticle?mini=true&title=''$TEXT$''&url=",
		"separateText": 'Look at this cool blog entry I found on NightScript Domain - "$title$"',
		"cardview": true
	},
	{
		"title": "WhatsApp",
		"image": "/assets/images/icons/whatsapp.svg",
		"baselink": "https://wa.me/?text=",
		"text": 'Look at this cool blog entry I found on NightScript Domain - "$title$": ',
		"cardview": true
	},
	{
		"title": "Reddit",
		"image": "/assets/images/icons/reddit.svg",
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

export default function (cards) {
	if (!cards.length)
		return;

	let entrylink, entrytitle, socialLinksElement, linkElement;
	for (let int of cards) {
		entrylink = int.parentElement.firstElementChild.getAttribute("href");
		entrytitle = int.parentElement.firstElementChild.innerHTML;

		socialLinksElement = document.createElement("div");
		socialLinksElement.classList.add('text-center');
		socialLinksElement.classList.add('cardShareLinks');
		for (let socialEntry of sharedLinks.filter(entry => entry.cardview)) {
			linkElement = document.createElement('a');
			linkElement.classList.add('card-link');
			linkElement.setAttribute('data-tippy-content', `Share this on ${socialEntry.title}`);
			linkElement.innerHTML = (socialEntry.image ? `<img src="${socialEntry.image}">` : `<i class="fa fa-${socialEntry.icon} fa-2x"></i>`);

			let link = socialEntry.baselink;
			if (link.includes("''$TEXT$''") && socialEntry.separateText)
				link.replace("''$TEXT$''", encodeURI(socialEntry.separateText.replace("$title$", entrytitle)))
			if (socialEntry.text)
				link += encodeURI(socialEntry.text.replace("$title$", entrytitle))
			link += encodeURI(window.location.protocol + "//" + window.location.hostname + entrylink)

			linkElement.setAttribute('href', link)
			socialLinksElement.appendChild(linkElement);
		}

		int.parentElement.appendChild(socialLinksElement);
	}
}