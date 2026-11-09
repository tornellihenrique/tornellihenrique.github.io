---
title: War Rock 2
tagline: Realistic multiplayer FPS in Unreal Engine 5.
group: game
kind: Professional
period: 2023 – present
role: Senior Gameplay Programmer, Nevith Games
stack: [Unreal Engine 5, C++, Replication, Animation, AI]
order: 1
cover: /media/war-rock-2/shot-3.jpg
preview: /media/war-rock-2/gameplay
notice: The code and internal details are under NDA, so this page stays at the level of the work. Images come from the official Steam page, and videos are public gameplay from YouTube.
media:
  - { type: youtube, id: EjQIjE7haF4, poster: /media/war-rock-2/video-gameplay.jpg, caption: Public gameplay introduction. }
  - { type: youtube, id: -hzRQbuX138, poster: /media/war-rock-2/video-map.jpg, caption: Public map showcase. }
  - { type: image, src: /media/war-rock-2/shot-3.jpg, caption: Official screenshot from the Steam page. }
  - { type: image, src: /media/war-rock-2/cover.jpg, caption: Official screenshot from the Steam page. }
links:
  - { label: War Rock 2 on Steam, href: 'https://store.steampowered.com/app/2883390' }
---
I joined Nevith Games in May 2023, first as a freelancer and, from August, on a long-term contract, working remotely with the team in South Korea. War Rock 2 is a realistic multiplayer FPS in Unreal Engine 5. In more than three years I have worked on almost every gameplay area of the game, first on the original codebase and, since 2026, on the new base the team is building the game on.

## Movement plugins

Traversal was my first job on the project. I built vault, slide, ziplines, ladders, swimming, cover, dodge, parachute and grappling hook, and the interactions between two characters: carrying and dragging a wounded teammate, taking a hostage and takedowns with a cinematic camera.

Each feature is its own plugin, with a component, a data asset, an animation layer and an interface, and none of them depends on the game module. A character gets a feature by adding the component, so new movement never adds code to the character class. Later I rebuilt the vault from scratch, and I extended the ladders so they also work on instanced meshes. Some of these features, recorded in gray-box test maps, are on the [movement systems](/work/movement-systems/) page.

## Enemy AI

From mid-2024 to early 2025 most of my time went into enemy AI for the original game. I built area-based enemy spawners, team senses, EQS queries and behavior tree tasks, an editor tool to configure enemy behavior, and the workflow level designers use to place enemies in a map. I also built a prototype for large crowds of enemies, first as a plugin and later on State Tree.

## Soldier AI

On the new base I built the soldier AI from scratch: the AI controller, all the behavior trees, with sub trees shared across the different AI types, and an editor utility that edits the AI data assets in one place. The soldiers use the same mantle, ladders and doors as the players.

## Locomotion and animation

I built the first- and third-person locomotion and animation setup for the new base. Around it I worked on stances, transitions, hit reactions, and the predicted equipment and reload flows. On the original game I had worked on the character and its animation in both views, including lighter Animation Blueprint layers, a separate setup per view mode and LODs for performance.

## Mantle, ladders and doors

For the new base I built mantling, ladders and doors for players and AI. Mantle and ladders run on the game's predicted movement and replication framework, so they follow the same client prediction and server correction as the rest of the character's movement.

## Everything else

Outside the systems I built, I worked on weapons and attachments, ballistics, ADS and recoil, melee, throwables with area damage, damage, knockdown and revive, ragdoll and spectator replication, behavior under high latency, match flow and game modes, the party and lobby, UI, camera and performance. I built usable class items such as a defibrillator, a repair tool, a syringe and explosives, and I worked on the engine upgrades to Unreal Engine 5.7 and 5.8.

War Rock 2 has a public Steam page, and the release date has not been announced. The systems I built are part of the current game, and I keep maintaining them. In 2025 I also worked in Unity on a [mobile shooter](/work/mobile-shooter/) for the same studio.
