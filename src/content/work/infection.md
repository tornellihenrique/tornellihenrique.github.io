---
title: Infection
tagline: Co-op zombie FPS in Unreal Engine 5, built on GAS.
group: game
kind: Indie
period: '2026'
role: Co-founder, Tech Lead, Layoff Studios
stack: [UE 5.8, C++, Gameplay Ability System, Replication, Animation]
order: 4
links:
  - { label: Layoff Studios, href: 'https://www.layoffstudio.com/' }
---

## Problem

A co-op shooter has to feel instant for each player while the server stays in charge of equipment, damage and everything thrown into the world.

## Approach

- Built a client-predicted equipment swap state machine, reconciled with replicated state.
- Built the firearm gameplay layer: aiming, reloading, hitscan and projectile firing, spread and recoil integration.
- Built server-authoritative throwables with client-side flight simulation.
- Built a centralized damage subsystem for bullets, explosives and thrown items.
- Built in-game debug tools and Slate editors for weapon definitions.

## Role

Co-founder and tech lead. I designed the architecture with my partner, and we planned the UI, lobby and session flow, health and downed flow, and the plugin layer together.

## Result

A complete weapon cycle on a plugin-based architecture, with hitscan and projectile firing, damage zones and grenades.
