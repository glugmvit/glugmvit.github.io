---
layout: post
title:  "Self Driving Cars: A marvel of technology"
author: shruti
categories: [ Deep Learning , Neural networks, Computer Vision ]
image: assets/images/self_driving/car1.jpg
featured: true
mathjax: true
excerpt: The self-driving car revolution is ramping up. But there are still a few obstacles standing in the way.
---
>It’s no secret that in just a few years, our cars will be able to take us wherever we want to while we relax. That could potentially enhance our quality of life considerably. It may sound fictional or imaginary, but the autonomous vehicle revolution is underway. The fact that self-driving cars have already started being produced is quite impressive. The future of transportation is bright, and self-driving cars are blazing the path. But amid all of the buzz you may be wondering, how do self-driving cars work?

![](/assets/images/self_driving/car2.jpeg)
## How Do Self-Driving Cars Work?
A self-driving car is capable of sensing its environment and navigating without human input. To accomplish this task, each vehicle is usually outfitted with a GPS unit, an inertial navigation system, and a range of sensors including laser rangefinders, radar, and video.  The vehicle uses positional information from the GPS and inertial navigation system to localize itself and sensor data to refine its position estimate as well as to build a three-dimensional image of its environment.

![](/assets/images/self_driving/car3.png)

Data from each sensor is filtered to remove noise and often fused with other data sources to augment the original image. How the vehicle subsequently uses this data to make navigation decisions is determined by its control system.

## Challenges faced by Indian self driving cars:

**1. Can We Get Past Road Testing?**

In assessing who’s ahead in the race to first commercially deploy AVs, companies, pundits and media have been using the number of hours each company spent on robocar testing on public roads as the yardstick.

This might be the wrong criterion. Phil Koopman, safety expert and professor at Carnegie Mellon University, stressed that to deploy AVs, the industry must “get past the notion that road testing is enough to ensure safety".The industry today is still trying to get vehicles to work properly on an everyday basis

![](/assets/images/self_driving/car4.jpg)
 **2. Creating (and maintaining) maps for self-driving cars is difficult work**

self-driving cars work by relying on a combination of detailed pre-made maps as well as sensors that “see” obstacles on the road in real time.
Both system are crucial and they work in tandem.

![](/assets/images/self_driving/car5.png)

 self-driving cars work by relying on a combination of detailed pre-made maps as well as sensors that “see” obstacles on the road in real time. Both systems are crucial and they work in tandem.

A company can test a self-driving car in any new city or town, its employees first manually drive the vehicles all over the streets and build a rich, detailed 3D-map of the area using the rotating Lidar camera on the car’s roof. The camera sends out laser pulses to gauge its surroundings, and the people of the mapping team then pore over the data to categorize different features such as intersections, driveways, or fire hydrants.

**3. We may have to design regulations before we know how safe self-driving cars really are**

![](/assets/images/self_driving/car6.jpg)

Another big obstacle for self-driving cars isn’t technical — it’s political. Before self-driving cars can hit the roads, regulators are going to have to approve them for use. One thing they’re going to want to ask is: How safe are these things, anyway?

And here’s the tricky part: We probably won’t know!

Drivers in the United States currently get into fatal accidents at a rate of about one for every 100 million miles driven. Ideally, we’d want self-driving cars to be at least that safe. But it’s unlikely we’ll be able to prove that any time soon.

**4. Cybersecurity will likely be an issue — though a surmountable one**

Another issue is cybersecurity. How do we make sure these cars can’t be hacked? As vehicles get smarter and more connected, there are more ways to get into them and disrupt what they’re doing.”

This shouldn’t be impossible to fix. Software companies have been dealing with this issue for a long time. It will likely require a culture change in the auto industry, which hasn’t traditionally worried much about cybersecurity issues.

![](/assets/images/self_driving/car8.jpg)


**2. ‘SAE Levels of Automation’ Can Lose Its Relevance**

The AV industry has become accustomed to discussing highly automated vehicles according to Levels of Automation defined by SAE.

