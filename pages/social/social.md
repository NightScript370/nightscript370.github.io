---
title: Social
description: These are all the locations I frequently use.
permalink: /social
---

While I'm also on other platforms (Reddit, GBAtemp, GitLab and others), please use any of the above unless absolutely necessary.

{% assign github = "/social/github | GitHub | icons/github.svg | Feel free to review my code | Github is a code collaboration platform I use to host many of my projects, including this very website. I'm probably more of a self-contributor instead of contributing to other projects but I help out with managing the TWiLight Menu++ repository. | Check my contributions" | split: ' | ' %}
{% assign discord = "/social/discord | Discord | icons/discord.svg | Send FR's to NightScript#5597 | Primary place for communications (including private messages, need to share a server with me). Most of my time online is spent on this platform. | Join my server" | split: ' | ' %}

{% assign my_array = "" | split: ',' %}
{% assign my_array = my_array | push: github %}
{% assign my_array = my_array | push: discord %}

{% include socialGrid.html pages=my_array grid="3" %}
