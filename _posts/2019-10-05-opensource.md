---
layout: post
categories: [ open source, git, gitHub ]
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

## The Git commands
**Initialising git**
```sh
    $ git init [PROJECT_NAME]
```
The above command helps to create a new local git repository. project_name is the name of the directory or the project.


 **Make your first pull request!**
 - The first step to your very first open source contribution is to fork your repository from the "master" repository. Fork can be made by using the GitHub GUI: 

 ![](/assets/images/opensource/fork.png) 

 After forking the repository, you can clone the forked repository to work on it locally by using the following command:

 
 ```sh
     $ git clone username@host:/path/to/repository
```

After this you can make any changes you want on the cloned repository and save them.  You can add a new feature, solve an issue or change any file.

- After this you can add your changed files to your remote by using the following commands:

```sh
    $ git add <FILENAME>
```
- After making the required changes and adding your files, you have to commit your changes so that it gets saved in your remote repository. The commit history helps you to keep a record of what you have changed. You can commit by using the following command :

```sh
    $ git commit –m “Message to go with the commit here”
```
- If you are an absolute beginner, you need to set your account and configure it with values like email, password and so on. You can do that by writing the following commands in terminal:

```sh
    $ git config --global user.email youremail@example.com
```

```sh 
    $ git config --global user.name your_username
```
Here the global flag tells that it works on any of the local repositories on your system.
For making changes to local, you can use the local keyword instead of global. Run the commit command again.

- You can create a new branch and push your changes to that branch. It is not mandatory to do that, but it would be easier for the organisation to test and merge your changes, that way. To create a new branch:

```sh
    $ git checkout -b <BRANCHNAME>
```
To switch from one branch to another use:

```sh
    $ git checkout <BRANCHNAME> 
```
- To check  the status of your repository changes, use :
```sh
    $ git status
```
- You can use the following to push your local commits to any branch of your remote repository:
```sh
    $ git push origin <BRANCHNAME>
```
- For creating a pull request, use the GitHub GUI and add your comments to specify your changes. 

<img src= "https://help.github.com/assets/images/help/pull_requests/pullrequest-send.png">

Voila, you just created your first pull request! After this your pull request will reach the organisation and might merge or comment on your changes.   
  
- To keep your fork updated and in sync with the original, "upstream" repository(from which you have created a fork), we add an upstream and sync our fork by using the following commands:   

```sh
    $ git remote add upstream <LINK_TO_UPSTREAM_REPOSITORY>
    $ git checkout master
    $ git fetch upstream
    $ git rebase upstream/master
    $ git push origin master
```   
By this, your repository can fetch those changes also which have been made after you have forked or created a pull request. 

- The above instructions are related to creating a pull request using command line interface. For creating a request using the GUI, refer [this](https://help.github.com/en/articles/creating-a-pull-request).

**Maintainers, Admins and Owners- Merge the requests**
- After the pull request has been created and reached the organisation, the maintainers or admins of the GitHub repository will review your changes and comment regarding improvements and suggestions. The maintainers will see your changes by going to the "Changed files" tab.

- They can test your changes by creating a new branch and pulling your fork in that branch. This is done as follows:

```sh
    $ git checkout -b <BRANCHNAME>
    $ git clone <link of your fork>
```

 - There is another way of doing it but for inactive pull requests. Every pull request has an id number. Fetch that id number and create a branch in the process and then checkout to that branch to test the changes.
 
 ```sh
     $ git fetch origin pull/<ID>/head:<BRANCHNAME>
     $ git checkout <BRANCHNAME>
``` 
 Now you can push this branch up.  

- You can merge the pull request in three ways.
  
  1. Merge pull request- Merges all commits to base branch. This keeps all commits made       separated.
     <img src= "https://help.github.com/assets/images/help/pull_requests/pullrequest-mergebutton.png">
  
  2. Squash and merge- Squashes all commits into one and then merges the pull request.
     <img src= "https://help.github.com/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png">

  3. Rebase and merge- Rebases all commits individually to base branch before merging.
     <img src= "https://help.github.com/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png">

- In the prompt message, you can provide your own merge message along with your comments(if any) and then press the "confirm merge" button. 

- After this, you can delete the branch which you used for testing the changes. This can be done locally and remotely. For delete the branch from your local use:   

```sh
    $ git branch -d BRANCHNAME
```  
 or   
 ```sh
     $ git branch -D BRANCHNAME
```
  To delete a remote branch use:  
```sh 
    $ git push <REMOTENAME> --delete <BRANCHNAME>
```

## The Beginner's space

Nervous? No need to be. You can start by contributing to some of the easy issues: 
- [Viking-Robotics](https://github.com/DVC-Viking-Robotics/webapp/issues/60)
- [Dart](https://github.com/dart-lang/site-www/issues/1976)
- [GLUG MVIT Issue 1](https://github.com/glugmvit/glugmvit.github.io/issues/36)
- [GLUG MVIT Issue 2](https://github.com/glugmvit/glugmvit.github.io/issues/42)

This is October, not just the month of Halloween, this is also the month of another festival which starts with 'H'- Hacktoberfest! You can contribute all October and get prizes for your open source contributions. 

You can start with the following repositories:
- [NIT-K Hacktobrfest](https://github.com/WebClub-NITK/Hacktoberfest-2k19/)
- [Hacktoberfest repository By Aswin](https://github.com/infiniteoverflow/Hacktoberfest_19)
- [Hactoberfest by Glug MVIT](https://github.com/glugmvit/Hacktoberfest)

Also, we have a curated list of Mozilla Projects [here](https://docs.google.com/document/d/1tFS-Yc0F91efiKwmYzGy9TrlGReXzFrVSMn39TGeC0c/edit).