In December, SAE International announced a new visual chart for use with its J3016 “Levels of Driving Automation” standard that defines six levels from no automation to full automation.

![](/assets/images/self_driving/car10.png)

SAE explained that the new chart offers more “consumer-friendly” terms and definitions for the levels, which are frequently cited and referred to by industry and media. “The infographic will help to eliminate confusion by providing clarity and using terms more commonly used by consumers"

**Technology in Detail**

![](/assets/images/self_driving/carc.jpg)

What technology makes self-driving cars possible? It’s really three technologies **sensors, connectivity, and software/control algorithms.** The automatic control, architecture, artificial intelligence, computer vision and many other technologies are integrated into the self-driving car, which is a product of the highly developed computer science, pattern recognition and intelligent control technology . Compared with manual driving, it is the key characteristic of a self-driving car that using automation equipment to replace the human driver. Based on this characteristic and functional requirement on driving and on-board equipment module, the core technology of self-driving are which are car navigation system, path planning, environment perception and car control.

![](/assets/images/self_driving/car16.jpg)


**Sensors**

![](/assets/images/self_driving/card.jpg)


Automotive sensors fall into two categories: active and passive sensors.
Active sensors send out energy in the form of a wave and look for objects based upon the information that comes back. One example is radar, which emits radio waves that are returned by reflective objects in the path of the beam.
Passive sensors simply take in information from the environment without emitting a wave, such as a camera.
sensors used in self driving cars are cameras,Lidar,ultrasonic senors,Radar etc.

![](/assets/images/self_driving/car14.png)


camera, radar and lidar sensors provide rich data about the car’s environment. However, much like the human brain processes visual data taken in by the eyes, an autonomous vehicle must be able to make sense of this constant flow of information.

Self-driving cars do this using a process called sensor fusion. The sensor inputs are fed into a high-performance, centralized AI computer, such as the NVIDIA DRIVE AGX platform, which combines the relevant portions of data for the car to make driving decisions.
So rather than rely just on one type of sensor data at specific moments, sensor fusion makes it possible to fuse various information from the sensor suite — such as shape, speed and distance — to ensure reliability.It also provides redundancy. When deciding to change lanes, receiving data from both camera and radar sensors before moving into the next lane greatly improves the safety of the maneuver, just as current blind-spot warnings serve as a backup for human drivers.The DRIVE AGX platform performs this process as the car drives, so it always has a complete, up-to-date picture of the surrounding environment. This means that unlike human drivers, autonomous vehicles don’t have blindspots and are always vigilant of the moving and changing world around them.



![](/assets/images/self_driving/car12.jpg)

**Connectivity**

![](/assets/images/self_driving/car13.jpg)

Connectivity means that users of a certain digital technology can connect easily with other users, other applications or even (other) enterprises. In the case of autonomous vehicles, it is essential for them to connect with other 'devices' in order to function most effectively. Autonomous vehicles are equipped with communication systems which allow them to communicate with other autonomous vehicles and roadside units to provide them, amongst other things, with information about road work or traffic congestion. In addition, scientists believe that the future will have computer programs that connect and manage each individual autonomous vehicle as it navigates through an intersection. This type of connectivity must replace traffic lights and stop signs.These types of characteristics drive and further develop the ability of autonomous vehicles to understand and cooperate with other products and services (such as intersection computer systems) in the autonomous vehicles market. This could lead to a network of autonomous vehicles all using the same network and information available on that network. Eventually, this can lead to more autonomous vehicles using the network because the information has been validated through the usage of other autonomous vehicles. Such movement  will strengthen the value of the network and is called network externalities.


**Software/control algorithms**

Finally, software/control algorithms are needed to reliably capture the data from sensors and connectivity and make decisions on steering, braking, speed, and route guidance.  By far the most complex part of self-driving cars, the decision-making of the algorithms, must be able to handle a multitude of simple and complex driving situations flawlessly, The software used to implement these algorithms must be robust and fault tolerant.

![](/assets/images/self_driving/car15.png)
