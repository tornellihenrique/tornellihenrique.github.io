---
title: Infection
tagline: Co-op zombie FPS in Unreal Engine 5, built on GAS.
group: game
kind: Indie
period: '2026'
role: Co-founder, Tech Lead, Layoff Studios
stack: [UE 5.8, C++, Gameplay Ability System, Replication, Animation]
order: 4
preview: /media/infection/gameplay
media:
  - { type: clip, src: /media/infection/gameplay, caption: 'Firing, reloading and aiming against test enemies in a sandbox map.' }
  - { type: clip, src: /media/infection/workbench, caption: 'Equipment workbench: weapons and attachments edited with a live preview, then one click into a Play session with only that weapon and the chosen attachments.' }
links:
  - { label: Layoff Studios, href: 'https://www.layoffstudio.com/' }
---
Infection is a co-op zombie survival FPS in Unreal Engine 5.8, C++ and the Gameplay Ability System, from Layoff Studios. My partner and I planned every system together, from May to September 2026. I implemented the weapons, firing, damage, audio, first-person animation, throwables and the debug and editor tools. My partner implemented the UI, lobby and sessions, interactables, AI, health and downed state, and the equipment core.

It is the most advanced FPS I have worked on. The weapon cycle is complete: swap, aim, reload, hitscan and projectile fire, damage falloff, critical hits, hit zones and grenades that can be cooked.

## Predicted weapon swap

The player swaps weapons without waiting for the server, and can change the target weapon in the middle of an unequip. The equipment state replicates with a sequence number. The client keeps a predicted mirror of that state, every change goes through a single function, and the client reconciles with the server when the replicated state arrives.

## Firing

The local client drives the fire rate and sends the shot origin and directions to the server as quantized target data. The server resolves the shot, and damage only happens on the authority. Tracers and impacts are pooled cue notifies that play the same way on every machine, and projectiles integrate with drag and sub-steps. Spread is a single source shared by the shot and the crosshair, so what the player sees matches what is fired.

## Weapon feel

Aiming, field of view, sway and recoil sit on top of the [Procedural First Person Toolkit](/work/procedural-first-person-toolkit/), the plugin I built.

## Damage

All damage goes through one subsystem, whether it comes from bullets, explosives or thrown items. Eligibility and attribution go through the ability system, and the numbers come from the gameplay effect execution.

## Throwables

Each throwable replicates its initial velocity once. Every client then simulates the flight locally and only adopts the server position when the difference grows above 150 cm. Throws and other hand actions run as ability tasks.

## First- and third-person bodies

The first- and third-person bodies stay in sync, and each weapon brings its own linked animation layers. The movement and locomotion sit on top of ALS.

## Audio

I built the audio layer: a subsystem, an equipment audio component and animation notifies.

## Tools

I built in-game debug windows for these systems, alongside the Cog windows for abilities and input, plus data-driven debug actions. In the editor, an equipment workbench in Slate edits weapon, part and attachment definitions with a live preview and starts a quick test in Play with one click.
