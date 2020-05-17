---
layout: post
title:  "Web Rendering & Hunting UI Bugs"
author: ujwal
categories: [ cyber security ]
featured: false
image: assets/images/CyberSec/webrender.png
excerpt: Hunt from Home, Mozilla karnataka! UI Bug Hunting
---
_This blog was originally published at [ulogx.com](https://ulogx.com)_

Every developer would agree to the fact that, your code is Incomplete if you never encountered bugs. Irrespective of when it would've arised, the satisfaction you get after resolving them is unbeatable, as it helps you move towards "Perfection" or atleast help you get better and design an experience for your user.

It's important that we celebrate these bugs and embrace the positive change they bring in us eventually. In this work, we would focus on UI bugs and the methodology which you could use to do your part of contribution.
Before we go ahead, you'd require to understand what is [Rendering Engine](https://www.pathinteractive.com/blog/design-development/rendering-a-webpage-with-google-webmaster-tools/).

## What is rendering engine?

It takes HTML code and interprets it into what you see visually. For instance, a tag would be interpreted by the rendering engine as a set of instructions to make the text inside of the element <b>bold</b>

The rendering engine has a very important job as it displays what you see on your screen. It communicates with the networking layer of the browser to grab HTML code and other items passed from a remote server.

While Google, Opera and their variants use <b>blink</b> as their rendering engine which accounts 43% of usage, whilst Internet explorer uses <b>Trident</b>(25.8%>, Firefox and it's variants uses <b>Gecko</b>(18.22%), whereas Safari uses <b>Webkit</b>. [source](https://en.wikipedia.org/wiki/Browser_engine)


#### Here are steps below following which you could contribute:

join the Event on 16th May,2020 from 5:30 PM IST to 6:30 PM IST via this [link](https://meet.google.com/rrc-hfrr-imq)

![](https://raw.githubusercontent.com/ujwalpro/ujwalpro.github.io/master/assets/img/blog/MozillaKar%20HFH2.jpg)

* Initially you would have to decide the website in which you'll perform the test. [Here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQs8UGk9GkPX-GZIS3887EnQTymYJ-eHouGZn4MatN110ZRSykEeKutiDW04rAXaea-sIO_CYoZX2FS/pubhtml) is a list of websites where you can find bugs or else you can find it on any website of your choice.

* The next step is to create a fresh profile with no add-ons installed before you begin your testing. You can learn how to create a fresh profile [here](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectlocale=en-US&redirectslug=profile-manager-create-and-remove-firefox-profiles). It would be suggestive to use [Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) or [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) in order to carry out bug hunting.

* Let's get started with finding bugs, for that open the website of your choice from step 1 and start looking for a bug. What is the bug that we're looking for you may ask. It could be anything like a button that's not working, an image is not loading, a video doesn't play or a desktop page appears as a mobile page.

* If you come across a bug or an issue you need to test whether the same bug appears in another non-Firefox browser. If you do not encounter with the same problem in any other browser you've found a bug that can be reported. Well done!

* Lastly you need to report the bug by filling out this [form](https://webcompat.com/issues/new?label=type-hunt-from-home). You need to be elaborative about the bug you've discovered including all the necessary steps to demonstrate the bug. If you're having a [Github](https://github.com/) account you can report issues with that so that you can answer the follow-up questions just in case. Happy hunting!

This post was authored by [Ujwal Kumar](https://www.linkedin.com/in/ujwalkr/) and [Shresth Singh ](https://www.linkedin.com/in/shresth-singh-7aa062175/). For any queries you can also contact  [Ravi Jain](https://www.linkedin.com/in/ravijainpro/).
