---
layout: post
title:  "API Security Resources & setup"
author: ujwal
categories: [ cyber security ]
featured: false
image: assets/images/CyberSec/apisec.jpg
excerpt: Complete compilation of resources to learn API Pentesting, which consists of resources for absolute beginners to advanced levels.
---
_This blog was originally published at [ulogx.com](https://ulogx.com)_

API Pentesting stands as most emerging and crucial asset for evolving security requirements. In this article, You could expect Resources to setup API Pentest environment from scratch using Postman & Burp / OWASP Zap proxy, Relevant Key points to understand API and it's diversities, Common vulnerabilities in API and it's Impacts, methodologies to replicate attacks, OWASP Top 10 for API, 31-days of API Security based learning and hints, Relevant People to follow on twitter, Video based resources and Youtube channels to follow, Books and More. 

All the resources I post here aren't completely mine and credits goes to the creators/Authors and I am extremely thankful to the community for creating the resources.

The Best resource to get started ( It Personally helped me a lot ) Is by **Mr.Saumya prakash rana** -

[API Security Testing-1 ](https://medium.com/datadriveninvestor/api-security-testing-part-1-b0fc38228b93)

It discusses about 
* What is an API ?
* Types of APIs
* Complete Setup using Postman & Burp suite
* Way to import API Calls.
* Different layers of tests for APIs (Analyzing Access tokens, Refresh tokens, Input validation test, Authentication test)

Before we go ahead, You will need to understand how to use POSTMAN and how it works, along with how to create API calls if it is not provided in documentation. I would like you to go through the following playlist to get greater clarity before proceeding ahead.
[Postman Beginner tutorials](https://www.youtube.com/playlist?list=PLhW3qG5bs-L-oT0GenwPLcJAPD_SiFK3C)

At this point, Your environment is setup for API penetration testing and Interception will happen via Burp suite. To get more clarity on burp suite or Owasp Zap proxy you could follow below links.
* [Burp suite](https://portswigger.net/burp/documentation/desktop/getting-started)
* [OWASP ZAP Proxy](https://www.zaproxy.org)

The Article below contains advanced attack process-
[API Security Testing-2 ](https://medium.com/@saumyaprakashrana_51250/api-security-testing-part-2-67ae9fb9c12)

It discusses about
* XML external entity (XXE) injection
* Server side request forgery (SSRF)

By Now you would have basic gist of general security loopholes and methodologies. Before we proceed further, It is important that you watch the following videos and Understand the contents of it in depth to gain more clarity.
<a href="http://www.youtube.com/watch?feature=player_embedded&v=ijalD2NkRFg
" target="_blank"><img src="http://img.youtube.com/vi/ijalD2NkRFg/0.jpg" 
alt="API Security 101 by Sadako" width="360" height="300" border="10" /></a>


<a href="http://www.youtube.com/watch?feature=player_embedded&v=UT7-ZVawdzA
" target="_blank"><img src="http://img.youtube.com/vi/UT7-ZVawdzA/0.jpg" 
alt="Bad API, hAPI Hackers! by jr0ch17" width="360" height="300" border="10" /></a>


<a href="http://www.youtube.com/watch?feature=player_embedded&v=jBi3a-dXsM8
" target="_blank"><img src="http://img.youtube.com/vi/jBi3a-dXsM8/0.jpg" 
alt="Hidden in Plain Site: Disclosing Information via Your APIs - Peter Yaworski" width="360" height="300" border="10" /></a>

Courtesy - BugCrowd

<a href="http://www.youtube.com/watch?feature=player_embedded&v=43G_nSTdxLk
" target="_blank"><img src="http://img.youtube.com/vi/43G_nSTdxLk/0.jpg" 
alt="Automating API Penetration Testing using fuzzapi" width="360" height="300" border="10" /></a>

Courtesy - OWASP

By Now you have Environment setup, you have good knowledge of Basic and common attack vectors and you have pretty good idea about different approaches and methodologies used by experts. Let's look at the OWASP Top 10 List 2019. It Discusses about top 10 most critical risks for API and all relevant references to understand and analyze threats. 

### OWASP top 10 - 2019

Link to Official **PDF** [here](https://github.com/OWASP/API-Security/blob/master/2019/en/dist/owasp-api-security-top-10.pdf?utm_content=111213411&utm_medium=social&utm_source=twitter&hss_channel=tw-1283572250)

Definately take a look at the list and try to understand each of them.

This Discusses about - 
* Broken Object level authorization
* Broken User Authentication
* Excessive Data exposure
* Lack of resources and rate limiting
* Broken function level authorization
* Mass Assignment
* Security Misconfiguration
* Injection
* Improper Assets management 
* Insufficient Logging and Monitering

Before we proceed further, I would like you to read [this](https://medium.com/salt-security/https-medium-com-salt-security-api-protection-what-you-need-to-know-60b14c3f2858) and look back as part of recursive learning and analyze the methodology.
It talks of **"API Protection — What You Need To Know In The New API Economy"**

[This](https://apifriends.com/api-security/top-risks-to-api-security/amp/?__twitter_impression=true) Article also speaks of top risks of APIs and their usage, which you could optionally go through.

Let us now discuss 31 Days of API

## 31 Days of API Security

* [Checklist of 31 days of API Security](https://drive.google.com/open?id=1I-KwfmnRVSEIGbynVJWuqitcsBnM54v2)

Tips for 31 days of API Security 

* [Tips for API Sec](https://github.com/smodnix/31-days-of-API-Security-Tips)

It is highly reccomended to follow up with above two links to get sound knowledge and manageable experience to excel in field of API Security.

***

Before We move ahead, I would like you to read an Amazing article on "Most Critical API Vulnerability — BOLA (Broken Object Level Authorization)" from [Here](https://medium.com/@inonst/a-deep-dive-on-the-most-critical-api-vulnerability-bola-1342224ec3f2)

Definately go through
[Gold Resource to Understand via Live vulnerabilities from Popular platforms](https://apisecurity.io/full-archive/)

***

## Books for API Sec
* [Free Ebook on API Security](https://developer.okta.com/books/api-security/#table-of-contents)
* Oauth 2.0: Getting Started in Web-api Security Matthias Biehl
* Advanced API Security: OAuth 2.0 and Beyond ( Prabath Siriwardena )

***
### People to follow
* (https://twitter.com/InonShkedy?s=08)
* (https://twitter.com/HivarekarPranav)
* (https://twitter.com/CristiVlad25)

***

I would be open to any suggesions,Ideas and Improvements. You could comment below for suggesting any changes and modifications or anything to add further to the content. I am thankful to individual creators of each of the contents. Thank you for reading.

#### Happy Hacking :) 