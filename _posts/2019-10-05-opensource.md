---
layout: post
categories: [ open source, git, GitHub ]
title: Open Source Contributions- What and How?
image: assets/images/opensource/1.png
author: srishti
featured: false
mathjax: false
excerpt: Basic workflow used for Open Source Contributions.
---
>**Open Source**, a word which would always be a favourite one for most of the leading technological organisations. There are two words- "Open" and "source". A very easy and possible interpretation could be something which is in the form of source as in "source code" available "openly" for everyone. But that is just another way of analysing it just on the basis of words. Let us see what it actually is all about.

## Open Source- What is it and why is it important?
Open source softwares are those in which the creator of the software allows to change, add or suggest modifications in the software, by providing access to the developers and users all over the world. This happens generally with the help of a version control system like git. The most popular company which provides hosting of such a version control system is GitHub, which is loved by most developers everywhere. Since the developers get access to these softwares, they can do all sorts of things with the code on their own system locally. They can suggest changes, add new features, find bugs in the softwares or even correct them! Thus, open source is a great place to experiment with what you have already learnt in a better way. 

You can also ask for improvements on your own code by putting it up as a repository on GitHub and show your work to your fellow developers. This will not only improve your project, but also would give you a sense of community where you can show your work and learn more everyday.

## A language, GitHub and Git - three essentials of Open Source
For any developer or programmer, it is easy to learn how to code. To make open source contributions, it is not important to be well versed with the concepts regarding a particular language and its frameworks. The basics help a beginner and an expert equally. Yes, the issues will be a little intimidating, but slowly and steadily you will be able to understand the code and will be okay with it.

Next comes git.Git is a command line tool which can be used as a service to upload your work on a community storage like GitHub. Git is a version control system, it keeps track of all the changes which you make in your programs and files and GitHub provides a hosting service, which can just keep these files safe and secure on a public platform. These are the two most important essentials for open source contributions. This is because of three major reasons : the public nature of GitHub(everyone puts up their code, ranging from beginners to experts), the easy workflow used and the sense of community and learning. Eager to learn more? Let us get started. 

## Basic Terminology on GitHub
 1. **Account or user**- a regular account like any other website where you can sign in using your details like your email-id, phone number and username along with a password.
 2. **Repository**- this is similar to a directory on your local system. You can put in your programs, files and folders in it so that your project will be safely stored on your account.
 3. **Commit(s)**- these are the changes which you make in a file of a project remotely. You make local changes and then push them to your repository with the help of a commit along with a message.
 4. **Fork**- Fork is a repository which gets stored on your account but is not yours originally. You fork it or in simple terms make an exact copy of it on your own account so that you can make changes in that copy before publishing it to the original one.
 5. **Clone**- Clone is a local directory created on your system on which you can make your changes and test them on your system.
 6. **Pull request**- after creating your changes you can send a request to the maintainer or the owner of the organisation. The owner or maintainer can review it and comment on your pull requests, and then the requests can be merged.
 7. **Issues**- GitHub also provides you with the feature of creating issues on a repository. You can add any issues which are hindering the project to work smoothly.

 The other features of GitHub includes projects, security and following system. But the above definitions pretty much include what helps you to make your first contribution. Remote means the repository is not on your system. It is on a "remote" server. Local refers to your own repository in your own system which you have created or cloned from another user.

##The Git commands
**Initialising git**
```
git init [project_name]

```
The above command helps to create a new local git repository. project_name is the name of the directory or the project.


 **For developers**
 1. The first step to your very first open source contribution is to fork your repository from the "master" repository. After forking the repository, you can clone the forked repository to work on it locally by using the following command:
 
 ```
git clone username@host:/path/to/repository

```

2. After this you can make any changes you want on the cloned repository and save them.  You can add a new feature, solve an issue or change any file.

3. After this you can add your changed files to your remote by using the following commands:

```
git add <filename>

```
