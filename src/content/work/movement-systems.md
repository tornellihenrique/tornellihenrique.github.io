---
title: Movement systems
tagline: Eight replicated traversal systems, each one a self-contained component.
group: project
kind: Prototype
period: '2023'
role: Gameplay Programmer
stack: [Unreal Engine 5, C++, Replication, Motion Warping, IK, Control Rig]
order: 11
cover: /media/movement/zipline.jpg
preview: /media/movement/zipline
notice: Prototype footage from gray-box test maps.
media:
  - { type: clip, src: /media/movement/vault, caption: Vault with trace validation and Motion Warping. }
  - { type: clip, src: /media/movement/slide, caption: Slope-aware slide with aiming. }
  - { type: clip, src: /media/movement/zipline, caption: Spline zipline with oscillation and hand IK. }
  - { type: clip, src: /media/movement/ladder, caption: Ladder with procedural rung IK for hands and feet. }
  - { type: clip, src: /media/movement/cover, caption: 'Cover with corners, leaning and shoulder swap.' }
  - { type: clip, src: /media/movement/swim, caption: Swimming with water volumes and buoyancy. }
  - { type: clip, src: /media/movement/parachute, caption: Skydive and parachute with velocity prediction. }
  - { type: clip, src: /media/movement/grappling-hook, caption: One-handed grappling hook with a physics pull. }
  - { type: clip, src: /media/movement/carry, caption: Carry and drag with synced animation. }
  - { type: clip, src: /media/movement/takedown, caption: Takedown with hand IK and semi-ragdoll. }
---

## Problem

Traversal touches movement, animation, camera and networking at once. Every new ability has to work with the others without piling more logic into the character class.

## Approach

- Each feature is a component with interfaces and data assets, so a character opts in without new code in the Pawn.
- **Vault and slide:** trace-based validation, Motion Warping and configurable slope behavior.
- **Zipline:** spline-based, with vertical lines, oscillation, a character weight simulation and hand IK.
- **Ladder:** procedural rung IK, modular spline ladders, climb from the top, and a pipe variant.
- **Cover:** trace detection, corners, manual and automatic leaning through Control Rig, and moves between covers.
- **Swim:** water volumes, a buoyancy helper and transitions over and under the surface.
- **Skydive and parachute:** dedicated animation instances, auto-open and velocity prediction for the local player.
- **Grappling hook:** physics pull with a one-handed state machine, so the weapon stays usable.
- **Carry, drag and takedown:** synced two-actor animation, hand IK, semi-ragdoll and a procedural Sequencer camera.

## Role

I designed and built all eight systems, with replication tested across network sessions.

## Result

The systems moved into production as self-contained plugins.
