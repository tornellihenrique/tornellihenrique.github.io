---
title: BunnyHopping
tagline: Source-style air strafing inside a replicated first- and third-person FPS.
group: project
kind: Personal
period: 2024 – 2025
role: Solo project
stack: [Unreal Engine 5, C++, Replication, Motion Warping, Slate]
order: 9
cover: /media/bunny-hopping/air-strafing.jpg
preview: /media/bunny-hopping/air-strafing
media:
  - { type: clip, src: /media/bunny-hopping/air-strafing, caption: Air strafing and auto-hop. The HUD shows the speed building up. }
  - { type: clip, src: /media/bunny-hopping/ballistics, caption: Ballistics debug view from the public BulletSystem sample. }
links:
  - { label: BulletSystem on GitHub, href: 'https://github.com/tornellihenrique/BulletSystem' }
---

## Problem

Air strafing looks simple, but it depends on details of how velocity is projected and accelerated each frame. The goal was to recreate that feel on a modern UE5 movement stack, then grow it into a complete FPS.

## Approach

- Built Source-style air strafing and auto-hop on top of the ALS-Refactored movement component.
- Built a seven-type vault system with Motion Warping and data-driven settings.
- Built a procedural weapon animation node with offset, ADS, additives, sway, recoil and collision.
- Built physically simulated ballistics with drag, wind, penetration, ricochet, water and actor pooling.
- Built lag-compensated hit validation, team matches, a significance system and a Slate recoil editor.

## Role

Solo project, built on top of ALS-Refactored and third-party plugins for specific features.

## Result

About 68,000 lines of C++ across the game and my own plugins, with Battle and Sandbox modes. The ballistics were later cut out into BulletSystem, my public code sample.
