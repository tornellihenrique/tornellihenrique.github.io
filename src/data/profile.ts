export const profile = {
  name: 'Henrique Tornelli',
  fullName: 'Henrique Tornelli Duarte',
  role: 'Senior Gameplay Programmer',
  stack: ['Unreal Engine 5', 'Unity', 'C++', 'C#'],
  description:
    'Senior gameplay programmer in Unreal Engine 5, Unity, C++ and C#, focused on procedural animation, character movement, replication and GAS.',
  email: 'tornelli.henrique@gmail.com',
  cv: '/Henrique_Tornelli_Duarte_CV.pdf',
  linkedin: 'https://www.linkedin.com/in/henrique-tornelli',
  github: 'https://github.com/tornellihenrique',
  studio: 'https://www.layoffstudio.com/',
  location: 'Brazil',
  languages: 'English (full professional), Portuguese (native)',
};

export const facts = [
  { text: '3+ years of professional Unreal Engine C++' },
  { text: 'Co-founder of Layoff Studios', href: profile.studio },
  { text: 'Egg Smash selected by Sampa Games', href: '/work/egg-smash/' },
];

export interface ProjectTile {
  title: string;
  text: string;
  href: string;
  clip?: string;
}

export const projects: ProjectTile[] = [
  {
    title: 'Team Deathmatch FPS',
    text: 'Lobby, Steam sessions, seamless travel and spectator',
    href: '/work/team-deathmatch-fps/',
    clip: '/media/team-deathmatch/match',
  },
  {
    title: 'BunnyHopping',
    text: 'Source-style air strafing and auto-hop',
    href: '/work/bunny-hopping/',
    clip: '/media/bunny-hopping/air-strafing',
  },
  {
    title: 'Spatial Inventory',
    text: 'Replicated grid inventory in C++',
    href: '/work/spatial-inventory/',
    clip: '/media/spatial-inventory/grid',
  },
  {
    title: 'First-person prototype',
    text: 'First-person feel on top of ALS',
    href: '/work/first-person-prototype/',
    clip: '/media/first-person-prototype/handling',
  },
  {
    title: 'Vault',
    text: 'Trace validation and Motion Warping',
    href: '/work/movement-systems/#vault',
    clip: '/media/movement/vault',
  },
  {
    title: 'Slide',
    text: 'Slope-aware, with aiming',
    href: '/work/movement-systems/#slide',
    clip: '/media/movement/slide',
  },
  {
    title: 'Zipline',
    text: 'Spline, oscillation and hand IK',
    href: '/work/movement-systems/#zipline',
    clip: '/media/movement/zipline',
  },
  {
    title: 'Ladder',
    text: 'Procedural rung IK',
    href: '/work/movement-systems/#ladder',
    clip: '/media/movement/ladder',
  },
  {
    title: 'Cover',
    text: 'Corners, leaning and shoulder swap',
    href: '/work/movement-systems/#cover',
    clip: '/media/movement/cover',
  },
  {
    title: 'Swim',
    text: 'Water volumes and buoyancy',
    href: '/work/movement-systems/#swim',
    clip: '/media/movement/swim',
  },
  {
    title: 'Parachute',
    text: 'Skydive with velocity prediction',
    href: '/work/movement-systems/#parachute',
    clip: '/media/movement/parachute',
  },
  {
    title: 'Grappling hook',
    text: 'One-handed, with a physics pull',
    href: '/work/movement-systems/#grappling-hook',
    clip: '/media/movement/grappling-hook',
  },
  {
    title: 'Carry and drag',
    text: 'Synced two-actor animation',
    href: '/work/movement-systems/#carry',
    clip: '/media/movement/carry',
  },
  {
    title: 'Takedown',
    text: 'Hand IK and semi-ragdoll',
    href: '/work/movement-systems/#takedown',
    clip: '/media/movement/takedown',
  },
  {
    title: 'FlagCapture',
    text: 'Multiplayer CTF on GAS in six days',
    href: '/work/flag-capture/',
    clip: '/media/flag-capture/match',
  },
  {
    title: 'BulletSystem',
    text: 'Drag, wind, penetration and ricochet',
    href: 'https://github.com/tornellihenrique/BulletSystem',
    clip: '/media/bunny-hopping/ballistics',
  },
  {
    title: 'Reima',
    text: 'First- and third-person combat prototype',
    href: '/work/reima/',
    clip: '/media/reima/combat',
  },
  {
    title: 'ALS-Refactored Manny',
    text: 'Open source retarget of 130+ animations',
    href: 'https://github.com/SlapStudios/ALS-Refactored-Manny',
    clip: '/media/als-manny/movement',
  },
  {
    title: 'UE5 FPS live course',
    text: 'Seven free live streams, 22+ hours',
    href: 'https://www.youtube.com/watch?v=F5eLJ72xXeY',
    clip: '/media/live-course/stream',
  },
  {
    title: 'Lyra tutorial',
    text: '75K views on YouTube',
    href: 'https://www.youtube.com/watch?v=oQvWl-bi8pI',
    clip: '/media/lyra-tutorial/start',
  },
];

