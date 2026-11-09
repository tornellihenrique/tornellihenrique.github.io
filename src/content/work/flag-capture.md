---
title: FlagCapture
tagline: Capture-the-flag multiplayer shooter on GAS, built in six days.
group: project
kind: Personal
period: '2025'
role: Solo project
stack: [UE 5.5, C++, Gameplay Ability System, Replication]
order: 12
cover: /media/flag-capture/match.jpg
preview: /media/flag-capture/match
media:
  - { type: clip, src: /media/flag-capture/match, caption: Match footage from the editor. The in-game UI is in Portuguese. }
links:
  - { label: Source on GitHub, href: 'https://github.com/tornellihenrique/FlagCapture' }
---
FlagCapture was a technical test for a job interview: a two-team capture-the-flag match, first to three captures, built on the Gameplay Ability System with proper multiplayer. I built it alone in six days in February 2025, with 36 hours logged, in Unreal Engine 5.5. The source is public on GitHub.

## Ability System

The Ability System Component lives on the PlayerState in Mixed replication mode, with two attribute sets, abilities bound to input and target data sent from the client. The abilities and effects themselves are Blueprint assets on top of that C++ layer.

## Damage

Damage goes through an execution calculation into a meta damage attribute. Headshots deal double damage, detected by tag and bone, and a match rule controls friendly fire.

## The flag

There is one flag. Any player picks it up by touching it, drops it on death, and captures it by carrying it into their own team's spawn area. The server decides every grab, drop and capture and sends the events to all clients.

## Match flow and teams

The match moves through phases from waiting for players to the next game, replicated with the push model, and ends at three captures. New players join the smaller team automatically. Each player has a state machine for playing, dead and spectating.

## Movement and camera

Sprint and aim are flags in the saved move, so they are predicted like the rest of the movement. The camera sits on a socket of the full-body mesh, with its animation driven by curves. The spectator camera has a dynamic field of view and keeps its target between lives, and a dead player can choose to respawn next to the teammate being watched.
