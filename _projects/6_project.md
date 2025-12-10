---
layout: page
title: Territorial Wars — Basys3 FPGA Game
description: A two-player competitive territory-building game implemented on the Basys3 FPGA using VGA display, dual-joystick input, and multiple custom digital design modules.
img: /assets/img/territorial_wars_front.png
category: undergrad
importance: 6
---

**Territorial Wars** is a fully hardware-implemented two-player game built on the **Basys3 FPGA**.  
Players move around a 2D grid using analog joysticks and attempt to **capture the maximum territory** before time runs out. The game showcases a complete digital design pipeline: joystick input processing via **XADC**, movement logic via **FSMs**, VGA pixel rendering, scoring ALU, and game state controllers.

This project was developed as the Final Project **for Digital Logic Design (EE/CS 172L/130L)**.

---

## 🔗 Project Links

- **GitHub Repository:**  
  👉 https://github.com/muhammadali74/TerritorialWars_Basys3

- **Full Project Report (PDF):**  
  👉 Territorial Wars — Digital Logic Design Final Report (2022)  
  :contentReference[oaicite:1]{index=1}

---

## Game Summary

Two players start on a grid-based arena and navigate using analog joysticks.  
Each player fills grid blocks as they move. At the end of the timer:

- **The player with more captured blocks wins.**
- Collision rules and reclaim mechanics allow for dynamic, competitive gameplay.
- Additional **bonus blocks** appear mid-game that give extra score.

The core mechanics are implemented via hierarchical **Moore and Mealy FSMs**, real-time coordinate tracking, and synchronous VGA rendering.

---

## System Architecture

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="/assets/img/territorial-wars-blockdiagram.png" title="Block Diagram" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  High-level block diagram showing input, game logic block, and VGA output modules.
</div>

---

## Input Block — Dual Joystick Control

The game uses **two non-PMOD analog joysticks**, read using the Basys3's **XADC**.

Key features:

- XADC configured for **unipolar 0–1V** analog input  
- Voltage dividers used to scale raw joystick output from 3.3V to ~0.8V  
- 4 potentiometer inputs → captured via **4×1 multiplexer**
- XADC samples one axis at a time; rapid multiplexing gives smooth movement
- Output reduced to **4 MSBs** → values 0–15 representing joystick direction  
- Threshold-based logic determines:  
  `up`, `down`, `left`, `right` for both players

*(See Section 4 of the report for full circuit diagrams.)*

---

## Game Control & Movement FSM

Each player has four directional signals:  

- Player 1: `up1, down1, left1, right1`  
- Player 2: `up2, down2, left2, right2`  

A **Moore FSM** manages player movement states:

- `Idle`  
- `Increment` (move forward on axis)  
- `Decrement` (move backward on axis)

Movement is updated every clock cycle via a MUX-driven input selector.

---

## VGA Output Block

The VGA system displays the entire game board at **640×480 resolution**.

Modules:

- **VGA Controller** (25 MHz clock generation, H/V counters, sync pulse generation)  
- **Pixel Generator**  
  - Draws background, grid, region colors  
  - Player blocks rendered dynamically  
- **Color Encoding** (12-bit RGB → DAC → VGA)

---

## Game Logic — Grid FSM

Each grid block (625 total) is governed by a dedicated **Moore FSM**:

States:

- `Idle` — unclaimed  
- `Player A`  
- `Player B`  
- `Region A`  
- `Region B`  
- `Collision`  

Inputs: whether Player A or B is currently on that block.  
Outputs: Updated block ownership + scoring signals.

---

## ALU — Scoring, Bonus, Comparison

The ALU handles:

- Score increments when a player enters a neutral block  
- Score reclaiming when a player enters opponent’s region  
- Bonus block after 20 seconds (+10 points)  
- Final score comparison:
  - `00` → Draw  
  - `01` → Player 1 Wins  
  - `10` → Player 2 Wins  

Binary-to-BCD and BCD-to-HEX modules drive score display on VGA.

---

## Timer System

A 10 Hz clock divider produces a 1-second timer tick:

- Game duration: **60 seconds**  
- Timer decrements each second  
- Reaching 00 triggers game-end comparator  

---

## Screens & UI FSM

Screen transition FSM manages:

- Welcome Screen  
- Easy Mode  
- Torture Mode  
- End Screen (Win/Draw)

Controlled using FPGA push-buttons (C & D).

---

## Team Members

- Syed Muhammad Ali Naqvi  
- Syed Muhammad Ammar Ali Jaffri  
- Syed Muslim Hussain  
- Zaryan Ahmed Siddiqui  


---

## Full Documentation

Read the complete project report for diagrams, RTL schematics, FSM tables, and detailed explanations:

👉 *Territorial Wars — Digital Logic Design Final Report (PDF)*  
:contentReference[oaicite:2]{index=2}

