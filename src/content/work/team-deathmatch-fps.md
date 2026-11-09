---
title: Team Deathmatch FPS
tagline: Complete multiplayer FPS in Unreal Engine 5 and C++.
group: project
kind: Personal
period: '2025'
role: Solo project
stack: [UE 5.6, C++, Replication, Steam sessions, Animation]
order: 8
preview: /media/team-deathmatch/match
media:
  - { type: clip, src: /media/team-deathmatch/match, caption: A match with friends. }
  - { type: clip, src: /media/team-deathmatch/lobby, caption: 'Server browser, lobby, team selection and spawn.' }
links:
  - { label: Source on GitHub, href: 'https://github.com/tornellihenrique/TeamDeathmatchFPS' }
---
I built this project alone, from August to October 2025, to have one multiplayer FPS that is finished from end to end. It is a two-team deathmatch with tickets, playable over Steam on a listen server, in about 30,000 lines of C++ across the game and its plugins. The source is public on GitHub.

## Match and spawning

A match goes through six phases, with tickets, a time limit and options passed on the travel URL. Players spawn inside spawn areas drawn with splines, on a grid generated in the editor, and the game prefers points near a teammate. Each player has a state machine that drives its HUD, including a spectator state between lives.

## Sessions and lobby

I wrote the sessions plugin from scratch: hosting, searching, joining and Steam invites. The lobby shows the roster and ready state, lets the host pick the map and mode, and moves everyone into the match with seamless travel.

## Weapon animation

One animation node applies the weapon layers in order: offset, ADS, additives, sway and recoil. The values are computed on the game thread and evaluated on the animation worker. Camera and weapon recoil come from curves and data assets.

## Equipment and firing

A six-slot hotbar handles equipment, and weapon swaps replicate with cancellation and late-join support. Firing is local-first hitscan: the client shows the shot at once and the server traces it again. Weapons support fire modes, pellets and aiming from a socket. Grenades play a throw montage and explode with radial damage.

## Damage, kills and UI

Damage scales by bone. Kill credit is based on the damage each player dealt, with assists. The UI has a scoreboard, kill feed, score events, hit markers and a crosshair.

## Plugins and locomotion

As the game grew, I moved its gameplay into plugins, with 22 CoreRedirects to keep existing assets working. Locomotion is its own plugin, with turn-in-place for first person.

This project does not have lag compensation or bots. Those are in [BunnyHopping](/work/bunny-hopping/) and the [True FPS System](/work/true-fps-system/).
