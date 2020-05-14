---
layout: post
title:  "Secure Coding for Developers"
author: ujwal
categories: [ cyber security ]
featured: false
image: assets/images/CyberSec/securecoding.jpg
excerpt: Secure coding principles for Developers to reduce vulnerabilities before their inception. This post speaks of robust
---
_This blog was originally published at [ulogx.com](https://ulogx.com)_

While there are new Platforms, Applications and Softwares coming up every single day, Security is top-of-mind for most people working with technology. Over the years, there has been increasing awareness about data breaches, Cyber attacks and what not. Developers now don't just require to enhance their coding to obtain higher accuracy, optimization and speed, they need to work upon most crucial aspect, **Security**. It has become extremely important to have the "know-how" of Secure Coding. Through this post, I'll be covering principles by which you could enhance your secure coding skills to create more robust & Trust worthy software's in future. 

Here's a list of Rules which are highly reccommended while you code:

### 1) Input Validation of all Types of Inputs

For any Dynamic Website, it is obvious that there would be Incoming data. In the midst of it, it is important to "Not Trust any Data at all" irrespective of it's nature. The most prevalent security weakness of current applications is a failure to correctly process data that is received from external sources, particularly user input. You should always take a close look at any input to make sure it has been validated before it is used. Failing to analyze user input for possible attacks can result in data loss or exposure, elevation of privilege, or even execution of malicious code on other users' computers. Failing to validate user inputs leads to Vulnerabilities like SQL Injections, Command Injections, Cross Site scripting, etc. ( For people who don't know of these attacks, you don't need to be intimidated by the names, as developers you can easily avoid these )

**Why Do you need to validate the input?**
Suppose that you are building an interface to allow a user to create an account on your website. Our profile data includes a name, Phone number, and a nickname that we will display to everyone who visits the site. What if a new user creates a profile and enters a nickname that includes some SQL commands? For example - what if a malicious user enters something like the following excerpt:

```SQL
// This SQL Command will directly get executed in your backend if not validated

Ujwal'); DROP TABLE Users;--

```

If we blindly insert this value into a database, it could potentially alter the SQL statement to execute commands we absolutely don't want to run! This example is referred to as a "SQL Injection" attack, which is one of the many types of exploits that can potentially be done when you don't properly handle user input.

**When do you need to validate input?**
The answer is **always**. You must validate every input for your application. This Includes :
* Inputs from the user
* Data from the Database
* Data from the API
* URL Parameters
* Usage of data coming from a third party service.

Always use an "allow" list approach, which means you only accept "known good" input, instead of a deny list (where you specifically look for bad input) because it's impossible to think of a complete list of all potentially dangerous inputs. Do this work on the server side, not the client-side (or in addition to the client-side), to ensure that your defenses cannot be circumvented.

For Input validation based on frameworks, you could use:
* Regular expressions
* Whitelisting Vs Blacklisting (Former always wins)
* File Upload Validation
* Ensure that any input validation performed on the client is also performed on the server.

### 2) Output encoding Required always

Any output you present either visually or within a document should always be encoded and escaped. This can protect you in case something was missed in the sanitization pass, or the code accidentally generates something that can be used maliciously. This desigh principle will make sure that everything is displayed as output and not inadvertently interpreted as something that should be executed, which is another common attack technique that is referred to as "Cross-Site Scripting" (XSS). When you encode all outputs, it decreases the chances for attacker to find a potential vulnerability and exploit it, even if you missed out anything accidentally. Of course, Because mistakes happen by humans.

### 3) Use Parameterized Queries always.

**Never Ever Use Inline SQL Queries, Ever**
SQL databases are commonly used to store data. For example - your application could store user profile information in a database. You should never create inline SQL or other database queries in your code using raw user input and send it **directly** to the database. This behavior is a recipe for disaster, as we saw above.

For example - **do not** create code like the following inline SQL example:
```c#
// The given example takes input and sends it directly to Database within the same line without validating it.

string userName = Request.QueryString["username"]; // receive input from the user BEWARE!
...
string query = "SELECT *  FROM  [dbo].[users] WHERE userName = '" + userName + "'";

```

Here we concatenate text strings together to create the query, taking the input from the user and generating a dynamic SQL query to look up the user. Again, if a malicious user realized we were doing this, or just tried different input styles to see if there was a vulnerability, we could end up with a major disaster. Instead, use parameterized SQL statements or stored procedures such as this:

```SQL
// With this method you can invoke the procedure from your code safely, passing it the "userName" string without worrying about it being treated as part of the SQL statement.

-- Lookup a user
CREATE PROCEDURE sp_findUser
(
@UserName varchar(50)
)

SELECT *  FROM  [dbo].[users] WHERE userName = @UserName

```

Always try to used Stored procedures instead of inline statements. Even if an attacker tries to do something malicious, it will be regarded as a string variable and will not act upon, to create a backend disaster.

### 4) Always Store Secrets in Key Vault

Storing confidential items like **connection strings, API Keys, security tokens, certificates and passwords** in your code is just inviting someone to take them and use them for something other than what you intended them for. Even storing this sort of data in your web configuration is a bad idea - you are essentially allowing anyone who has access to the source code or web server access to your private data.
You could use something like **Azure Key Vault** for this purpose. It's a centralized cloud service for storing application secrets. Key Vault keeps your confidential data safe by keeping application secrets in a single central location and providing secure access, permissions control, and access logging.

Secrets are stored in individual vaults, each with their own configuration and security policies to control access. You can then get to your data through a REST API, or through a client SDK available for most languages.

### 5) Careful Usage of 3rd party resources & Codes

As developers, it is Inevitable to use third party Libraries, Codes and other Pre-work. The biggest issues coming with this is, this might lead to security issues despite "No Mistake" by us as developers, but the vulnerability may arise due to code written by someone else which we might not even be aware of. It is so critical that for years together, Usage of Vulnerable compontents has featured at #9 in the OWASP Vulnerability risk. It is important to verify for known vulnerabilities in the codes we re-use or plugins we use. This could be done by Looking for existing CVEs (Repo maintained by Mitre) or doing Static code analysis by multiple freely available tools for possible vulnerabilities. It is important to understand that it could always contain false positives and vulnerabilities might arise later on, so it is always suggested to remain updated and keep patching for fixes as new vulnerabilities arise with time. It is always reccomended to use least possible third party resources on which we don't have necessariy control on.

### 6) Do not Cache Sensitive page Data

pages containing possible sensitive informations (e.g. a password parameter) could be potentially cached. Even in secure SSL channels, sensitive data could be stored by intermediary proxies and SSL terminators. To prevent this, a Cache-Control header should be specified.
Prevent caching by adding "Cache Control: No-store" and "Pragma: no-cache" to the HTTP response header.

### 7) Sensitive Data should never be stored in URL parameters.

Take all necessary steps to not store any information in URL parameters. For Eg, Information like Account-Id, API Key, Passwords or other Metadata could lead to multiple vulnerabilities.

### 8) File Uploads to be dealt with utmost care

File uploads could be trivial and the vulnerabilities related to id could be really critical, can even lead to Remote code Execution (RCE) on your servers by attackers in case of an attack. 

When the file is uploaded to web, it's suggested to rename the file on storage. For example, the uploaded filename is test.JPG, rename it to JAI1287uaisdjhf.JPG with a random file name. The purpose of doing it to prevent the risks of direct file access and ambiguous filename to evalide the filter, such as test.jpg;.asp or /../../../../../test.jpg.

Ensure uploaded images are served with the correct content-type (e.g. image/jpeg, application/x-xpinstall)

The file path should not be able to specify by client side. It's decided by server side.

### 9) Sensitive data to be stored in Secure Cookies Only
 Important to use all the available security features of Cookies, Including "Secure" and "HTTP only" flags, to ensure that critical data doesn't get snooped or accessed by attackers. Often cookies carry session information and authentication information, it is important that the entire transmission takes place in a secure manner.
 
### 10) Use Authorization & Authentication features of your framework
 
 Do not opt to write these features on your own, It creates issues with Identity management, Authorization management and ensure that you have Single Sign on (SSO) and Multi factor Authentication enabled (MFA) for critical features.
 
### 11) Never Log Sensitive or PII Information
 
 All errors and Issues should be alerted upon and importantly, Error and Exceptional Handling should be robust, because these small loopholes with say, extreme values, could cause something like Application level DOS attacks.
 
### 12) Keep All Data in your database Encrypted with a strong encryption
 
 Usage of Strong standard Encryption like AES would be helpful to keep data safe even after a breach takes place. Never save your data in a raw format.
 
### 13) Keep all framework dependancies Up-to Date.
 
 Doing this helps in escaping newly arised vulnerabilities apart from other feature benifits.
 
### 14) Implement Security Headers to Prevent vulnerabilities
 
 You could refer to [GeekFlare article](https://geekflare.com/http-header-implementation/) for elaborate Information regarding the topic.
 
### 15) Https Only Always along with Industry standard Algorithms.
 
 ***
 
 Thank you for reading. Any Suggessions for Improvement are welcome.
 
 **For In-Depth Offline/Online Training of the topic or any other Information, please drop an email to : admin@ulogx.com**



