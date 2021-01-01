---
title: "Privacy Issues"
description: Where's the fine line of how much info you have on someone? How do you even get that person's info?
permalink: /blog/privacy
---

<style>
#neimodImage, #nightScriptImage, #searxImage, #messagingIcon, #firefoxImage, #fedoraImage { order: 2; }

@media (max-width: 767px) {
	#zammisImage img,
	#neimodImage img,
	#bushingImage img,
	#nightScriptImage img,
	#mastodonImage img,
	#searxImage img,
	#ytImage img,
	#messagingIcon img,
	#ptImage img,
	#torImage img,
	#firefoxImage img,
	#fedoraImage img,
	#giteaImage img {
		max-width: 25vh;
	}
}

@media (min-width: 768px) {
	#zammisImage { flex-basis: 95%; }
	#nightScriptImage { flex-basis: 112.5%; }
	#neimodImage, #bushingImage, #messagingIcon { flex-basis: 90%; }
	#ytImage, #mastodonImage, #ptImage, #searxImage { flex-basis: 70%; }
	#torImage, #firefoxImage, #fedoraImage {flex-basis: 75%;}
	#giteaImage { flex-basis: 50%; }
}

@media (min-width: 992px) {
	#zammisImage { flex-basis: 155%; }
	#nightScriptImage { flex-basis: 172.5%; }
	#neimodImage, #bushingImage, #messagingIcon { flex-basis: 140%; }
	#ytImage, #mastodonImage, #ptImage, #searxImage { flex-basis: 70%; }
}

@media (min-width: 1400px) {
	#zammisImage { flex-basis: 45%; }
	#nightScriptImage { flex-basis: 47.5%; }
	#neimodImage, #bushingImage, #messagingIcon { flex-basis: 40%; }
	#ytImage, #mastodonImage, #ptImage, #searxImage, #torImage, #firefoxImage, #giteaImage, #fedoraImage { flex-basis: 20%; }
}
</style>

