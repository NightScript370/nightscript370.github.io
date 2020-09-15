---
title: Graphic Design
description: All about the graphic design works I've done over the years
permalink: /graphic-design
carousel: true
---

{% assign symbolface = "" | split: ',' | push: "/assets/images/gd/CropLetterYoshi.jpg" | push: "Symbols could potentially replace pixels. Here's my face converted into a bunch of characters" %}
{% assign tyson = "" | split: ',' | push: "/assets/images/gd/tysonhesse.jfif" | push: "Book cover of my favorite animator, Tyson Hesse. The assignment specifically requested to use stock & low-budget assets, so I'm not sure if I'm allowed to be proud or not" %}
{% assign mspaint = "" | split: ',' | push: "/assets/images/gd/ns_doodle.jpg" | push: "This was a test project I made with the masking tool. Decided to come up with a logo design for a potential Microsoft Paint 3D remake (focusing on layers & 3D text)" %}
{% assign movie = "" | split: ',' | push: "/assets/images/gd/Maor_Movie.jpg" | push: "Watch the absolute horror that is a creature based on the old Sonic Movie design. Luckily, it's just a poster....for now" %}
{% assign smashshoe = "" | split: ',' | push: "/assets/images/gd/smash.jpg" | push: "Run with Smash Power with this Super Smash Bros. styled shoe" %}
{% assign splatoon = "" | split: ',' | push: "/assets/images/gd/splatoon.jpg" | push: "Slide on the ink of your paint" %}
{% assign harryshoe = "" | split: ',' | push: "/assets/images/gd/hp-poster.jpg" | push: "Use the latest Harry Potter shoes to fly where the broom takes you" %}
{% assign link = "" | split: ',' | push: "/assets/images/gd/link.jpg" | push: "Breath of the Wild advertisement, despite me never playing the game :P" %}

{% assign my_array = "" | split: ',' %}
{% assign my_array = my_array | push: symbolface %}
{% assign my_array = my_array | push: tyson %}
{% assign my_array = my_array | push: mspaint %}
{% assign my_array = my_array | push: movie %}
{% assign my_array = my_array | push: smashshoe %}
{% assign my_array = my_array | push: splatoon %}
{% assign my_array = my_array | push: harryshoe %}
{% assign my_array = my_array | push: link %}

# Graphic Design Works

During my 3rd year in High School (meaning I was in 11th grade), I have finally joined an art class that takes place digitally rather than a drawing class. This Graphic Design class knocked me off the high horse that I put myself on and taught me how to do things properly. While having previously used Paint.NET and bashed Photoshop for being "expensive trash", I have come to appreciate what it has done and all the tools it has provided me with.

Although I have since then moved from the class, I still value the work done through the class and appreciate what my teacher has done for me. This is most the work I have done last year

{% include carousel.html pages=my_array id="graphicDesign" %}