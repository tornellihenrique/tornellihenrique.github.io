---
title: True FPS System
tagline: Replicated UE5 first-person shooter plugin whose public demo led to my hiring.
group: plugin
kind: Open source
period: '2023'
role: Plugin developer
stack: [UE 5.1, C++, Animation, Replication]
order: 7
cover: /media/true-fps/cover.jpg
preview: /media/true-fps/motion
media:
  - { type: youtube, id: WImIDwkdnes, poster: /media/true-fps/cover.jpg, caption: Public demo. }
links:
  - { label: Watch on YouTube, href: 'https://www.youtube.com/watch?v=WImIDwkdnes' }
  - { label: Source on GitHub, href: 'https://github.com/tornellihenrique/TrueFPSSystemPlugin' }
---
True first person uses one full-body mesh instead of separate arms, which keeps the first- and third-person views consistent but leaves weapon handling to procedural animation. In 2023 I built a replicated shooter framework around that idea, as a plugin for Unreal Engine 5.1, and published it as open source under GPL-3.0.

## Starting point

The animation nodes came from an open source project, which I used with the author's permission. I learned them end to end and built the rest of the framework on top: the character, hitscan and projectile weapons, attachments, melee, bots, online sessions and menus, with Niagara effects for muzzle, shells and tracers.

## Recoil and wall offset

I reworked the recoil, with camera recoil and a recovery that respects how much the player compensated. I also added a wall offset: the weapon pulls back near walls, and that changes both aiming and firing.

## Animation layer in C++

I rewrote the animation instance in C++. Each part refreshes in its own function, the instance reads the character through an interface, state and settings are separated, and sway has its own curves. Configuration moved into data assets, and runtime state into structs.

## Multiplayer

The server is the authority for state and damage, while the owning player simulates each action right away. Other players see the full body, and the owner sees a mesh that copies its pose.

## Where it led

The public demo passed 20,000 views on YouTube, and the project led to my hiring at Nevith Games. Animation nodes I wrote myself are in the [Procedural First Person Toolkit](/work/procedural-first-person-toolkit/).
