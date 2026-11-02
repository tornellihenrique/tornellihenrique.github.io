---
title: War Rock 2
tagline: Realistic multiplayer FPS in Unreal Engine 5.
kind: Professional
period: 2023 – present
role: Senior Gameplay Programmer, Nevith Games
stack: [Unreal Engine 5, C++, Replication, Animation, AI]
order: 1
cover: /media/war-rock-2/shot-3.jpg
notice: The code and internal details are under NDA, so this page stays at the level of the work. Images come from the official Steam page.
media:
  - { type: image, src: /media/war-rock-2/shot-3.jpg, caption: Official screenshot from the Steam page. }
  - { type: image, src: /media/war-rock-2/cover.jpg, caption: Official screenshot from the Steam page. }
links:
  - { label: War Rock 2 on Steam, href: 'https://store.steampowered.com/app/2883390' }
---

## Problem

A realistic shooter depends on characters that move, aim and react convincingly in first and third person, for players and AI alike, while staying responsive under network latency.

## Approach

- Built movement systems as self-contained plugins, including vault, slide, ziplines, ladders, swimming, cover, dodge and grappling.
- Built the first- and third-person locomotion and animation setup for the game's new base.
- Built the soldier AI from scratch: AI controller, all behavior trees with sub trees shared across AI types, and an editor utility for configuring AI data assets.
- Built enemy spawners, team senses, EQS queries and behavior tree tasks, plus a State Tree prototype for large enemy crowds.
- Built mantling, ladders and door interactions for players and AI, integrated with the game's predicted movement and replication framework.

## Role

Senior Gameplay Programmer on contract, working remotely with a team in South Korea. Beyond the systems above, I worked on predicted equipment, reload and stance flows, weapons, ballistics, recoil, attachments, damage, knockdown and revive, ragdoll, spectator replication, match flow, lobby and UI, and on engine upgrades to UE 5.7 and 5.8.

In 2025 I also learned Unity on the job and built character control, a skill system, audio, touch controls and a plant-and-defuse mode for a mobile shooter inspired by Valorant.

## Result

More than three years across almost every gameplay area of the game. The systems I built are part of its current base, and I keep maintaining them. War Rock 2 has a public Steam page, with the release date still to be announced.
