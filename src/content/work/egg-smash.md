---
title: Egg Smash
tagline: Networked party game in Unreal Engine 5, from my indie studio.
kind: Indie
period: 2025 – present
role: Co-founder, Gameplay Programmer, Layoff Studios
stack: [UE 5.8, C++, Gameplay Ability System, Replication, Physics]
order: 5
cover: /media/egg-smash/cover.jpg
notice: Images come from the official Steam page.
media:
  - { type: image, src: /media/egg-smash/cover.jpg, caption: Official screenshot from the Steam page. }
  - { type: image, src: /media/egg-smash/shot-2.jpg, caption: Official screenshot from the Steam page. }
links:
  - { label: Egg Smash on Steam, href: 'https://store.steampowered.com/app/4601710' }
---

## Problem

A party game lives on chaos and quick rounds, but every client still has to agree on what happened. Physics props, match flow and eliminated players all need to stay in sync without getting in the way of the fun.

## Approach

- Designed and built the phase-driven match flow, adapting Lyra's game phase system.
- Built replicated physics props with Predictive Interpolation, freeze and release, and dormancy.
- Built an RTS-style spectator mode with a bounded flight area and server-validated cursor drops.
- Built a transformation roll with server-owned results and client reroll and lock requests.
- Wrote the architecture decision records and flow guides for the game mode framework.

## Role

Co-founder and gameplay programmer, responsible for the game mode framework and spectator mode, and working with the GAS capability layer alongside my partners.

## Result

The first prototype secured BRL 50,000 in public funding from Sampa Games. The game has a public Steam page and is listed as coming soon.
