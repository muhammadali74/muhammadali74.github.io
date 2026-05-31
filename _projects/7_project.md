---
layout: page
title: CAS13b crRNA Discovery & Machine Learning Pipeline for Dengue Virus
description: An end-to-end computational pipeline for designing high-efficacy CRISPR-Cas13b guide RNAs targeting all four Dengue virus serotypes using genome analysis, biochemical optimization, and machine learning.
img: /assets/img/cas13b-banner.png
category: research
importance: 7
---

This research project introduces a **complete computational framework** for designing optimized **CRISPR-Cas13b guide RNAs (crRNAs)** capable of targeting all four **Dengue Virus (DENV)** serotypes.  
The pipeline combines **large-scale genomic analysis**, **Cas13b-specific biochemical rules**, and **machine learning–based efficiency prediction** to identify high-confidence antiviral guides suitable for experimental validation.

---

## Project Motivation

Dengue infects nearly 400 million people annually, yet therapeutic options remain extremely limited.  
Cas13b, an RNA-targeting CRISPR system, has shown strong antiviral potential—but **guide RNA design for Cas13b is not well established**, and there is **no standard computational tool** focused on viral inhibition.

This project addresses that gap by building a **full in-silico crRNA discovery pipeline**, from viral genome dataset processing to ML-driven ranking of the best candidates.

---

## Pipeline Summary

The workflow consists of five major stages:

### **1. Large-Scale Viral Genome Processing**
- 38,057 dengue genomes collected from BV-BRC  
- Cleaned, filtered, and categorized into DENV1–DENV4  
- All unique 30-nt candidate spacers extracted using a disk-backed system  

### **2. Conservation Analysis Across Serotypes**
- Spacer-level conservation computed per serotype  
- Highly conserved candidates prioritized for broad-spectrum activity  
- ~1,700 top candidates retained  

### **3. Cas13b Biochemical Optimization**
Implements experimentally validated sequence rules:  
- Rewards **G-rich starts (positions 1–2)**  
- Penalizes **C enrichment**, especially near the 5’ end  
- Allows up to three beneficial mutations to improve potency  

**Result:**  
98% of spacers improved; average Cas13b potency boost of +47 points.

### **4. Machine Learning Efficiency Prediction**
A 157-feature ML model (XGBoost) trained on experimentally validated Cas13b guides.

Features include:
- One-hot sequence encodings  
- GC content & homopolymers  
- Di/tri-nucleotide patterns  
- Positional C/G penalties  
- Conservation features  

### **5. Final Aggregation & Ranking**
Guides scored on:
- Predicted efficiency  
- Serotype conservation  
- Biochemical optimization gains  

A final set of **high-efficacy, pan-serotype crRNAs** is produced.

---

## Key Insights From the Study

- Cytosine-rich sequences (especially **CC**) significantly reduce Cas13b activity  
- Beneficial G insertions cluster in the **first two positions**  
- High conservation does not always imply high predicted efficiency  
- Foundation model embeddings (RNA-FM, NT) perform worse than classical ML in low-data regimes  

---

## Project Report

Full research paper, 
**[CAS13b Pipeline Research Report (PDF)](https://www.biorxiv.org/content/10.64898/2025.12.31.697158v2.full.pdf)**  


---

## 🔗 GitHub Repository

**https://github.com/muhammadali74/CAS13b_pipeline**

---

## Future Directions

- Expand dataset with large Cas13b screen experiments  
- Integrate RNA secondary structure and target accessibility  
- Add human transcriptome off-target filtering  
- Deploy a web app for Cas13b guide design  

---