const link = {
  warRock: { label: 'War Rock 2', href: '/work/war-rock-2/' },
  wyzards: { label: 'wYzards', href: '/work/wyzards/' },
  eggSmash: { label: 'Egg Smash', href: '/work/egg-smash/' },
  infection: { label: 'Infection', href: '/work/infection/' },
  mobileShooter: { label: 'Mobile shooter', href: '/work/mobile-shooter/' },
  toolkit: { label: 'Toolkit', href: '/work/procedural-first-person-toolkit/' },
  trueFps: { label: 'True FPS System', href: '/work/true-fps-system/' },
  teamDeathmatch: { label: 'Team Deathmatch FPS', href: '/work/team-deathmatch-fps/' },
  bunnyHopping: { label: 'BunnyHopping', href: '/work/bunny-hopping/' },
  movement: { label: 'Movement systems', href: '/work/movement-systems/' },
  flagCapture: { label: 'FlagCapture', href: '/work/flag-capture/' },
  spatialInventory: { label: 'Spatial Inventory', href: '/work/spatial-inventory/' },
  alsManny: { label: 'ALS-Refactored Manny', href: 'https://github.com/SlapStudios/ALS-Refactored-Manny' },
  liveCourse: { label: 'Live course', href: 'https://www.youtube.com/watch?v=F5eLJ72xXeY' },
  lyraTutorial: { label: 'Lyra tutorial', href: 'https://www.youtube.com/watch?v=oQvWl-bi8pI' },
  studio: { label: 'Layoff Studios', href: profile.studio },
};

export const specialties = [
  {
    title: 'Animation',
    text: 'First- and third-person locomotion, custom animation nodes, procedural weapon motion, IK and retargeting.',
    proof: [link.toolkit, link.warRock, link.trueFps, link.bunnyHopping, link.alsManny, link.infection],
  },
  {
    title: 'Movement',
    text: 'Vault, mantle, slide, ladders, swimming, cover and grappling on the Character Movement Component.',
    proof: [link.movement, link.warRock, link.bunnyHopping, link.alsManny],
  },
  {
    title: 'Networking',
    text: 'Client prediction, saved moves, lag-compensated hit validation, replicated physics, Steam sessions and lobbies.',
    proof: [link.eggSmash, link.bunnyHopping, link.teamDeathmatch, link.infection, link.spatialInventory],
  },
  {
    title: 'Gameplay Ability System',
    text: 'Ability cast types, damage flows, predicted equipment and replicated attack telegraphs.',
    proof: [link.wyzards, link.infection, link.eggSmash, link.flagCapture, link.lyraTutorial],
  },
  {
    title: 'AI',
    text: 'Soldier AI from scratch: controllers, behavior trees, EQS, team senses and spawners.',
    proof: [link.warRock],
  },
  {
    title: 'Tools',
    text: 'Slate editor tools for rig setup, validation, live motion inspection and item definitions.',
    proof: [link.toolkit, link.infection, link.bunnyHopping],
  },
  {
    title: 'Unity',
    text: 'First- and third-person character control and animation, skills, audio and touch controls in C#.',
    proof: [link.mobileShooter],
  },
  {
    title: 'Teaching',
    text: 'Free tutorials and live streams about FPS development and Lyra, in Portuguese and English.',
    proof: [link.lyraTutorial, link.liveCourse],
  },
];

