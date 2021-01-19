---
title: "Privacy Issues"
description: Where's the fine line of how much info you have on someone? How do you even get that person's info?
permalink: /blog/privacy
plyr: true

blog: true
initialPublishDate: "December 31 2020"
editDate: "January 18 2021"
articleType: "Educational/School"
length: 1
---

<style>
#neimodImage, #nightScriptImage, #searxImage, #messagingIcon, #fedoraImage, #cryptImage, #FDroidImage { order: 2; }

@media (max-width: 767px) {
	.gridImage {
		max-width: 25vw;
	}
}

@media (min-width: 768px) {
	.gridText { flex: 1 1 auto; }
	.gridImage { object-fit: contain; align-self: flex-start; }

	.gridImage { width: 5em; }
	#zammisImage, #neimodImage, #bushingImage, #nightScriptImage { width: 7em; }
}
</style>

{% capture TOC %}
<h2 noAnchor>Table of Contents</h2>

1. [History of Privacy Breach](#historyOfPrivacyBreach)
2. [Our Lax Behavior](#ourLaxBehavior)
3. Steps in bettering our privacy:
   1. [Look at what's donated](#infoAnalysis)
   2. [Seek alternatives](#alternatives)
   3. [Limit your Actions](#actionsLimit)
4. [Frequent Responses](#frequent-responses)
5. [Apple's Praise](#apples-praise)
6. [Fighting a losing battle](#fighting-a-losing-battle)
{% endcapture %}

<h1 class="mb-0" noAnchor>Privacy Issues</h1>
<small class="font-italic font-weight-light font-underline">Published on December 31st, 2020 - Edited on January 8th, 2021</small>

<div class="d-xxl-none d-print-none">{{ TOC | markdownify }}</div>
<div class="row" markdown="1">
<div class="col-xxl-9" markdown="1">

<div class="d-md-flex d-print-block" id="historyOfPrivacyBreach">
	<img id="zammisImage" class="rounded d-print-none gridImage" src="/assets/articles/zammis.jpg" alt="Zammis Clark">
	<p class="ms-md-2 gridText">Zammis Clark, a 24-year old security researcher, had access to all of Nintendo's files from mid-March to late-May of 2018. After going through the file server and getting everything he wanted (including Software Development Kits, unreleased titles and source code for popular titles), different things were sent to different individuals (likely all of them being in the SUXXORS scene release group) in May of 2018. The damages that Nintendo estimates are between 700K euros and 1.4 million euros. However, despite his pleading in court as guilty, this hasn't stopped his friends from leaking these files to the public themselves. Within one of the latest leaks, it was revealed that Nintendo was once contracting hackers by visiting them in person, something I consider to be a privacy breach.</p>
</div>

<div class="d-md-flex d-print-block mb-2">
	<img id="neimodImage" class="rounded d-print-none gridImage" src="/assets/articles/neimod.jpg" alt="Mr. Domien">
	<p class="me-md-2 gridText">In 2012, Nintendo setup a meeting with neimod, a hacker for the Nintendo 3DS handheld device. In the meeting, they persuaded him to distance himself from hacking Nintendo system/products and to join Nintendo. But how did they get the information necessary to set up the meeting? Instead of setting up the email via an IRC chatbox or email, it was revealed through the leaked documents that the Nintendo Ninjas has been stocking neimod, documenting all his personal information including his home address and personal activities. They even found it worthy to note that he goes to restaurants <i>alone</i>, in an absolute savage move. This was all done to find the proper time for said meeting, yet the same effect could have been achieved via an email confrontation.</p>
</div>

<div class="d-md-flex d-print-block mb-2">
	<img id="bushingImage" class="rounded d-print-none gridImage" src="/assets/articles/ben.png" alt="Ben “bushing” Byer (RIP)">
	<p class="ms-md-2 gridText">Thankfully, a former undocumented altercation was not as creepy (but still a bit creepy), being communicated to via a private work phone number as opposed to face to face. This is what happened with Ben “bushing” Byer, one of the public faces of Team Twiizers (group of hackers that discovered Wii exploits and wrote <a href="https://github.com/fail0verflow/hbc">The Homebrew Channel</a>). After trying to responsibly disclose an exploit, a former director/lawyer at Nintendo of America phoned him as a intimidatory tactic. In both of these cases, they were contacted in ways that aren't accessible to the public. Yet, what happened to going from mildly creepy to stalkery? Thankfully they fixed this in 2015 when hiring Hector Martin, yet who knows how many other hackers were contacted with similar experiences?</p>
</div>

<div class="d-md-flex d-print-block">
	<img id="nightScriptImage" class="d-print-none rounded gridImage" src="/assets/images/avatar.png" alt="NightScript">
	<div class="me-md-2 gridText">
		<p>I have quite the experience with privacy breaches, seeing as how I acted worse than Nintendo back in April 2018. After months of trying to fix a relationship with someone (which already fell apart twice at that point), I was told to never join their group again because I was "ignoring" them. Due to being afraid of being trash-talked about behind my back in front of friends, I wanted to leave them with a warning: change or you won't find people to talk with. The warning was given in the form of a semi-private PasteBin document (due to WhatsApp's character limit), but I had included their personal information, making it seem extremely creepy. Since then, I had taken down the official PasteBin document and have no plans of reuploading it, largely due to my regret of doing those actions. I can only imagine the fear he must have gone through, worrying through the night in case anyone wanted to do physical harm to him.</p>
		<p>The difference in the victims in the stories is while Nintendo was doing it for a confrontational purpose, I was doing it solely for antigonazing purposes. Also, the information I received was at a time when the person trusted me with the information and that trust was broken. Neimod and bushing had not provided Nintendo with any of their information, but they got it through surveilance.</p>
	</div>
</div>

-----

{:#ourLaxBehavior}

In all three cases, private information was found about the victim. This is the worst case scenario, yet we approach close levels in our modern internet. Every time you visit a website, your IP is exposed. Every time you take a picture on your phone, the GPS coordinates of where the picture was taken [is stored in the EXIF metadata](http://kuribo64.net/board/thread.php?id=3074). Platforms like TikTok and YouTube store in their databases how much you watch of a certain video. Heck, site owners even willingly sell our data to other companies to gain an extra dollar, through advertisements.

Yet, privacy isn't really a concern in our modern day, and those of us who are concerned just have to put up with it. Anytime you even sneeze at google, they'll update their data about you to add more food to the obese database. It's inevitable that you'll be forced to use privacy-leaking software either for school, work or general every-day life. Zoom has over 300 million users and their data has been leaked on the dark web for all the stalkers to start traveling across the country to spy on. Yet, schools distance from it as much as it distances from a non-social environment learning during a pandemic, which means its not distancing itself from Zoom at all.

Even then, some of us don't even know when our data is being taken. We over react when we figure out that our favorite applications might not be as clean as it seems, yet they scream their privacy violations in a document that no one reads. One example is Wexos' Toolbox, the tool Wii U modders used to use before Switch Toolbox came out. Multiple servers "exposed" the app sending the IP address and name of the PC to the creator, recommending people to either firewall it or uninstall it. However, if people just read privacy policies or the window that pops up when you first use the app, Wexos makes it [already stated](https://cdn.discordapp.com/attachments/742488001296334888/783453475690119178/EoFiKQOXEAAM2jZ.png) what he does; there was no need to disassemble the application.

For those of you who want to start taking a stand against your privacy, here is a list of steps I + antoine62 (a privacy advocate who demonstrated just how much information has been and could be collected about me) I made so that you can take better care of your privacy:

<ol>
	<li>
		<b id="infoAnalysis">Analyse what's given in the first place</b>
		<p>Looking at what's given is the first step to not giving. Thankfully, some of it stares at our face so there's no need to read a Privacy Policy containing the same generic text we see on every website or application. Social Media Platforms and Advertisements are tailored to your personal tates (except for those that come from the Samsung Store app, as those are useless and tailor to literally no one) just to keep you on the site for longer and longer. Others are disguised as helpful tools, such as "Find my Product" and Discord Bots not using Slash Commands (meaning they're looking at every message to see what triggers it). Other's are hidden behind implications in Privacy Policies, such as Google's Privacy Policy stating that it won't use your health data to influence advertisements.</p>
		<p>Unfortunately, not every place has a privacy policy that's available before your data was already vulnerable. Google's Play Store used to have a pop-up showing which permission an app wants before downloading it, but they don't seem to do that anymore. Thankfully, the app data still exists and can be exposed with an alternative client titled <a href="https://f-droid.org/en/packages/com.aurora.store/">Aurora Store</a>. No app is safe from the store's exposure, regardless of which country it originated from.</p>
		<p>I used the application to expose the political biasness regarding privacy and user data in relations to where our data is being sent. The current president of the United States (as of the time of initial publishing) has politicized China-based applications such as TikTok for sending over data. However, companies based on the United States are even more guilty, to the point where <a href="https://www.privacytools.io/providers/#ukusa">no UK/USA based product should be used</a>.</p>
		<blockquote>
			<img style="width: 210px; height: 600px;" src="https://cdn.discordapp.com/attachments/671781268299710469/794300215787520020/Screenshot_20201231-122454_Aurora_Store.jpg"><img style="width: 270px; height: 600px;" src="https://cdn.discordapp.com/attachments/671781268299710469/794403884831473675/Screenshot_20201231-191657_Aurora_Store.jpg">
			<footer>Comparison of permissions screen between FaceBook (on the left) and TikTok (on the right). Notice how FaceBook asks for so many permissions that the screen had to be scrolled to contain it all.</footer>
		</blockquote>
		<p>European-laws, on the other hand, has been much more supportive of user privacy and requires companies to provide user-data on-request of whom they collect from. Beyond permission scope, this should tell you what they actually store, as permissions doesn't necessarily imply that they'll use it. Some of what's stored here could be things from years ago, including memes you've sent when you thought that it wouldn't come back to bite. It might even tell you things you weren't aware of yourself.</p>
		<p>Ever since 2017, I have been using an Android device (which at the time, was a Blackberry Priv). In 2018, I took a trip with a few friends to Utah and I brought my phone along. Not once did I consider that I was also bringing Google's trackers along, yet looking at <a href="https://support.google.com/maps/answer/6258979">Google Maps' timeline</a>, I am now finding out in which areas I slept, what way I went to go there and my stops along the way. I am also learning that apparently, I went to a different part of California without even realizing it. My friend figured out they went to some random McDonalds store in Wisconsin back in 2015. You could very much learn something about your travel history by visiting this website.</p>
	</li>
	<li>
		<b id="alternatives">Seek alternatives</b>
		<div class="d-md-flex d-print-block mb-2">
			<img id="mastodonImage" class="d-print-none gridImage" src="https://www.privacytools.io/assets/img/svg/3rd-party/mastodon.svg" alt="Mastodon">
			<p class="ms-md-2 gridText">Although not as popular as commercial products, alternative products can be just as useful or even better at times. Whereas FaceBook and Twitter is a general platform, <a href="https://dev.to/">dev.to</a> is a great platform for developers (& doesn't have a character limit). If you want a purely general platform, Mastodon is an open-source microblogging platforms where the instances are interconnected realms. Just like email, you don't need to be on the same server in order to communicate with others.</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="searxImage" class="d-print-none gridImage" src="https://www.privacytools.io/assets/img/svg/3rd-party/searx.svg" alt="Searx">
			<p class="me-md-2 gridText">Need to search something on the web? The popular tracker-free search engine is DuckDuckGo, but that code is proprietary and serve advertisements (based on the current search query, not based on previous data collected about you because there is no previous data collected about you). If you want someting truly open source, feel free to look into <a href="https://searx.me/">Searx</a>. There is <a href="https://searx.space/">a list of public instances</a>, but you could also self-host it yourself.</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="torImage" class="d-print-none gridImage" src="/assets/articles/tor.png" alt="Tor">
			<div class="ms-md-2 gridText">
				<p>But how would you surf the web and use Searx without a browser? Enter Tor for Android and Desktop. Tor is a network <a href="https://www.torproject.org/about/history/">written</a> by Roger Dingledine and Nick Metthewson with the funding from the Naval research lab. By connecting through a series of tunnels (or the technical term Node) rather than making direct connections, not a single party would know the entire path of who you are and which website you're visiting. Your <a href="https://www.privacytools.io/browsers/#fingerprint">fingerprint</a> is the same as other tor users, meaning you blend right in with the crowd.</p>
				<ul><li>iOS users have a version of tor in the form of the Onion Browser, yet some traffic may be routed via your normal connection and not Tor due to <a href="https://github.com/OnionBrowser/OnionBrowser/wiki/Traffic-that-leaks-outside-of-Tor-due-to-iOS-limitations">restrictions</a> imposed by Apple.</li></ul>
				<div class="videoEmbedsWrap"><video class="videoEmbeds d-print-none" controls="" preload="none">
					<source src="https://www.torproject.org/videos/Tor_Animation_en.mp4" type="video/mp4">
				</video></div>
			</div>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="fedoraImage" class="d-print-none gridImage" src="https://www.privacytools.io/assets/img/svg/3rd-party/fedora.svg" alt="Fedora">
			<p class="me-md-2 gridText">Microsoft's latest version of Windows is a <a href="https://www.privacytools.io/operating-systems/#win10">privacy nightmare</a>, especially with Cortana enabled. Consider looking into a Linux distribution, with a WINE setup so you could still run most Windows programs on your new setup. Although the most popular distribution is Ubuntu, I instead recommend <a href="https://getfedora.org/">Fedora</a>, due to the bloatless installation. It comes default with a desktop environment matching Windows's, so there should be no new learning curve (except for installation Linux applications, yet even then, it's much more sophisticated than Windows's.)</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="giteaImage" class="d-print-none gridImage" src="https://s.gitea.com/img/logo.svg" alt="Gitea">
			<p class="ms-md-2 gridText">Microsoft (a monopoly that sells software) owning GitHub (a website where open-source companies store their free software) was a fear shared among many developers. This fear was justified when RIAA took down youtube-dl back in October 2020. Although the EFF reverted the app's removal, the damage has already been done and this event stood as one of the biggest threats to open-source. Thankfully, you could host your own Git service via <a href="https://gitea.com/">Gitea</a>, a lightweight open-source Git service written in Go. Feel free to either self-host or use the main instance.</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="cryptImage" class="d-print-none gridImage" src="https://www.privacytools.io/assets/img/svg/3rd-party/cryptpad.svg" alt="Cryptpad">
			<p class="me-md-2 gridText">Did you perhaps use GitHub's gist feature to store text documents? Or are you using something like Microsoft Word? Why not try using <a href="https://cryptpad.fr/pad/">CryptPad</a> instead?<br>
			Cryptpad is an open-source and real-time collaborative editor, <a href="https://cryptpad.fr/about.html">authored</a> by Aaron MacSween and Yann Flory. Although they do collect data provided by the HTTP protocal for improvement purposes, they will not furnish it to third parties (unless legally required to). If that doesn't sound right with you, feel free to <a href="https://github.com/xwiki-labs/cryptpad/wiki/Installation-guide">host your own instance</a>.</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="denoImage" class="d-print-none gridImage" src="/assets/articles/deno.png" alt="Deno">
			<p class="ms-md-2 gridText">Another thing GitHub recently bought was npm, a repository for node.js modules. While you could always manually download and include these modules, there's something conveniant about being able to run <code>npm update</code> to download the latest versions of modules. Deno, an alternative to node.js, aims to solve the centralization of modules by being able to directly import modules from the internet. This is beneficial as now, they can be hosted anywhere. Deno is also just a better browser-less JavaScript environment, by being able to support TypeScript out of the box and top-level async.</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="FDroidImage" class="d-print-none gridImage" src="/assets/articles/f-droid.png" alt="F-Droid">
			<p class="me-md-2 gridText">Aurora Store is great as a Google Play Store as you don't need to sign into Google, but we're still directly accessing a platform that's rather known to be a privacy hog. Thankfully, for those of you who use Cydia on iOS or Universal-Updater on Nintendo 3DS, you would understand the concept of stores. Stores are basically miniature databases where people can have their own listing to be accessed from a frontend combining them all. F-Droid is basically that for Android, and it has garnered the support of thousands of developers.</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="ytImage" class="d-print-none gridImage" src="/assets/articles/youtube.png" alt="Youtube">
			<p class="ms-md-2 gridText">Other times, if you must use the service, you should try and look for an alternative front end. Want to watch a YouTube video? Try <a href="https://invidious.snopyta.org/">Invidious</a>, a self-hosted youtube frontend that doesn't give your IP to Google. On Android, I recommend <a href="https://newpipe.net/">NewPipe</a>, an alternative frontend to YouTube that does not use Google's Play Services. There is a tradeoff of not seeing comment replies, but you get privacy and functionality in return (one app for YouTube, SoundCloud and other services + audio only functionality).</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="messagingIcon" class="d-print-none gridImage" src="/assets/images/icons/messaging.png" alt="Messaging">
			<p class="me-md-2 gridText">Communication requires both sides to cooporate, both in terms of willingness to have discussions and which platform to use. Once both parties are willing to switch, it's as easy as facilitating your needs. Any user that currently uses <a href="https://www.eff.org/deeplinks/2016/10/where-whatsapp-went-wrong-effs-four-biggest-security-concerns">WhatsApp</a> has no limitation to switch to <a href="https://signal.org/">Signal</a>, an application with End-To-End encryption. Signal is also great for <a href="https://tosdr.org/#discord">Discord</a> users who either a) only use groups or b) hosts single-channel servers. For Discord servers with multiple channels, look into the <a href="https://matrix.org/">Matrix</a> platform. You can either join another user's home-server (such as "chat.privacytools.io", "nitro.chat" and others, but whatever you do, don't use Matrix's default home server), buy a pre-hosted server using <a href="https://element.io/matrix-services">Element Matrix Services</a> or self-host your own server.</p>
		</div>
		<div class="d-md-flex d-print-block mb-2">
			<img id="ptImage" class="d-print-none gridImage" src="https://raw.githubusercontent.com/privacytools/brand/master/shield/shield.svg" alt="PrivacyTools">
			<p class="ms-md-2 gridText">Overall, there's probably something that would facilitate your needs. I definitely recommend checking <a href="https://www.privacytools.io/providers/">PrivacyTools</a>, a site which lists mainstream services alongside alternatives. When looking for alternatives, though, please don't automatically assume that decentralized or open-source means that it is secure. A good example of this is IRC, Personally, I watch videos on NewPipe, microblog on discord, chat on discord and use SMS for communicating with people unwilling to move to Signal. Wait, didn't I just disrecommend Discord and SMS?</p>
		</div>
	</li>
	<li>
		<b id="actionsLimit">Limit your actions</b>
		<p>I can't just abandon people cause they don't understand something; this isn't teenagers on prom after their spouse said no! So unfortunately, I'm stuck on platforms which aren't secure and have huge privacy issues. Schools all over the world are currently using corporate video streaming platforms for classes due to the COVID-19 pandemic, so unless we want to get Fs or your teacher is super cool, there's no way to pass high school and avoid giving Zoom your data. So how would you manage?</p>
		<ul>
			<li>Your app's configuration probably contains a few toggles that could let you be as anonymous as possible. Per Eurpoean law, non-mandatory cookies must be toggleable, so be sure to look out for that when you see a cookie pop-up (our site doesn't use cookies so you won't find that here). Personalization and "send data to improve service" should also be options you could disable. Giving precise location access often times isn't needed for things such as weather. Many other things about you are given away with a simple toggle-in app could shut it all down.</li>
			<li>
				<blockquote>
					<img src="https://image.jimcdn.com/app/cms/image/transf/none/path/sf91b3285d9193eec/image/i9d401b7d547c33dd/version/1508251369/image.jpg" />
					<footer>Screenshot of Windows10Privacy</footer>
				</blockquote>
				<p>If you can't disable everything from the app itself, perhaps check if an external tool can modify the program or install a modified version of the program. Windows 10 has <a href="https://www.winprivacy.de/english-home/">Windows10Privacy</a>, an application which disables specific elements of Windows 10. <a href="https://vancedapp.com/">Youtube Vanced</a> removes all advertisements from videos, meaning Google won't show you the personalization. While not as good as NewPipe is for priacy, it uses MicroOG so it's still better than Stock Youtube.</p>
			</li>
			<li>
				Speaking of Google applications, what if you're restricted to their bloated browser? Or what if you're using standard FireFox instead of using the fork which includes <a href="#torImage">Tor</a>? Well, as long as you're not using Internet Explorer or Safari (and if you are, you have bigger issues than privacy), there should be extensions to help you keep your browsing history incognito:
				<ul>
					<li><a href="https://tosdr.org/">TOSDR</a>, while not a privacy addon in and of itself, is helpful to describe Terms of Services and shorten them, for those of us who don't read. It even gives scores depending on how much rights you lose. Chances are, if you're still reading this, you can manage fine without this plugin.</li>
					<li>
						<p>Behavioral profiling is nothing new, and even exists in our real world. During the second world war, British intelligence operators made anonymous profiles of the German's signaling the morse code by looking at the speed and errors. Years later, that underlying principle has been used on the web, to identify things such as gender and attackers who own user credentials using keystrokes as opposed to morse code. The first time this was <a href="https://web.archive.org/web/20160311163053/https://www.schneier.com/blog/archives/2007/04/keystroke_biome.html">considered</a> was 14 years ago, on April 23rd 2007 by Bruce Schneier. Professor Christophe Rosenberger (the man who identified based on gender) made a talk about it here: <span class="d-none d-print-inline-block">found at https://invidious.snopyta.org/watch?v=ZzQrP4x0u2M</span></p>
						{% include youtube.html url="ZzQrP4x0u2M" %}
						<p>To show how dangerous this is, <a href="http://behaviosec.com/">BehavioSec</a> is a Swedish bank company that made a website simulating a login page and bank transfer. After signing up on their site that looks like any other login site, you're asked to simulate a bank transfer by typing exactly 44 characters. The speed of the characters type is recorded, and is then used to give you a score:</p>
						<blockquote>
							<img src="https://paul.reviews/content/images/2015/07/4_green.PNG" />
							<footer>80% confident that they're the same user with a session score of 99%</footer>
						</blockquote>
						<p>A chromium extension is here to fix it. When you use <a href="https://chrome.google.com/webstore/detail/keyboard-privacy/aoeboeflhhnobfjkafamelopfeojdohk">Keyboard Privacy</a>, your keystrokes will be cached for a few miliseconds before entering it into the device at a consistent pace. All the keystrokes will appear equal, meaning that there won't be any timing based on how laggy you are. To demonstrate it, the authors have made a video using BehavioSec's website: <span class="d-none d-print-inline-block">found at https://invidious.snopyta.org/watch?v=rAYz7uWPN_8</span></p>
						{% include youtube.html url="rAYz7uWPN_8" %}
					</li>
					<li>Have you been sharing Amazon products with your friends, questioning if you should buy toilet paper (which is apparently a life necessity now over food and shelter)? Well, you probably notice that the search results url is quite long, which contains things like what keyword you used to search for it, what language you're using and such. <a href="https://gitlab.com/KevinRoebert/ClearUrls">ClearURLs</a> can remove the extra fluff, meaning you no longer need to split your messages in two due to a dumb character limit.</li>
					<li>Must use Google on Firefox? Right click a search result entry and copy the link down. Notice how it isn't the site you're trying to visit. The reason is because instead of not tracking the links you click acrross its search engine or tracking you via JavaScript's onclick, Google adds a redirection layer in between the link you click and the site. "<a href="https://addons.mozilla.org/en-US/firefox/addon/remove-google-redirections/">Remove Google Redirects</a>" seeks to do as the name implies, by making all the links in the search results point directly to the website you wish to browse.</li>
					<li>Thankfully, advertisements shown on Google's page don't cause the browser to jump but they have annoyingly implemented it on YouTube videos to interrupt your watching session. They also own a service titled Google AdSense which provide these advertisements to other websites. Google AdSense's moto is that you put their advertisement on your page, describe how your page is like so that they can see what type of content you're interested in and sell you related advertisements. Blocking them is quite common, but everyone seems to use AdBlocker (Plus) when they are being paid to not block certain advertisements. <a href="https://addons.mozilla.org/firefox/addon/ublock-origin/">uBlock Origin</a>, on the other hand, is not influenced by money and blocks all the advertisements out there. It's also based on newer memory-efficient technology, which should make slowdowns less noticible.
					<ul><li>It's worth noting, though, that although the portion given to content creators is small, it's still profit removed from them. Please be respectful when asked why you have an AdBlocker, as it could be looked as robbing. Perhaps use an alternative to support them, such as sharing the content with friends or giving a donation.</li></ul>
					</li>
					<li>Google has a system to report bad advertisements, yet the user needs to first come into contact with the bad advert in order to report it in the first place. One of the unacceptable advertisements are redirection advertisements, which would take you to an entirely separate page on load. These pages often hijack the "Previous" button, which means no matter how many times you hit it, you'll still find yourself on that page unless they didn't hijack it enough so that you could right click on the button and find the previous website. If you happen to stumble upon a link that does just this, you can prevent the hijack ability by using FireFox's <a href="https://addons.mozilla.org/en-US/firefox/addon/dont-touch-my-tabs/">Don't touch my tabs</a> addon.</li>
					<li>
						<blockquote>
							<img src="https://unshorten.link/assets/img/howitworks.png">
							<footer>Analysis page example from unshorten.link</footer>
						</blockquote>
						Often times, content creators think that they own links and want to make profit out of them, so they hide them behind a bit.ly shortener. These shorteners also make it difficult to see where you'd be landing, but not if you use the <a href="https://unshorten.link">unshorten.link</a> addon. This addon can also tell you if the page has malware and the pro version comes with features such as destination screenshot & filtering history.
					</li>
				</ul>
			</li>
			<li>Sharing photos with friends can be super braggy, and I totally understand that sensation when you just want to randomly tell your friends that you're somewhere enjoying yourself, breaking all the COVID rules when they're stuck at home confining to the ""communist"" government. So how about instead of not uploading images because you just love that attention or staying home to prevent the COVID spread, instead just put it through an EXIF stripper? Windows can <abbr title='Right Click on Image File -> "Properties" -> "Details" -> "Remove Properties and Personal Information" -> "Create a copy with all possible properties removed" -> "OK"'>remove a file's metadata</abbr> and iOS has a way to <abbr title='"Settings" -> "Privacy" -> "Location Services" -> "Camera" -> "Never"'>disable the capture</abbr> from pictures taken from the Camera app.</li>
			<li>Don't trust an app you have to install? Don't install it on your main operating system but instead, setup a contained environment titled a Virtual Machine. If anything infectious happens, the damage would be limited to the elements you give your virtual machine access to. It won't be able to escape, yet you are always in control.</li>
		</ul>
	</li>
</ol>

<h3 noAnchor id="frequent-responses">Frequent Responses</h3>

- "But I have nothing to hide"           
  As pointed out in Step #1 of my Privacy Guide, Facebook-based applications can look at your credentials, which means that they can grab login informations. To make it more understandable in a human way, would you give me all your login credentials for all the services you use? Just like you wouldn't trust some random 17-year old on the internet, why are you trusting mega corporations that are known to sell your data? (and if your answer is yes, feel free to leave all the windows open in your house and yell every conversation you have)
- "Nothing is private either way, with archive.org, screenshots, screen recorders, etc"       
  There is merit to this. Online, there will never be a way to be 100% private. Your Internet Service Provider would be aware of the fact that you're trying to connect, so trying to keep the fact that there is activity private will never work. Environments would always require you to use tools that may involve giving up privacy. However, our goal is to try our best. No human is perfect, but we don't see everyone become criminals. Just like privacy advocates; we want to have as much control as possible, even if it's ultimately in the fate of ISPs.

  Going back to the comment about screen recorders, my goal of writting this was not to protect from user privacy-invasions. Ultimately, that's up to who you contact. However, your human brain would be able to identify who you should reveal your data towards and who you shouldn't. For people that you meet online, you really shouldn't tell them your social security card (unless it's to stop Gygas, which for some reason seems to be part of a copy pasta trend). My goal of writting this was to protect from corporate privacy-invasions. Despite having humans control them, they see things via numbers rather than the value.
- "Why care? My data is collected to help me!"            
  There are many reasons to care about big brother watching you. They frequently sell your data to other companies, meaning that it's now not just the service that you use (and are fine with their privacy policy) but also a service that you're not using (and have a much more questionable privacy policy). If that company's data ever leaks, your identity is put out for the entire public to see, including people that have wrong intentions.

  The more data people have on you, the easier it is to manipulate you. In Vox's video (<span class="d-none d-print-inline-block">found at https://invidious.snopyta.org/watch?v=wZSRxfHMr5s</span><span class="d-print-none">embedded below</span>), they describe how social media applications are able to manipulate you to stay on their platform by showing you only what you like. If you were a republican, you wouldn't be on a website where both republican and democratic comments are shown. The same thing applies vice versa, <s>although there wouldn't be random posts calling it fake news.</s> This is worrying outside privacy reasons too, as it doesn't allow you to be open minded, or ads could be displayed with misinformation.<br>
  {% include youtube.html url="wZSRxfHMr5s" %}

  The more time you spend on the platform, the more you appreciate things from them. Soon, you want to do things such as donate or buy products from them, meaning that they easily profitted. Other companies are also interested in ways they can profit off you, so they ask the original company to sell you their data. The more data they have on you, the higher the price. Your data is inevitably sold, because the original company thinks that you are entirely loyal and would use their company's product more than the competitors.

  <blockquote>
    <img src="https://www.washingtonpost.com/news/morning-mix/wp-content/uploads/sites/21/2017/03/toiletsB.jpg" />
    <footer>Image Source: The Washington Post</footer>
  </blockquote>
  In terms of control, just note that your data could be used against you. It's like a school bully that tells you that he won't tell the other kids what he saw you do unless you follow his every command. That leads you to use their product even more, which increases the ways they can manipulate you which increases the way you use the product more, rinse and repeat, which ends up making the threat much bigger. Just note that in China, there is a limit on how much toilet paper you could use in public bathrooms, recorded via a facial recognition software. It has no Privacy Policy, meaning that the data could be stored for months on end. The threat of a random person going to a public bathroom isn't too grand (like, who cares), yet it could be use as part of a grander sceme to stock your every move.
- "It's probably already too late"      
  It's never too late to start taking action against something. You can't get your data back if it was already sold, so the best way to get revenge is to not give it any new data.
- "I use a VPN so my data should be safe already"      
  VPNs are only useful for additional privacy from Internet Service Providers or public Wi-Fi network accross non-secure HTTP connections. However, in no way do they keep your browser habits anonymous or add security. If the website you're visiting supports HTTPS (which is most of the web), your non-DNS traffic is safe regardless if you use a VPN. By using a VPN, all you're doing is shifting who can see it; from your ISP to the VPN company, which has no way to verify their "no logging" policy. To explain this in a video form, feel free to watch Tom Scott's video: <span class="d-none d-print-block">found at https://invidious.snopyta.org/watch?v=WVDQEoe6ZWY</span><br>
  {% include youtube.html url="WVDQEoe6ZWY" %}

<h3 noAnchor id="apples-praise">Apple's Praise</h3>

For those of you who are tech enthusiasts that care enough to read through these 8 pages, you would know how locked down Apple's mobile operating system is. However, as much as I bash them and think that [lockdown does not equal better security](/blog/effects-of-9th-grade#anti-iphone-gone-legal), they have been better than Google in terms of privacy. Not only do they not do [as I described above](#infoAnalysis), but they are advocates for user rights in regards to privacy (unfortunately, not in regards to anything else). [Privacy labels](https://developer.apple.com/news/?id=3wann9gh) are now required and [prompts are now shown](https://forums.macrumors.com/threads/ios-14-4-beta-1-bug-fixes-changes-and-improvements.2275786/page-8?post=29425742#post-29425742) before any sort of tracking goes. To quote an official statement made by an apple employee:

> We believe that this is a simple matter of standing up for our users. Users should know when their data is being collected and shared across other apps and websites — and they should have the choice to allow that or not. App Tracking Transparency in iOS 14 does not require Facebook to change its approach to tracking users and creating targeted advertising, it simply requires they give users a choice.

When iOS 14 was announced and open for beta testers, apps found to act invasive were leaked. [TikTok](https://www.forbes.com/sites/zakdoffman/2020/06/26/warning-apple-suddenly-catches-tiktok-secretly-spying-on-millions-of-iphone-users/), [Reddit](https://www.forbes.com/sites/daveywinder/2020/07/05/reddit-latest-to-get-caught-by-apple-ios-14-clipboard-data-copying-alerts-iphone-privacy/?sh=1840f2b27de6), [LinkedIn](https://www.forbes.com/sites/daveywinder/2020/07/04/apple-ios-14-catches-microsofts-linkedin-spying-on-clipboard-tiktok-apps-privacy-iphone-ipad-macbook/) amongst 53 other apps was caught being a keylogger, which means accessing the clipboard data. While LinkedIn & Reddit were quick to push a fix and get ignored, TikTok was a Chinese company and the United States was already sour from the things COVID-19 did to its economy. This prompted Donald Trump to try and ban it, which hey, isn't a bad thing if we stop getting the cringe memes and bigotry on the platform. I'm mentioning TikTok's issue because that was the only country which had a legitimate reason to retaliate, yet FaceBook had none. However, it was FaceBook that was trying to block this.

Full page advertisements were [bought](https://www.theverge.com/2020/12/16/22178068/facebook-apple-newspaper-ads-ios-privacy-changes) in *The New York Times*, *The Washington Post* and *The Wall Street Journal* with the headline of "We're standing up to Apple for small businesses everywhere". To quote the [Electronic Frontier Foundation](https://www.eff.org/deeplinks/2020/12/facebooks-laughable-campaign-against-apple-really-against-users-and-small), “Make no mistake: this latest campaign from Facebook is one more direct attack against our privacy and, despite its slick packaging, it’s also an attack against other businesses, both large and small.” Facebook isn't telling you the whole story; it only benefits those who already benefit from surveilance-powered advertising (so neither users or small-businesses). Facebook has been serving [eerily accurate ads](https://www.eff.org/deeplinks/2018/04/facebook-doesnt-need-listen-through-your-microphone-serve-you-creepy-ads) which mainly profit them; not the publisher of whomst they're taking the ads from.

In the end, even Facebook's own employee's [call this hypocritical](https://www.buzzfeednews.com/article/craigsilverman/facebook-apple-fight-self-serving). Apple has been praised by everyone including the EFF, and they also encourage Google to follow in their footsteps. As well as expose other apps, they've even cut down on the things they do themselves. Just take a look at the comparison between iMessage and FaceBook Messenger:

![](https://specials-images.forbesimg.com/imageserve/5ff07f779f9392c3af404599/960x0.png){:.img-thumbnail}

Of course, I don't think anyone would be able to beat Signal, yet I found it amazing that iMessage could work with as little as an Apple Account and yet people still use WhatsApp. Please consider where you're putting you're trust; the company whos own employees call hypocrisy or someone fighting for others.

<h3 noAnchor id="fighting-a-losing-battle">Fighting a losing battle</h3>

As I've noted in my communications section, it requires the active effort of everyone. Unfortunately, people have been relunctant to change due to it being the norm.

But does it have to be the norm? Why not fight for change? We have much more power than we think. If we stop using their application, they have a risk of falling into irrelevancy. WhatsApp is trying desperately to prove itself from their new Privacy Policy changes, as users switch to other platforms (like Signal or Telegram). They've clearly adapted to the concerns of its users, as the change is delayed.

In 2019, I became increasingly suspicious of a fan-game by the title of Mario Multiverse. The game was trying to write to System32 when I gave it limited permissions and detected file path changes. When I confronted neoarc about it, he said a Privacy Policy was not needed. A Privacy Policy implies strict laws of what the game can and can't do, and the owner would be liable if it was broken. The best solution to this was to not have one, since you wouldn't need to expose what your app did. bunten & I wrote out a PasteBin document describing our weird occurences, and it spread throughout the fangame community (largely due to it being posted on Blue Television Game's server). Neoarc responded with finally making a Privacy Policy, debunking all the misinformation spread about the game.

There clearly is a concern and there is a listener. We just need to voice the concerns to the listener.

-----

As we install new apps on our phones or browse new websites, keep note that you are being watched. Whether it's your IP address, EXIF data, cookies and much more, corporations are on a hunt to make you their extra dollar. The way to solve this is if you stop feeding them. Take a stand against your privacy. Keep yourself from the exposure of others.

</div>

<div class="col-xxl-3 d-none d-xxl-block">

<div class="sticky-top">
	{{ TOC | markdownify }}
</div>

</div>

</div>