{% capture TOC %}
1. [History of Privacy Breach](#historyOfPrivacyBreach)
2. [Our Lax Behavior](#ourLaxBehavior)
3. Steps in bettering our privacy:
   1. [Look at what's donated](#infoAnalysis)
   2. [Seek alternatives](#alternatives)
   3. [Limit your Actions](#actionsLimit)
4. [Frequent Responses](#frequent-responses)
{% endcapture %}

# Privacy Issues
{:.mb-0}
<small class="font-italic font-weight-light font-underline">Published on December 31st, 2020</small>

<div class="d-xxl-none">{{ TOC | markdownify }}</div>
<div class="row" markdown="1">
<div class="col-xxl-9" markdown="1">

<div class="d-md-flex" id="historyOfPrivacyBreach">
	<div id="zammisImage"><img class="rounded" src="/assets/articles/zammis.jpg" alt="Zammis Clark"></div>
	<p class="ms-md-2">Zammis Clark, a 24-year old security researcher, had access to all of Nintendo's files from mid-March to late-May of 2018. After going through the file server and getting everything he wanted (including Software Development Kits, unreleased titles and source code for popular titles), different things were sent to different individuals (likely all of them being in the SUXXORS scene release group) in May of 2018. The damages that Nintendo estimates are between 700K euros and 1.4 million euros. However, despite his pleading in court as guilty, this hasn't stopped his friends from leaking these files to the public themselves. Within one of the latest leaks, it was revealed that Nintendo was once contracting hackers by visiting them in person, something I consider to be a privacy breach.</p>
</div>

<div class="d-md-flex mb-2">
	<div id="neimodImage"><img class="rounded" src="/assets/articles/neimod.jpg" alt="Mr. Domien"></div>
	<p class="me-md-2">
	In 2012, Nintendo setup a meeting with neimod, a hacker for the Nintendo 3DS handheld device. In the meeting, they persuaded him to distance himself from hacking Nintendo system/products and to join Nintendo. But how did they get the information necessary to set up the meeting? Instead of setting up the email via an IRC chatbox or email, it was revealed through the leaked documents that the Nintendo Ninjas has been stocking neimod, documenting all his personal information including his home address and personal activities. They even found it worthy to note that he goes to restaurants <i>alone</i>, in an absolute savage move. This was all done to find the proper time for said meeting, yet the same effect could have been achieved via an email confrontation.</p>
</div>

<div class="d-md-flex mb-2">
	<div id="bushingImage"><img class="rounded" src="/assets/articles/ben.png" alt="Ben “bushing” Byer (RIP)"></div>
	<p class="ms-md-2">Thankfully, a former undocumented altercation was not as creepy (but still a bit creepy), being communicated to via a private work phone number as opposed to face to face. This is what happened with Ben “bushing” Byer, one of the public faces of team0verflow (a team that found Wii exploits and wrote The Homebrew Channel). After trying to responsibly disclose an exploit, a former director/lawyer at Nintendo of America phoned him as a intimidatory tactic. In both of these cases, they were contacted in ways that aren't accessible to the public. Yet, what happened to going from mildly creepy to stalkery? Thankfully they fixed this in 2015 when hiring Hector Martin, yet who knows how many other hackers were contacted with similar experiences?</p>
</div>

<div class="d-md-flex">
	<div id="nightScriptImage"><img class="rounded" src="/assets/images/avatar.png" alt="NightScript"></div>
	<div class="me-md-2">
		<p>I have quite the experience with privacy breaches, seeing as how I acted worse than Nintendo back in April 2018. After months of trying to fix a relationship with someone (which already fell apart twice at that point), I was told to never join their group again because I was "ignoring" them. Due to being afraid of being trash-talked about behind my back in front of friends, I wanted to leave them with a warning: change or you won't find people to talk with. The warning was given in the form of a semi-private PasteBin document (due to WhatsApp's character limit), but I had included their personal information, making it seem extremely creepy. Since then, I had taken down the official PasteBin document and have no plans of reuploading it, largely due to my regret of doing those actions. I can only imagine the fear he must have gone through, worrying through the night in case anyone wanted to do physical harm to him.</p>
		<p>The difference in the victims in the stories is while Nintendo was doing it for a confrontational purpose, I was doing it solely for antigonazing purposes. Also, the information I received was at a time when the person trusted me with the information and that trust was broken. Neimod and bushing had not provided Nintendo with any of their information, but they got it through surveilance.</p>
	</div>
</div>

-----

{:#ourLaxBehavior}

In all three cases, private information was found about the victim. This is the worst case scenario, yet we approach close levels in our modern internet. Every time you visit a website, your IP is exposed. Every time you take a picture on your phone, the GPS coordinates of where the picture was taken [is stored in the EXIF metadata](http://kuribo64.net/board/thread.php?id=3074). Platforms like TikTok and YouTube store in their databases how much you watch of a certain video. Heck, site owners even willingly sell our data to other companies to gain an extra dollar, through advertisements.

Yet, privacy isn't really a concern in our modern day, and those of us who are concerned just have to put up with it. Anytime you even sneeze at google, they'll update their data about you to add more food to the obese database. It's inevitable that you'll be forced to use privacy-leaking software either for school, work or general every-day life. Zoom has over 300 million users and their data has been leaked on the dark web for all the stalkers to start traveling across the country to spy on. Yet, schools distance from it as much as it distances from a non-social environment learning during a pandemic, which means its not distancing itself from Zoom at all.

Even then, some of us don't even know when our data is being taken. We over react when we figure out that our favorite applications might not be as clean as it seems, yet they scream their privacy violations in a document that no one reads. One example is Wexos' Toolbox, the tool Wii U modders used to use before Switch Toolbox came out. Multiple servers "exposed" the app sending the IP address and name of the PC to the creator, recommending people to either firewall it or uninstall it. However, if people just took a look at what they're downloading and read the ReadME, they would know it is [already stated](https://cdn.discordapp.com/attachments/742488001296334888/783453475690119178/EoFiKQOXEAAM2jZ.png)

For those of you who want to start taking a stand against your privacy, here is a list of steps I + antoine62 (a privacy advocate who demonstrated just how much information has been and could be collected about me) I made so that you can take better care of your privacy:

<ol>
	<li>
		<b id="infoAnalysis">Look at what's donated</b>
		<p>If you want to stop giving, you should look at what you give in the first place. Take notes of the content received throughout the day, whether it's news, advertisements or others. If you use a "Find my Product" service, then take note that it stores your location. Google's Privacy Policy states that it won't use your health data to influence advertisements, implying that they store data about health. The best place to look at this is a services Privacy Policy, which is required according to GDPR rules.</p>
		<p>For Android users, I want you to go and download <a href="https://f-droid.org/en/packages/com.aurora.store/">Aurora Store</a>, an alternative client to Google's Play Store. It has a specific button at the end of the app view that reveals which permissions an app use, such as Facebook looking at your biometrics (Fingerprint Scanner, Face Unlock) or WhatsApp using credentials. The tracker view is also quite important.</p>
		<p>For the people living in the USA, I especially would like you to take off the political glasses for a bit and look at everything the same. Our current president has made TikTok and other China-based applications' privacy violation political, yet apps made in the United States of America are just as guilty, if not moreso.</p>
		<blockquote>
			<img style="width: 105px; height: 300px;" src="https://cdn.discordapp.com/attachments/671781268299710469/794300215787520020/Screenshot_20201231-122454_Aurora_Store.jpg"><img style="width: 135px; height: 300px;" src="https://cdn.discordapp.com/attachments/671781268299710469/794403884831473675/Screenshot_20201231-191657_Aurora_Store.jpg">
			<footer>Comparison of permissions screen between FaceBook (on the left) and TikTok (on the right). Notice how FaceBook asks for so many permissions that the screen had to be scrolled to contain it all.</footer>
		</blockquote>
		<p>I also want you to request a copy of all your data of all the services that you use. According to GDPR rules, sites are forced to provide data it stores on request, meaning you get to see all the memes you sent when you were just a teenager. You'll also find things about you that you weren't even aware about yourself.</p>
		<p>Ever since 2017, I have been using an Android device (which at the time, was a Blackberry Priv). In 2018, I took a trip with a few friends to Utah and I brought my phone along. Not once did I consider that I was also bringing Google's trackers along, yet looking at <a href="https://support.google.com/maps/answer/6258979">Google Maps' timeline</a>, I am now finding out in which areas I slept, what way I went to go there and my stops along the way. I am also learning that apparently, I went to a different part of California without even realizing it. My friend figured out they went to some random McDonalds store in Wisconsin back in 2015. You could very much learn something about your travel history by visiting this website.</p>
	</li>
	<li>
		<b id="alternatives">Seek alternatives</b>
		<div class="d-md-flex mb-2">
			<div id="mastodonImage"><img src="https://www.privacytools.io/assets/img/svg/3rd-party/mastodon.svg" alt="Mastodon"></div>
			<p class="ms-md-2">Although not as popular as commercial products, alternative products can be just as useful or even better at times. Whereas FaceBook and Twitter is a general platform, <a href="https://web.dev/">web.dev</a> is a great platform for developers (& doesn't have a character limit). If you want a purely general platform, Mastodon is an open-source microblogging platforms where the instances are interconnected realms. Just like email, you don't need to be on the same server in order to communicate with others.</p>
		</div>
		<div class="d-md-flex mb-2">
			<div id="searxImage"><img src="https://www.privacytools.io/assets/img/svg/3rd-party/searx.svg" alt="Searx"></div>
			<p class="me-md-2">Need to search something on the web? The popular tracker-free search engine is DuckDuckGo, but that code is proprietary and serve advertisements (based on the current search query, not based on previous data collected about you because there is no previous data collected about you). If you want someting truly open source, feel free to look into <a href="https://searx.me/">Searx</a>. There is <a href="https://searx.space/">a list of public instances</a>, but you could also self-host it yourself.</p>
		</div>
		<div class="d-md-flex mb-2">
			<div id="torImage"><img src="https://privacytools.io/assets/img/svg/3rd-party/tor_browser.svg" alt="Tor"></div>
			<div class="ms-md-2">
				<p>But how would you surf the web and use Searx without a browser? Enter Tor for Android and Desktop. Tor is a network <a href="https://www.torproject.org/about/history/">written</a> by Roger Dingledine and Nick Metthewson with the funding from the Naval research lab. By connecting through a series of tunnels (or the technical term Node) rather than making direct connections, not a single party would know the entire path of who you are and which website you're visiting. Your <a href="https://www.privacytools.io/browsers/#fingerprint">fingerprint</a> is the same as other tor users, meaning you blend right in with the crowd.</p>
				<video width="500" height="281" controls="" preload="none">
					<source src="https://www.torproject.org/videos/Tor_Animation_en.mp4" type="video/mp4">
					<track label="English" kind="captions" src="https://www.torproject.org/videos/en.vtt" srclang="en" default="">
				</video>
			</div>
		</div>
		<div class="d-md-flex mb-2">
			<div id="firefoxImage"><img src="https://www.privacytools.io/assets/img/svg/3rd-party/firefox_browser.svg" alt="FireFox"></div>
			<p class="me-md-2">iOS users are a bit lucked out though, since some of Tor's traffic would route via your normal connection and not Tor due to <a href="https://github.com/OnionBrowser/OnionBrowser/wiki/Traffic-that-leaks-outside-of-Tor-due-to-iOS-limitations">restrictions</a> imposed by Apple. Mozilla's FireFox is thankfully here to save your privacy day, with its <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-ios">Enhanced Tracking Protection feature</a> that can identify and block trackers as well as cryptominers and fingerprinters. It has all the functions that Apple's safari browser has + a widget for iOS 14 users, allowing you to open new (private) tabs right from the home screen.</p>
		</div>
		<div class="d-md-flex mb-2">
			<div id="ytImage"><img src="/assets/articles/youtube.png" alt="Youtube"></div>
			<p class="ms-md-2">Other times, if you must use the service, you should try and look for an alternative front end. Want to watch a YouTube video? Try <a href="https://invidious.snopyta.org/">Invidious</a>, a self-hosted youtube frontend that doesn't give your IP to Google. On Android, I recommend <a href="https://newpipe.net/">NewPipe</a>, an alternative frontend to YouTube that does not use Google's Play Services. There is a tradeoff of not seeing comment replies, but you get privacy and functionality in return (one app for YouTube, SoundCloud and other services + audio only functionality).</p>
		</div>
		<div class="d-md-flex mb-2">
			<div id="fedoraImage"><img src="https://www.privacytools.io/assets/img/svg/3rd-party/fedora.svg" alt="Fedora"></div>
			<p class="me-md-2">Microsoft's latest version of Windows is considered to be a <a href="https://www.privacytools.io/operating-systems/#win10">privacy nightmare</a>, especially with Cortana enabled. For those of you who are developers, it might be worth it to look into a Linux distro + WINE, a program that allows you to run Windows (<code>exe</code>) programs on Linux devices. Although the most popular distro is Ubuntu, it's littered with bloatware that doesn't play nicely with lower end devices. <a href="https://getfedora.org/">Fedora</a>, on the other hand, comes with much less applications on first install.</p>
		</div>
		<div class="d-md-flex mb-2">
			<div id="giteaImage"><img src="https://s.gitea.com/img/logo.svg" alt="Gitea"></div>
			<p class="ms-md-2">With Microsoft's aquisition of GitHub, many developers feared what would happen to the freedom. This fear was justified with the takedown of youtube-dl by RIAA back in October 2020. <a href="https://gitea.com/">Gitea</a> is a lightweight open-source Git service written in Go. Feel free to either self-host or use the main instance.</p>
		</div>
		<div class="d-md-flex mb-2">
			<div id="messagingIcon"><img src="/assets/images/icons/messaging.png" alt="Messaging"></div>
			<p class="me-md-2">Communication is a bit trickier since it requires the cooporation of others, but feel free to share this article to them so that they could be using their minds too, just like yourself ;P. Once you both are willing to switch, it's as easy as facilitating your needs. Any user that currently uses <a href="https://www.eff.org/deeplinks/2016/10/where-whatsapp-went-wrong-effs-four-biggest-security-concerns">WhatsApp</a> has no limitation to switch to <a href="https://signal.org/">Signal</a>, an application with End-To-End encryption. Signal is also great for <a href="https://tosdr.org/#discord">Discord</a> users who either a) only use groups or b) hosts single-channel servers. For Discord servers with multiple channels, look into the <a href="https://matrix.org/">Matrix</a> platform. You can either join another user's home-server (such as "chat.privacytools.io", "nitro.chat" and others, but whatever you do, don't use Matrix's default home server), buy a pre-hosted server for $5 a month using EMS (yes, cheaper than Discord's Nitro subscription service) or self-host your own server. For SMS users, understand the risks posed (interception, redirection amongst others).</p>
		</div>
		<div class="d-md-flex mb-2">
			<div id="ptImage"><img src="https://raw.githubusercontent.com/privacytools/brand/master/shield/shield.svg" alt="PrivacyTools"></div>
			<p class="ms-md-2">Overall, there's probably something that would facilitate your needs. I definitely recommend checking <a href="https://www.privacytools.io/providers/">PrivacyTools</a>, a site which lists mainstream services alongside alternatives. When looking for alternatives, though, please don't automatically assume that decentralized or open-source means that it is secure. A good example of this is IRC, Personally, I watch videos on NewPipe, microblog on discord, chat on discord and use SMS for communicating with people unwilling to move to Signal. Wait, didn't I just disrecommend Discord and SMS?</p>
		</div>
	</li>
	<li>
		<b id="actionsLimit">Limit your actions</b>
		<p>I can't just abandon people cause they don't understand something; this isn't teenagers on prom after their spouse said no! So unfortunately, I'm stuck on platforms which aren't secure and have huge privacy issues. Schools all over the world are currently using corporate video streaming platforms for classes due to the COVID-19 pandemic, so unless we want to get Fs or your teacher is super cool, there's no way to pass high school and avoid giving Zoom your data. So how would you manage?</p>
		<p>Feel free to check an application's privacy setting. Personalization could be disabled, meaning you could appear to be a first time user as you travel the web. Giving precise location access often times isn't needed for things such as weather. Many other things about you are given away with a simple toggle-in app could shut it all down.</p>
		<blockquote>
			<img src="https://image.jimcdn.com/app/cms/image/transf/none/path/sf91b3285d9193eec/image/i9d401b7d547c33dd/version/1508251369/image.jpg" />
			<footer>Screenshot of Windows10Privacy</footer>
		</blockquote>
		<p>If you can't disable everything from the app itself, perhaps check if an external tool can modify the program or install a modified version of the program. Windows 10 has <a href="https://www.winprivacy.de/english-home/">Windows10Privacy</a>, an application which disables specific elements of Windows 10. <a href="https://vancedapp.com/">Youtube Vanced</a> removes all advertisements from videos, meaning Google won't show you the personalization.</p>
		<p>Sharing photos with friends can be super braggy, and I totally understand that sensation when you just want to randomly tell your friends that you're somewhere enjoying yourself, breaking all the COVID rules when they're stuck at home. So how about instead of not uploading images because you just love that attention, instead just put it through an EXIF stripper? Windows can <abbr title='Right Click on Image File -> "Properties" -> "Details" -> "Remove Properties and Personal Information" -> "Create a copy with all possible properties removed" -> "OK"'>remove a file's metadata</abbr> and iOS has a way to <abbr title='"Settings" -> "Privacy" -> "Location Services" -> "Camera" -> "Never"'>disable the capture</abbr> from pictures taken from the Camera app.</p>
		<p>Don't trust an app you have to install? Don't install it on your main operating system but instead, setup a contained environment titled a Virtual Machine. If anything infectious happens, the damage would be limited to the elements you give your virtual machine access to. It won't be able to escape, yet you are always in control.</p>
	</li>
</ol>

### Frequent Responses

- "But I have nothing to hide"           
  As I have pointed out in step 1 of my guide to privacy, Facebook-based applications can look at your credentials. You are basically giving away all your passwords to Microsoft. To make it more understandable in a human way, feel free to email maorninja@outlook.com with all your logins and passwords for all the services you use. Just like you wouldn't trust some random 17-year old on the internet, why are you trusting mega corporations that are known to sell your data?
- "My data is collected to help me"       
  I can see the push for this. Personally, I also find it useful to see where I took a picture for memory purposes. Yet, they do this so they can keep you as long on their app as possible, so that they can collect money off you. That's why they only show content tailored to your liking on social media; If you were a republican, you wouldn't be on a website where both republican and democratic comments are shown. The same thing applies vice versa, <s>although there wouldn't be random posts calling it fake news.</s> It's unhealthy too, since you aren't ever being open-minded. To clarify, watch this video from Vox:<br>
  {% include youtube.html url="wZSRxfHMr5s" %}
- "It's probably already too late"      
  It's never too late to start taking action against something. You can't get your data back if it was already sold, so the best way to get revenge is to not give it any new data.
- "I use a VPN so my data should be safe already"      
  VPNs are only useful for additional privacy from Internet Service Providers or public Wi-Fi network accross non-secure HTTP connections. However, in no way do they keep your browser habits anonymous or add security. If the website you're visiting supports HTTPS (which is most of the web), your non-DNS traffic is safe regardless if you use a VPS. By using a VPS, all you're doing is shifting who can see it; from your ISP to the VPN company, which has no way to verify their "no logging" policy. To explain this in a video form, feel free to watch Tom Scott's video:<br>
  {% include youtube.html url="WVDQEoe6ZWY" %}

As we install new apps on our phones or browse new websites, keep note that you are being watched. Whether it's your IP address, EXIF data, cookies and much more, corporations are on a hunt to make you their extra dollar. The way to solve this is if you stop feeding them. Take a stand against your privacy. Keep yourself from the exposure of others.

</div>

<div class="col-xxl-3 d-none d-xxl-block">

<div class="sticky-top">
	<h2>Table of Contents</h2>
	{{ TOC | markdownify }}
</div>

</div>

</div>