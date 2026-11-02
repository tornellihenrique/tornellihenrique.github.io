---
title: Team Deathmatch FPS
tagline: Complete multiplayer FPS in Unreal Engine 5 and C++.
group: project
kind: Personal
period: '2025'
role: Solo project
stack: [UE 5.6, C++, Replication, Steam sessions, Animation]
order: 8
---

## Problem

A prototype shows a feature. A finished multiplayer game has to connect everything around it: finding a match, joining friends, the flow of a round and the end of the game.

## Approach

- Built a two-team match with tickets, six match phases, spawn areas and a spectator flow.
- Built a sessions plugin from scratch: hosting, search, join and Steam invites.
- Built the lobby with roster, ready state, map and mode selection, and seamless travel into the match.
- Built a procedural weapon animation pipeline with composable layers for offset, ADS, sway and recoil.
- Built a replicated equipment framework with cancellation and late-join support.
- Built damage-based kill credit with assists, plus scoreboard, kill feed and hit feedback.

## Role

Solo project, in about 30,000 lines of C++ across the game and its plugins.

## Result

A complete loop from the server browser to the final scoreboard, playable over Steam on a listen server.
