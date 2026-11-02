export const profile = {
  name: 'Henrique Tornelli',
  fullName: 'Henrique Tornelli Duarte',
  role: 'Senior Gameplay Programmer',
  headline: 'I build the systems players feel first.',
  summary:
    'Procedural animation, character movement, replication and the Gameplay Ability System, in Unreal Engine C++. I work on War Rock 2 at Nevith Games and co-founded a commercial UE5 plugin with 75+ licenses sold.',
  description:
    'Senior gameplay programmer in Unreal Engine 5 and C++, focused on procedural animation, character movement, replication and GAS.',
  email: 'tornelli.henrique@gmail.com',
  cv: '/Henrique_Tornelli_Duarte_CV.pdf',
  linkedin: 'https://www.linkedin.com/in/henrique-tornelli',
  github: 'https://github.com/tornellihenrique',
  location: 'Brazil',
  languages: 'English (full professional), Portuguese (native)',
  reelYoutubeId: null as string | null,
};

export const proof = [
  { value: '3+ yrs', label: 'professional Unreal Engine C++' },
  { value: '75+', label: 'plugin licenses sold on Fab, rated 4.5/5' },
  { value: '20K+', label: 'views on the demo that got me hired' },
  { value: 'BRL 50K', label: 'public funding won by the Egg Smash prototype' },
];

export const motionWall = [
  { src: '/media/movement/vault', label: 'Vault' },
  { src: '/media/movement/zipline', label: 'Zipline' },
  { src: '/media/movement/ladder', label: 'Ladder IK' },
  { src: '/media/movement/cover', label: 'Cover' },
  { src: '/media/movement/swim', label: 'Swim' },
  { src: '/media/bunny-hopping/air-strafing', label: 'Air strafing' },
];

export const specialties = [
  {
    title: 'Animation',
    text: 'First- and third-person locomotion setups, custom animation nodes, procedural weapon motion, IK and retargeting.',
    proof: [
      { label: 'Toolkit', href: '/work/procedural-first-person-toolkit/' },
      { label: 'War Rock 2', href: '/work/war-rock-2/' },
    ],
  },
  {
    title: 'Movement',
    text: 'Vault, mantle, slide, ladders, swimming, cover and grappling on the Character Movement Component, integrated with prediction.',
    proof: [
      { label: 'Movement systems', href: '/work/movement-systems/' },
      { label: 'BunnyHopping', href: '/work/bunny-hopping/' },
    ],
  },
  {
    title: 'Networking',
    text: 'Client prediction, saved moves, lag-compensated hit validation, replicated physics props, Steam sessions and lobby flow.',
    proof: [
      { label: 'Egg Smash', href: '/work/egg-smash/' },
      { label: 'BunnyHopping', href: '/work/bunny-hopping/' },
    ],
  },
  {
    title: 'Gameplay Ability System',
    text: 'Ability cast types, damage flows, predicted equipment and replicated attack telegraphs on GAS.',
    proof: [
      { label: 'wYzards', href: '/work/wyzards/' },
      { label: 'FlagCapture', href: '/work/flag-capture/' },
    ],
  },
  {
    title: 'AI',
    text: 'Soldier AI from scratch: controllers, behavior trees, EQS, team senses and spawners, plus editor tools for AI data.',
    proof: [{ label: 'War Rock 2', href: '/work/war-rock-2/' }],
  },
  {
    title: 'Tools',
    text: 'Slate editor tools for rig setup, validation, live motion inspection and item definitions.',
    proof: [{ label: 'Toolkit', href: '/work/procedural-first-person-toolkit/' }],
  },
];

export const moreWork = [
  {
    title: 'Team Deathmatch FPS',
    text: 'Complete multiplayer FPS in UE5 C++: lobby, server browser, Steam sessions and invites, seamless travel, scoreboard and spectator.',
  },
  {
    title: 'Infection',
    text: 'Co-op zombie FPS (working title). Client-predicted equipment swap, firearm layer, centralized damage subsystem and server-authoritative throwables.',
  },
  {
    title: 'ALS-Refactored Manny',
    text: 'Open source UE5 Manny retarget of ALS-Refactored: 130+ animations, plus slide and prone networked through saved moves.',
    href: 'https://github.com/SlapStudios/ALS-Refactored-Manny',
  },
  {
    title: 'UE5 FPS live course',
    text: 'Taught FPS development in seven free live streams, more than 22 hours in total, in Portuguese.',
    href: 'https://www.youtube.com/watch?v=F5eLJ72xXeY',
  },
];

export const codeSamples = [
  {
    title: 'BulletSystem',
    text: 'Physically simulated ballistics: sub-stepped drag and gravity, wind, penetration, ricochet and actor pooling.',
    href: 'https://github.com/tornellihenrique/BulletSystem',
  },
  {
    title: 'FPSGame',
    text: 'The project from my live course, with an early version of the procedural motion node and equipment framework.',
    href: 'https://github.com/tornellihenrique/FPSGame',
  },
  {
    title: 'ALS-Refactored Manny',
    text: 'Slide, prone and camera limits on an open source locomotion system, networked through saved moves and custom move flags.',
    href: 'https://github.com/SlapStudios/ALS-Refactored-Manny',
  },
];

export const experience = [
  {
    period: '2023 – now',
    company: 'Nevith Games',
    role: 'Senior Gameplay Programmer',
    note: 'War Rock 2, and a mobile shooter in Unity that I learned on the job.',
  },
  {
    period: '2026',
    company: 'SL Games',
    role: 'Gameplay Programmer',
    note: 'wYzards, an extraction RPG built on GAS.',
  },
  {
    period: '2025 – now',
    company: 'Layoff Studios',
    role: 'Co-founder, Gameplay Programmer',
    note: 'Indie studio behind Egg Smash and Infection.',
  },
  {
    period: '2026 – now',
    company: 'Vinipi Enterprise',
    role: 'Co-founder, Plugin Developer',
    note: 'Procedural First Person Toolkit on Fab.',
  },
  {
    period: '2018 – 2023',
    company: 'cVortex, Callink, Sanfir',
    role: 'Software engineering',
    note: 'From intern to software architect and tech lead of a speech analytics platform handling around 100,000 calls per day.',
  },
];
