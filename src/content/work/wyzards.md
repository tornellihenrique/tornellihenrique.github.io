---
title: wYzards
tagline: Multiplayer extraction RPG in Unreal Engine 5, built on GAS.
group: game
kind: Professional
period: '2026'
role: Gameplay Programmer, SL Games
stack: [Unreal Engine 5, C++, Gameplay Ability System, Replication]
order: 2
cover: /media/wyzards/shot-2.jpg
preview: /media/wyzards/trailer
notice: The code and internal details are under NDA, so this page stays at the level of the work. Images and video come from the official Steam page and trailer.
media:
  - { type: youtube, id: YQ-7ijl1fg8, poster: /media/wyzards/video-trailer.jpg, caption: Official reveal gameplay trailer. }
  - { type: image, src: /media/wyzards/shot-2.jpg, caption: Official screenshot from the Steam page. }
  - { type: image, src: /media/wyzards/shot-3.jpg, caption: Official screenshot from the Steam page. }
links:
  - { label: wYzards on Steam, href: 'https://store.steampowered.com/app/3536680' }
---
wYzards is a multiplayer extraction RPG in Unreal Engine 5 from SL Games, built heavily on the Gameplay Ability System. I worked there as a Gameplay Programmer on contract from April to October 2026, on the core gameplay systems, and designed and built several large systems on my own.

## Character and skill systems

My first months went into refactoring the character and skill systems, the base that every character and ability in the game runs on.

## Ability cast types

I planned and implemented a set of cast types for abilities, then migrated every existing ability in the game to them.

## World interaction

I refactored the world interaction system, covering eight interaction types.

## Combat rules

I unified the knockback logic and the collision rules for projectiles and area attacks, moved their settings into configuration tables, and made the character turn to face its target more responsively.

## Indicators and telegraphs

I built local ability indicators for the player and replicated attack telegraphs for monsters, so every player sees where an attack is going to land.

## Audio and fixes

I also worked on audio integration and on bug fixing, including a crash on player death.

wYzards has a public Steam page and is listed as coming soon.
