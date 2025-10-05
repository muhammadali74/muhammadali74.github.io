---
layout: page
title: Bin Pick and Place | Pincher X 
description: a vision-assisted algorithm pipeline for bin-picking task using PincherX arm.
img: assets/img/PincherX.png
importance: 2
category: undergrad
giscus_comments: true
---

<div class="text-center mt-5">
    <a href="https://github.com/muhammadali74/PincherX_PickPlace_Package/tree/master" class="btn btn-primary btn-lg" target="_blank">
        View on Github
    </a>
</div>

PincherX_PickPlace_Package is a comprehensive pipeline designed to detect objects, pick them up, and place them in specified positions using a 4DOF Pincher X Manipulator arm. This package is entirely designed and coded from scratch without using any existing kinematics, motion planning, or control libraries or frameworks.


[📄 View Project Report](https://github.com/muhammadali74/PincherX_PickPlace_Package/blob/master/ProjectReport.pdf)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pincherX.jpg" title="PincherX Pick and Place Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Complete PincherX Pick and Place system overview showing the robot manipulator and vision setup
</div>


## Key Features

- **Object Detection and Pose Estimation**: Vision-based object identification using Intel depth camera
- **Custom Kinematics**: Forward and inverse kinematics implemented from scratch
- **Rate Control**: Smooth motion execution with trajectory following
- **Path Planning**: Path generation for collision-free movement
- **Bin Picking**: Vision-based bin-picking


## Technical Implementation

### Hardware Requirements
- **Matlab** - Primary development environment
- **Arbotix-M Software** - Robot controller interface
- **Intel Depth Camera** - For perception-based object identification
- **[Peter Corke's Interfacing Package](https://petercorke.com/matlab/interfacing-a-hobby-robot-arm-to-matlab/)** - Hardware communication


## Demonstration Videos

**System Tests and Performance:**
- [Pick Place Test 01](https://youtu.be/EYrFdB0laEY?feature=shared) - Initial functionality demonstration
- [Pick Place Test 02](https://youtu.be/jQurTOjDS5M?si=o-e3RmH0QStOSSTE) - Enhanced precision testing
- [Complete Pipeline Execution](https://youtube.com/shorts/RyvSCiVWmow?si=RFqXScAhPhXi5GSY) - Full autonomous operation

This project demonstrates the successful integration of computer vision, robotics kinematics, and control systems to achieve autonomous manipulation tasks without relying on external libraries or frameworks.