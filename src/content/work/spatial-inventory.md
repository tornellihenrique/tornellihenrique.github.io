---
title: Spatial Inventory
tagline: Replicated grid inventory in Unreal Engine 5 and C++.
group: project
kind: Personal
period: '2022'
role: Solo project
stack: [Unreal Engine 5, C++, Replication, UMG]
order: 10
cover: /media/spatial-inventory/cover.jpg
preview: /media/spatial-inventory/grid
media:
  - { type: youtube, id: vCpvA-fIlDM, poster: /media/spatial-inventory/cover.jpg, caption: Replicated inventory showcase. }
links:
  - { label: Watch on YouTube, href: 'https://www.youtube.com/watch?v=vCpvA-fIlDM' }
  - { label: Source on GitHub, href: 'https://github.com/tornellihenrique/spatial-inventory-basic' }
---

## Problem

A spatial inventory has to keep placement rules on the server while dragging and rotating items still feels immediate. It also shouldn't tie the game to one specific UI.

## Approach

- Built items as replicated UObjects owned by an inventory container.
- Built a 2D occupancy grid where rotation swaps width and height, with placement validated on the server.
- Built a component-based interaction layer, so any widget can act as the UI.
- Built a simple UMG inventory with drag and drop, hover preview and invalid placement feedback.

## Role

Solo project, in C++.

## Result

A reusable replicated inventory, with the source public on GitHub.