export const codeSamples = [
  {
    title: 'TrueFPSSystemPlugin',
    text: 'Replicated UE5 FPS plugin with weapons, attachments, bots and online sessions. The project that led to my hiring.',
    href: 'https://github.com/tornellihenrique/TrueFPSSystemPlugin',
  },
  {
    title: 'TeamDeathmatchFPS',
    text: 'Complete two-team multiplayer FPS: server browser, lobby, Steam sessions and invites, match phases and spectator.',
    href: 'https://github.com/tornellihenrique/TeamDeathmatchFPS',
  },
  {
    title: 'FPSGame',
    text: 'The project from my live course, with an early version of the procedural motion node and equipment framework.',
    href: 'https://github.com/tornellihenrique/FPSGame',
  },
  {
    title: 'BulletSystem',
    text: 'Physically simulated ballistics: sub-stepped drag and gravity, wind, penetration, ricochet and actor pooling.',
    href: 'https://github.com/tornellihenrique/BulletSystem',
  },
  {
    title: 'FlagCapture',
    text: 'Capture-the-flag multiplayer shooter on GAS, with phased match flow and predicted movement flags.',
    href: 'https://github.com/tornellihenrique/FlagCapture',
  },
  {
    title: 'spatial-inventory-basic',
    text: 'Replicated grid inventory in C++, with items as replicated subobjects and a replaceable UI layer.',
    href: 'https://github.com/tornellihenrique/spatial-inventory-basic',
  },
];

export const experience = [
  {
    period: '2023 – now',
    company: 'Nevith Games',
    role: 'Senior Gameplay Programmer',
    text: 'War Rock 2, a realistic multiplayer FPS, working remotely with a team in South Korea. I built its movement plugins, first- and third-person locomotion and soldier AI from scratch, and worked across weapons, ballistics, recoil, match flow and UI. In 2025 I also worked in Unity and C# on a mobile shooter: I built character control, animation, skills and touch controls in the prototypes, and my animation logic was carried into the final game.',
    links: [link.warRock, link.movement, link.mobileShooter],
  },
  {
    period: '2026',
    company: 'SL Games',
    role: 'Gameplay Programmer',
    text: 'wYzards, an extraction RPG on GAS. I refactored the character and skill systems, planned the ability cast types and migrated every ability to them, refactored world interaction, and built ability indicators and replicated monster telegraphs.',
    links: [link.wyzards],
  },
  {
    period: '2025 – now',
    company: 'Layoff Studios',
    role: 'Co-founder, Tech Lead',
    text: 'Indie studio, alongside full-time work. On Egg Smash I built the phase-driven match flow, replicated physics props and an RTS-style spectator mode. On Infection I built the predicted equipment swap, the firearm layer, the damage subsystem and server-authoritative throwables.',
    links: [link.eggSmash, link.infection, link.studio],
  },
  {
    period: '2026 – now',
    company: 'Vinipi Enterprise',
    role: 'Co-founder, Plugin Developer',
    text: 'Core author of the Procedural First Person Toolkit, a commercial UE5 plugin on Fab: six custom animation nodes, a data-driven motion stack and Slate tools. 75+ licenses sold, rated 4.5/5 from 13 ratings (November 2026).',
    links: [link.toolkit],
  },
  {
    period: '2018 – 2023',
    company: 'cVortex, Callink, Sanfir',
    role: 'Software engineering',
    text: 'From intern to software architect and tech lead of a speech analytics platform handling around 100,000 calls per day.',
    links: [],
  },
];
