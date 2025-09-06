# Lab 4 – Registration → Profile Cards (HTML/CSS + JS)

## 📌 Overview
This project is part of **NUST WAD621S – Lab 4**.  
It implements a **student registration form** with validation, which dynamically creates **profile cards** and updates a **summary table**.

The system ensures accessibility, inline error handling, and synchronized updates between the cards and table.

---

## 🎯 Features
- Accessible **registration form** with:
  - First/Last Name
  - Email
  - Programme
  - Year of Study (radio buttons)
  - Interests (comma-separated)
  - Photo URL
- **Validation**
  - Required fields
  - Email format check
  - Year selection required
  - Inline error messages + `aria-live` feedback
- **Dynamic DOM updates**
  - Profile card created for each student
  - Summary table row created in sync
- **Remove Action**
  - Deleting a card also deletes its corresponding table row
- **UI Styling**
  - Gradient background 🌈
  - Clean responsive layout
  - White panels with shadows for readability

---

## 🗂 File Structure
