---
title: Procedural First Person Toolkit
tagline: Commercial UE5 C++ plugin that composes first-person item motion onto a single bone.
group: plugin
kind: Commercial
period: 2026 – present
role: Co-founder, Plugin Developer
stack: [UE 5.6 – 5.8, C++, Animation nodes, Slate, Replication]
order: 6
cover: /media/toolkit/cover.jpg
preview: /media/toolkit/motion
media:
  - { type: youtube, id: QQMRwsrRWUQ, poster: /media/toolkit/cover.jpg, caption: Product showcase. }
links:
  - { label: Toolkit on Fab, href: 'https://www.fab.com/listings/fff00e95-8fec-4985-8da5-b4b9b7c45034' }
  - { label: Documentation, href: 'https://vinipi.gitbook.io/procedural-first-person-toolkit' }
---

## Problem

First-person games usually need a full animation set per weapon. That is slow to author, hard to keep consistent and expensive to change late in a project.

## Approach

- Motion is a stack of operations on one bone. Components compute the motion, and an animation node composes it.
- A new item brings its own motion through components and data presets, with no change to the Animation Blueprint.
- Six custom animation nodes cover bone rebasing, motion composition, hand offsets, aim offsets, hand IK and curve blending.
- The motion stack handles ADS, recoil, sway, blocking and procedural locomotion cycles.
- Only gameplay intent crosses the network. Each machine computes its own motion from state it already has.
- Slate tools cover rig setup, setup validation, a live motion inspector and a preset workbench.

## Role

Co-founder and core author. I designed the architecture and built the runtime, the animation nodes and the editor tools.

## Result

75+ licenses sold and rated 4.5/5 from 13 ratings on Fab (November 2026), with support for UE 5.6 to 5.8.
