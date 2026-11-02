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

## Problem

A technical test with a short deadline: a two-team capture-the-flag match, first to three captures, on the Gameplay Ability System and with proper multiplayer.

## Approach

- Built the GAS layer: Ability System Component on the PlayerState, attribute sets, damage execution and ability grants.
- Built a phase-driven match loop with replicated timers, team captures and a spectator flow.
- Built predicted movement through custom saved-move flags for sprint and aim.
- Kept flag grab, drop and capture on the server, with events sent to every client.

## Role

Solo project, with 36 hours logged over six days.

## Result

A complete match loop from team selection to the third capture, with the source public on GitHub.
