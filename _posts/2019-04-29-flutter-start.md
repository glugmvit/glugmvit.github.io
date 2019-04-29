---
layout: post
title: Building your First Flutter App
excerpt: Article focused on cross-platform app development on Google's Flutter Framework
image: assets/images/start_flutter/flutter_head.png
author: sunchit
categories: [Flutter,App Dev]
---

# Introduction to Flutter

Flutter is a cross-platform mobile app development framework by Google and is an alternative to traditional Android or iOS development. It’s faster than traditional methods of native development in additon to running on both platforms at once without any major changes.

# Let’s begin

This article will dive into a Flutter project and the files it contains as well as building and explaining how the basic app works.

### Prerequisites:
- [IntelliJ IDEA (with an emulator set up)](https://www.jetbrains.com/idea/)
- [Flutter SDK](https://flutter.dev/docs/get-started/install)
- [Basic Dart Knowledge](https://www.dartlang.org/guides/language/language-tour)

## Step 1 : Creating a New Flutter Project 

Open IntelliJ IDEA and click "Create New Project"
If you are already in project, click File -> New -> Project

![](/assets/images/start_flutter/first.png)

Here we want to create a Flutter Application, which is a complete app runnable on iOS/Android. The other options, Plugins and Packages are components written for enhancing and adding functionality to a Flutter app or making common tasks easier. For example, barcode scanners or wrappers for services like Firebase.

All packages are listed on [pub.dartlang.org](https://pub.dartlang.org/).
_Click Next to Continue_.

Moving On...

Choose Flutter from the side menu and make sure your SDK Path is correct and refers to the location where you downloaded the Flutter SDK

![](/assets/images/start_flutter/second.png)

_Click Next to Continue_.

Give your project a name. For now, I’ll name it hello_world. If there is a problem with SDK path, that might mean Flutter is not correctly installed.

![](/assets/images/start_flutter/third.png)

_Press Finish to build the project_.

## Step 2 : Exploring the Project

You’re probably seeing some code on the right and files on the left. The code might seem overhwhelming if you’re new to mobile development but it becomes easier as you understand it.

We’ll come back to the code in a while, let’s understand the files in the project before that.

![](/assets/images/start_flutter/fourth.png)

Simply put, to make a basic app, you only need to focus on the **lib** directory and the **pubspec.yaml** file.

The **lib** directory holds all the main dart code used to run your app where as the “pubspec.yaml” file contains all of the packages you’ve imported. (For Android Developers: This is equivalent to your gradle files where you add in dependencies)

