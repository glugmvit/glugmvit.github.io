---
layout: post
title:  "Google Dorks, Recon & OSINT"
author: ujwal
categories: [ cyber security ]
featured: false
image: assets/images/CyberSec/googledork.png
excerpt: Google dorks Usage - Basics to Advanced For Bug Bounty.
---
_This blog was originally published at [ulogx.com](https://ulogx.com)_

Google hacking, also named Google dorking, is a computer hacking technique that uses Google Search and other Google applications to find security holes in the configuration and computer code that websites use. 
These techniques are excellent in manual recon methodology to find crucial information about any organization, which might have been left out due to certain consequences.

> This method may be time consuming, but it has it's own set of results which might be extremely crucial to model threat vectors against any target being tested against.

Before I list out structural methodology for greater usage of **Google Dorking**, Here's a list of resources which you'd like to go through for greater clarity. Credits to the creators.

- [Google Hacking for Penetration Testing - Elaborate video](https://www.youtube.com/watch?v=cFOBUYaxdWI)

Here's the official link of Google Hacking Database (GHDB)
- [GHDB](https://www.exploit-db.com/google-hacking-database)

If you find a new unique way to Dork searches, you could get your own Dork published as well. Adds to your work and benifits the overall database.

# Formula of Google Dorks

Dorks : They are like search criteria in which a search engine returns results related to your dork.
The process can be a little time consuming, but the outcome will be worth it after learning on how to use dorks.

## Basic Formula of dork

"inurl:."domain"/"dorks" "

So you would normally understand it like this:
"inurl" = input URL

"domain" = your desired domain. For eg, .gov, or .edu or so on, Based On target specification.

"dorks" = The dork of your choice

Here is another example of that

You can use following words instead of inurl :

- intitle:
- inurl:
- intext:
- define:
- site:
- phonebook:
- maps:
- book:
- froogle:
- info:
- movie:
- weather:
- related:
- link:


The above list is just one of few examples of usage, You could deep dive into DB and use any dork of your choice and yield results accordingly.

# Mandatory List to check

It is important to understand that Google dorks aren't just limited to google for that matter, Dorks works on large variety of search engines such as Bing, Duck Duck Go, AOL and Yahoo.

One of main reasons, BB Hunters use Dorks is to locate third party vendors. Organizations and companies use sites such as Pastebin, Jira, Github, Trello, Coggle and more in their daily operations. There would be several instances where hard-coded credentials would be typically stored on a public platform as such.

A dork looking for a third party vendor may look like:

> site: < third party vendor > < Organization name >  


### A full Checklist of Third-party vendors goes below. 

- Codepad

> site: codepad.co "Organization name"

Codepad is an online compiler/Interpreter, you could find hard coded credentials here sometimes. You could look for critical Keys, Passwords, access keys, uuids, special URLs, etc.

- Gitlab

> inurl: gitlab "Organization name"

Gitlab, just like github is used to store source code. You could often find internal source code and other sensitive information here.

- Scribd

> site: scribd.com "Organization name"

Scribd generally contains books and E-books but you could sometimes expect internal files uploaded by employees that contains passwords or keys.

- Atlassian

> site: * .atlassian.net "Organization name"

This dork can be used to find confluence, Jira, and other products that can contain sensitive information.

- NPM

> site: npm.runkit.com "Organization name"

> site: npmjs.com "Organization name"

This can be used to find NodeJs source code used by the company.

- Libraries IO

> site: libraries.io "Organization name"

Libraries.io is a webservice that lists software development project dependancies and alerts developers to new versions of software libraries they use.

- Coggle

> site: coggle.it "Organization name"

Coggle is used to create MindMaps. You could find internal flow charts which may contain credentials or other crucial info.

- Papaly

> site: papaly.com "Organization name"

This site is used to save bookmarks and links. You could sometimes find internal links, documents and credentials.

- Trello

> site: trello.com "Organization name"

Trello is a web based kanban board. Can be used to find credentials and internal links of companies.

- Prezi

> site: prezi.com "Organization name"

This platform is used for presentations, could contain internal links and possible credentials.

- JSdeliver

> site: jsdeliver.net "Organization name"

Content division network (CDN) for NPM & Github.

- Pastebin

> site: pastebin.com "Organization name"

Could contain shared critical information. Hackers anonymously use this to share Information. Do look into other Bins too.

- Repl

> Site: repl.it "Organization name"

Repl is an online compiler. You could find hardcoded creds in user scripts. This contains really great information at times. Do not ignore it.

- Gitter

> site: gitter.im "Organization name"

Gitter is an open sourced messaging platform. You could sometimes get into private messages containing credentials, internal links, and other information.

**It would be great if Readers could come up with suggestions (In comments below) to add up to the list, also if anyone could think of automating the above search process. Alongside, Developers can make sure they don't forget to clear up creds after usage.**

### Thank you :>