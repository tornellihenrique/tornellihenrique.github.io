---
title: Egg Smash
tagline: Networked party game in Unreal Engine 5, from my indie studio.
group: game
kind: Indie
period: 2025 – present
role: Co-founder, Tech Lead, Layoff Studios
stack: [UE 5.8, C++, Gameplay Ability System, Replication, Physics]
order: 3
cover: /media/egg-smash/cover.jpg
preview: /media/egg-smash/trailer
notice: Images and video come from the official Steam page and teaser.
media:
  - { type: youtube, id: IU_6KXvTviE, poster: /media/egg-smash/video-teaser.jpg, caption: Official teaser. }
  - { type: image, src: /media/egg-smash/cover.jpg, caption: Official screenshot from the Steam page. }
  - { type: image, src: /media/egg-smash/shot-2.jpg, caption: Official screenshot from the Steam page. }
links:
  - { label: Egg Smash on Steam, href: 'https://store.steampowered.com/app/4601710' }
  - { label: Layoff Studios, href: 'https://www.layoffstudio.com/' }
---
Egg Smash is a networked party game in Unreal Engine 5.8, C++ and the Gameplay Ability System, from Layoff Studios, the indie studio I co-founded. In the Omelet mode, eggs try to knock each other out. A defeated egg rolls a random transformation, and players who are out become spectators who can still drop props into the arena.

The first prototype was selected by the Sampa Games public funding call. We then restarted the project from scratch. In the new version I own the game mode framework, the base egg and the spectator mode. My partners work on the ability layer, the transformations, projectiles, knockback, targeting, camera and UI.

## Match flow in phases

The match runs as a sequence of phases, adapted from Lyra's game phase system. Phases live on the game state as abilities, and their list replicates to every client, which receives phase ends before phase starts. On top of that sits the match state: rounds, participants, spawning and objectives, replicated as one structure whose messages are handled in order. The core only offers these services. The rules of each mode live in Blueprint inside a game feature plugin, so a new mode does not change the framework.

In a three-machine test session in the editor, the loop ran three matches and 14 rounds, with 26 players turning into spectators and 37 transformations across all four forms.

## Transformation roll

A defeated egg rolls a transformation from tiers and can reroll or lock the result. The server owns the result. Reroll and lock requests from the client carry the id of the roll, so the server ignores any request that arrives for an older roll.

## Health and death

The health component and the death ability follow Lyra's approach, adapted to the game's rules.

## Physics props

Physics props have to look the same on every client. The props use Predictive Interpolation with stronger quantization, freeze on an identical transform on every machine, and go dormant when at rest. Physics runs asynchronously at 60 Hz.

## Spectator mode

Players who are out get an RTS-style camera inside a bounded flight area, with a queue of props to drop into the match. The client picks the drop point with its cursor, and the server runs the same targeting preset again to validate the point before spawning anything.

## Tools and documentation

I built the debugger and editor tools for the mode: placement helpers, visualizers and a graph view. I also wrote five of the six architecture decision records and five of the six implementation plans, plus the flow guides for the game mode framework.

Egg Smash has a public Steam page and is listed as coming soon.
