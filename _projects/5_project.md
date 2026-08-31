---
layout: page
title: Basys3 Joystick Interfacing via XADC
description: Interfacing a non-PMOD joystick with the Basys3 FPGA using its built-in XADC analog-to-digital converter.
img: /assets/img/basys3-xadc-circuit.png
category: undergrad
importance: 5
---

This project demonstrates how to interface an **ordinary, non-PMOD joystick module** with the **Basys3 FPGA** by using its built-in **XADC (Analog-to-Digital Converter)**.  
Because the XADC can only read **0–1V** differential analog input, a voltage divider and careful signal conditioning were used to ensure safe operation.

The setup allows reading **X and Y axis potentiometer outputs** and switching between them using a **multiplexer**, enabling smooth real-time joystick control for FPGA applications such as games or robotics.

---

## 🔗 Project Links
- **GitHub Repository:** [Basys3-Joystick-Interfacing](https://github.com/muhammadali74/Basys3-Joystick-Interfacing)
- **Short Project Report (PDF):** [Interfacing Joystick using Basys3 XADC](https://github.com/muhammadali74/Basys3-Joystick-Interfacing/blob/main/Interfacing%20Joystick%20using%20Basys3%20XADC.pdf)

---

## Overview

The Basys3 FPGA contains a dual-12-bit XADC capable of sampling up to **1 MSPS**.  
This project uses:

- **Unipolar configuration** (negative differential pin grounded)  
- **Voltage divider** (15kΩ + 680Ω) to ensure joystick output stays < 1V  
- **Analog PMOD header (JXADC)** on Basys3  
- **Multiplexer** to switch between VRx and VRy inputs  
- **16-bit digital output** as joystick position signal for game logic

---

## Circuit Diagram

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="/assets/img/basys3-xadc-circuit.png" title="Circuit Diagram: Joystick → Voltage Divider → XADC Inputs" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
    Joystick  wired through voltage divider to Basys3 Analog PMOD.  
</div>

---

## How It Works

- The joystick’s two potentiometers output variable voltages for **X** and **Y** axes.  
- Each axis voltage is scaled down to < 1V via the voltage divider.  
- The Basys3 XADC reads one analog channel at a time.  
- A **multiplexer** switches between the two analog channels at high frequency.  
- The resulting 16-bit `data` signal is fed into FPGA logic (games, movement control, etc.)

---



<div class="caption">
    Reading analog joystick position and mapping it to FPGA logic.
</div>


