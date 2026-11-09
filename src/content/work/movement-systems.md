---
title: Movement systems
tagline: Replicated traversal features, each one a self-contained component.
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
In 2023 I built a set of traversal features for a realistic shooter. Each one is a separate component with its own interfaces and data assets, so a character gets a feature by adding a component, without new code in the character class. All of them replicate, and I tested each one in network sessions. They later moved into production as self-contained plugins. The clips below were recorded in gray-box test maps.

## Vault

Traces check the obstacle before the vault starts, and Motion Warping fits the animation to the obstacle that is actually there, so the same animation works on obstacles of different sizes.

## Slide

The slide takes the slope under the character into account, with the behavior set in a data asset, and the player can keep aiming while sliding.

## Zipline

The line follows a spline, so it can curve, run downhill or go fully vertical. While the character hangs from it, the line oscillates and responds to the character's weight through a small simulation, and hand IK keeps both hands on the cable.

## Ladder

Ladders are modular and built along a spline, so one asset covers any height. Procedural IK places the hands and feet on the rungs during the climb. The character can also get on from the top, and a pipe variant uses the same system.

## Cover

Traces find cover around the player. The character follows corners, moves from one cover to the next and swaps shoulders. Leaning works both manually and automatically, driven by Control Rig.

## Swimming

Water volumes switch the character into swimming, a buoyancy helper keeps it at the surface, and transitions handle going under the water and coming back up.

## Skydive and parachute

Free fall and the parachute have their own animation instances. The parachute can open by itself, and the local player's movement uses velocity prediction so it stays smooth on the owning client.

## Grappling hook

The hook pulls the character with physics. It runs on a one-handed state machine, so the weapon stays usable during the pull.

## Carry, drag and takedown

These need two characters to play one animation together. The animations are synced between both actors, hand IK keeps the contact points in place, the target goes into a semi-ragdoll, and a procedural Sequencer camera frames the takedown.
