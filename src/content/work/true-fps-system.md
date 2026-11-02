---
title: True FPS System
tagline: Replicated UE5 first-person shooter plugin whose public demo led to my hiring.
kind: Open source
period: '2023'
role: Plugin developer
stack: [UE 5.1, C++, Animation, Replication]
order: 7
cover: /media/true-fps/cover.jpg
media:
  - { type: youtube, id: WImIDwkdnes, poster: /media/true-fps/cover.jpg, caption: Public demo. }
links:
  - { label: Watch on YouTube, href: 'https://www.youtube.com/watch?v=WImIDwkdnes' }
  - { label: Source on GitHub, href: 'https://github.com/tornellihenrique/TrueFPSSystemPlugin' }
---

## Problem

True first person uses one full-body mesh instead of separate arms. That keeps both views consistent, but the weapon handling has to stay sharp without a dedicated first-person animation set.

## Approach

- Worked with custom animation nodes from an open source project, used with the author's permission.
- Integrated them into a complete multiplayer base: character, weapons, attachments, bots and online sessions.
- Reworked recoil, with camera recoil and a recovery that respects the player's compensation.
- Reworked the animation layer in C++ and split configuration into data assets.
- Added a wall offset, so the weapon pulls back near walls and affects aiming and firing.

## Role

Plugin developer, learning the animation nodes end to end and building the framework on top of them.

## Result

The demo reached more than 20,000 views on YouTube, and it led to my hiring at Nevith Games.
