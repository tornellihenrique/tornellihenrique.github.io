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
A grid inventory where items have a size and can be rotated, built alone in C++ in 2022. The source is public on GitHub.

## Items and the grid

Items are replicated objects owned by an inventory container. The container keeps a 2D occupancy grid, and rotating an item swaps its width and height. The server validates every placement, so a client can never put an item where it does not fit.

## UI

The inventory does not depend on one UI. An interaction component sits between the inventory and the screen, so any widget can act as the interface. The sample UI is a simple UMG inventory with drag and drop, a preview while hovering and feedback for invalid placements.
