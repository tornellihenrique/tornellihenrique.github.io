---
title: First-person prototype
tagline: First-person feel on top of ALS, with replicated weapons and items.
group: project
kind: Prototype
period: '2023'
role: Gameplay Programmer
stack: [UE 5.2, C++, ALS, Replication]
order: 13
cover: /media/first-person-prototype/handling.jpg
preview: /media/first-person-prototype/handling
notice: Prototype footage from gray-box test maps.
media:
  - { type: clip, src: /media/first-person-prototype/handling, caption: Weapon handling in first person. }
---

## Problem

A locomotion system built for third person doesn't give first-person weapon handling on its own. Aiming, offsets and near-wall behavior all have to feel right, and everything still needs to replicate.

## Approach

- Built first-person presentation on top of ALS, with aim states, animation offsets and wall avoidance.
- Built replicated projectile weapons, grenades and throwables, with projectile piercing.
- Built a generic item layer, so weapons and equipment share hold, use, equip and drop behavior.
- Built attachments, manual reload, and the damage, health and death flow.

## Role

Gameplay programmer, working on first-person feel and the weapon and item layer.

## Result

A replicated first-person base, upgraded to UE 5.2 during development.
