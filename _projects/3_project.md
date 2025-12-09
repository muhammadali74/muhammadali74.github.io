---
layout: page
title: RISC-V Processor Design
description: 32-bit RISC-V processor with single-cycle and pipelined implementations in Verilog
img: assets/img/riscv_processor.jpg
importance: 3
category: undergrad
---

A 32-bit RISC-V processor implementation featuring both single-cycle and pipelined architectures in Verilog HDL. This project demonstrates fundamental CPU design principles and optimization techniques.

## Overview

This project implements two processor designs that showcase different architecture trade-offs:

- **Single-Cycle Processor**: Simple, predictable—one instruction per clock cycle
- **Pipelined Processor**: Advanced design with 5-stage pipeline for improved throughput

Both support the RV32I instruction set with full arithmetic, logical, memory, and control flow operations.

## Architecture

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/riscv_single_cycle.jpg" title="Single-Cycle Design" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/riscv_pipelined.jpg" title="Pipelined Design" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Single-cycle processor with straightforward datapath. Right: 5-stage pipeline with hazard handling.
</div>

### Single-Cycle Processor

**Design Philosophy**: Simplicity and predictability

- Executes one instruction per clock cycle
- All operations complete within the same cycle
- Minimal control logic, no complex hazard handling
- Ideal for learning and embedded systems

**Key Components:**
- Program Counter for instruction sequencing
- Instruction & Data Memory
- Control Unit for instruction decoding
- ALU supporting 15+ operations
- 32 × 32-bit Register File

### Pipelined Processor

**Design Philosophy**: Throughput optimization through parallelism

Stages:
1. **IF** - Instruction Fetch
2. **ID** - Decode & Register Read
3. **EX** - Execute & ALU
4. **MEM** - Memory Operations
5. **WB** - Write-back

**Advanced Features:**
- Data forwarding paths to reduce stalls
- Hazard detection for dependencies
- Proper branch handling

## Instruction Set Support

**Arithmetic**: ADD, ADDI, SUB  
**Logic**: AND, ANDI, OR, ORI, XOR, XORI  
**Shift**: SLL, SRL, SRA (and immediate variants)  
**Comparison**: SLT, SLTI, SLTU, SLTUI  
**Memory**: LW, SW  
**Control Flow**: BEQ, BNE, BLT, BGE, JAL, JALR  

## Performance Comparison

| Metric | Single-Cycle | Pipelined |
|--------|-------------|-----------|
| **CPI** | 1.0 | ~1.0 (with forwarding) |
| **Peak Throughput** | 1 instr/cycle | Up to 5 instr/cycle |
| **Complexity** | Simple | Complex |
| **Best For** | Learning, Embedded | High-performance |

## How to Run

### Prerequisites
- Verilog simulator (ModelSim, Vivado, or similar)
- Basic Verilog knowledge

### Simulation

```bash
# Single-Cycle Processor
cd single_cycle
vlog *.v
vsim tb_processor

# Pipelined Processor
cd pipelined
vlog *.v
vsim tb_processor
```

## Learning Value

This project covers essential computer architecture topics:

CPU datapath and control unit design  
Instruction-level parallelism through pipelining  
Hazard detection and resolution  
Verilog HDL for hardware description  
RISC-V ISA fundamentals  
Digital design simulation and verification  

## Repository

**Source**: [muhammadali74/RISCV-Verilog](https://github.com/muhammadali74/RISCV-Verilog)

## References

- [RISC-V ISA Specification](https://riscv.org/technical/specifications/)
- [Computer Architecture: A Quantitative Approach](https://www.elsevier.com/books/computer-architecture/hennessy/9780128119051)

---

*A hands-on exploration of processor design fundamentals*