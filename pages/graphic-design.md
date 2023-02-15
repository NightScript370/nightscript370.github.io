---
title: Graphic Design
description: All about the graphic design works I've done over the years
carousel: true
permalink: /graphic-design
---

{% assign symbolface = "/assets/images/gd/CropLetterYoshi.jpg | Symbols could potentially replace pixels. Here's my face converted into a bunch of characters" | split: ' | ' %}
{% assign tyson = "/assets/images/gd/tysonhesse.jfif | Book cover of my favorite animator, Tyson Hesse. The assignment specifically requested to use stock & low-budget assets, so I'm not sure if I'm allowed to be proud or not" | split: ' | ' %}
{% assign mspaint = "/assets/images/gd/ns_doodle.jpg | This was a test project I made with the masking tool. Decided to come up with a logo design for a potential Microsoft Paint 3D remake (focusing on layers & 3D text)" | split: ' | ' %}
{% assign movie = "/assets/images/gd/Maor_Movie.jpg | Watch the absolute horror that is a creature based on the old Sonic Movie design. Luckily, it's just a poster....for now" | split: ' | ' %}
{% assign smashshoe = "/assets/images/gd/smash.jpg | Run with Smash Power with this Super Smash Bros. styled shoe" | split: ' | ' %}
{% assign splatoon = "/assets/images/gd/splatoon.jpg | Slide on the ink of your paint" | split: ' | ' %}
{% assign harryshoe = "/assets/images/gd/hp-poster.jpg | Use the latest Harry Potter shoes to fly where the broom takes you" | split: ' | ' %}
{% assign link = "/assets/images/gd/link.jpg | Breath of the Wild advertisement, despite me never playing the game :P" | split: ' | ' %}

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

My 3<sup>rd</sup> year of High School had me leave the pencil drawings and enter the commercialized world of Photoshop. Everyone in the Graphic Design industry seemed to appreciate it, yet I never understood why; after all, Paint.NET worked great for me. However, as I started using it more, I understood the importance of non-rasterization; masking, vectors and much more. I have yet to find another editor to do that, so I switched over to Photoshop CS6 as my default editor, to the point where I don't even want to run it on Wine; I have Windows just for this. (Please Adobe, make a standard linux version kthx)

The gallery below are all the abstract arts that we've done in the Graphic Design class. Although I have done much more in my later years, those are more private due to revealing personal data.

{% include carousel.html pages=my_array id="graphicDesign" %}