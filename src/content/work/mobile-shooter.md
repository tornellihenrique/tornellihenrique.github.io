---
title: Mobile shooter in Unity
tagline: Online mobile shooter inspired by Valorant, in Unity and C#.
group: game
kind: Professional
period: '2025'
role: Senior Gameplay Programmer, Nevith Games
stack: [Unity, C#, Animation, Mobile]
order: 5
preview: /media/mobile-shooter/weapons
media:
  - { type: clip, src: /media/mobile-shooter/weapons, caption: 'First-person weapon handling: rifle, reload and pistol. Recorded in a sandbox with prototype assets.' }
  - { type: clip, src: /media/mobile-shooter/abilities, caption: First-person abilities cast by hand. }
notice: The code and internal details are under NDA, so this page stays at the level of the work.
---
From August to December 2025, Nevith Games took on an outsourced project: an online mobile shooter in Unity, inspired by Valorant. I worked on it in C# while continuing on War Rock 2, first on two playable prototypes and then on the final game.

## First- and third-person character

I built the character controller and the animation in both views. In first person, the weapon motion comes from additive and procedural layers driven by animation curves, and I wrote an editor window that extracts those curves from animations. For third person I built a set of animation tools for the character. The two views render through a dual-mesh setup with a custom render feature, so the local player sees first-person arms while everyone else sees the full body.

## Skills

I built the skill system, where each skill commits in phases.

## Touch controls

I built the mobile touch controls.

## Audio and effects

I built the audio layer and pooled visual effects.

## Combat and modes

I built projectiles and impacts, a plant-and-defuse mode and death reactions by body region in the prototypes.

## The final game

The animation logic I wrote in the prototypes was carried into the final game. There I worked on the lobby, the loading screen and in-game UI integration, and on general gameplay fixes.
