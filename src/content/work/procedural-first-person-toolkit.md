---
title: Procedural First Person Toolkit
tagline: Commercial UE5 C++ plugin that composes first-person item motion onto a single bone.
group: plugin
kind: Commercial
period: 2026 – present
role: Co-founder, Plugin Developer
stack: [UE 5.6 – 5.8, C++, Animation nodes, Slate, Replication]
order: 6
cover: /media/toolkit/cover.jpg
preview: /media/toolkit/gameplay
media:
  - { type: clip, src: /media/toolkit/gameplay, caption: 'Firing, reloading, aiming and swapping weapons in the demo project.' }
  - { type: clip, src: /media/toolkit/tools, caption: 'Editor tools in Play: the preset editor changes recoil, offsets and more live, and the motion inspector shows and mutes each motion component.' }
  - { type: youtube, id: QQMRwsrRWUQ, poster: /media/toolkit/cover.jpg, caption: Product showcase. }
links:
  - { label: Toolkit on Fab, href: 'https://www.fab.com/listings/fff00e95-8fec-4985-8da5-b4b9b7c45034' }
  - { label: Documentation, href: 'https://vinipi.gitbook.io/procedural-first-person-toolkit' }
---
The Procedural First Person Toolkit is a commercial Unreal Engine plugin for first-person item handling. I co-founded the product with a partner and wrote its core: the architecture, the runtime, the animation nodes and the editor tools. It went on sale on Fab in January 2026, supports Unreal Engine 5.6 to 5.8, and by November 2026 had sold more than 75 licenses, rated 4.5 out of 5 from 13 ratings.

The idea started earlier, in the project from my free live course, where an early version of the motion node is public in [FPSGame](https://github.com/tornellihenrique/FPSGame).

## One bone and a stack of motion

First-person games usually need a full set of animations for each weapon, which is slow to author and hard to change late in a project. In the Toolkit, the item sits on a single holder bone, and every motion is an operation on that bone. Components on the character and on the item each compute their part every frame: offset, aim, additives, aim bounce, locomotion, sway, recoil, blocking and leaning. An animation node gathers those operations and applies them stage by stage. The hands and forearms follow the holder through virtual bones, and hand IK brings the real arms to them.

Because the motion lives in components and data presets, a new item brings its own behavior with it. Adding a weapon does not touch the Animation Blueprint, and stages can be added from Blueprint or C++ without limit.

## Game thread and worker thread

Components compute their operations on the game thread, before the animation update. The node composes them later on the animation worker thread, where operations that depend on the current pose, like the aim point, read it directly. The same split lets a first-person arms mesh and a full-body mesh read the same components: the operations belong to the node, time advances once per frame, and one mesh is chosen as the pose source.

## Six animation nodes

- **Bone Rebase** copies a list of real bones to virtual bones in one node, with a pivot offset that comes from the item.
- **Procedural Motion** composes the operations on the holder, with an optional reference pose input.
- **Hand Offset** adjusts both hands and forearms per item, with curve masks.
- **Aim Offset** spreads camera pitch or lean along the spine and rebuilds the chain, with no blend space, and compensates mesh smoothing on simulated proxies.
- **Hand IK** solves both hands in a single pass, with target rotation and curve-driven blending.
- **Curve Blend** adds curves from another pose without bringing its bones.

## Aiming down sights

The aim point solver does not depend on an axis convention. It reads the pose during evaluation, so a reload animation still shows through while the player is aiming.

## Recoil and procedural locomotion

Recoil runs per axis, with attack, decay and oscillation, plus pitch and vertical progression and recoil on the controller. Walk, run, sprint and air cycles are generated from math, with jump and land, so items move with the character without dedicated locomotion animations.

## Presets

Settings live in preset data assets with inheritance, falling back to the class defaults. A family of weapons shares one base preset and overrides only what differs.

## Multiplayer

Only intent crosses the network: the lean direction, montage curve tags and locomotion events, replicated to everyone except the owner, who applies the change right away. Aim, sway, recoil, blocking and offsets do not replicate at all. Every machine computes them from state it already has, and simulated proxies smooth the replicated rotation for sway. The demo runs on a listen server and was tested on 5.6, 5.7 and 5.8.

## Editor tools

I built the editor tools in Slate: a setup report that validates the rig and the components, a rig setup tool, a motion inspector that shows and mutes each component live during Play, a preset workbench that changes values live, and a curve extractor. A `showdebug` view shows the same data in game.

The plugin source is a paid product, so it stays closed. The documentation is public.
