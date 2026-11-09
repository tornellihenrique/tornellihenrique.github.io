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
BunnyHopping started as an experiment: recreating the air strafing from Source games on top of a modern Unreal Engine 5 movement stack. It grew into my largest personal project, a replicated shooter in first and third person with about 68,000 lines of C++ across the game and my own plugins, built on ALS-Refactored. It has a Battle mode with two teams and a scoreboard, and a Sandbox mode with an open world and origin rebasing.

## Air strafing and auto-hop

Each frame, the movement projects the velocity onto the direction the player wants to go and accelerates only the part that is missing to reach the maximum air speed. That is what lets a player gain speed by turning in the air. Auto-hop chains jumps without spending a single frame on the ground, so friction and the walking speed limit never apply.

## Vault

Seven vault types, on the ground and in the air, with Motion Warping and settings in data assets.

## Camera and aiming

The player can switch between first and third person. Aiming supports scopes, a dolly zoom and camera modifiers for focus and for taking damage.

## True first-person animation

The weapon is driven by an animation node that applies offset, ADS, additives, sway, recoil and wall collision on a full-body mesh. The ADS alignment is extracted from the pose. Character meshes are modular, built from parts in a preset, with visibility per view.

## Significance

Characters fall into five distance bands, scaled by the field of view, and each band changes tick rate, LOD, hitboxes and shadows.

## Weapons and ballistics

Firing is local-first, with ammo, reloading, fire modes, attachments on rails and melee. Bullets are simulated physically in sub-steps, with drag, wind, penetration, ricochet, simulation in water and actor pooling. I later cut the ballistics out into [BulletSystem](https://github.com/tornellihenrique/BulletSystem), my public code sample.

## Networking

The server validates hits with lag compensation, on top of time sync between client and server and replication managers.

## Match, interaction and UI

Battle has match phases, a player state machine, teams, a scoreboard, spectating and respawn. Sandbox has a spawn queue. Interaction picks the best target by score. There is a minimap, a fullscreen map and a loading screen.

## Tools

29 console variables, console commands, cheats and a recoil editor in Slate.
