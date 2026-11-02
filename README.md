# Henrique Tornelli

Portfolio of a senior gameplay programmer, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/content/work/`: one Markdown file per case study, validated by `src/content.config.ts`.
- `src/data/profile.ts`: profile, proof points, experience and code samples.
- `src/scripts/motion/`: the hero sketch. `MotionStack` sums a list of `MotionLayer`, so a new layer only needs a new class.
- `scripts/media.json`: clips cut from raw captures and images fetched from official pages.

## Media

Add an entry to `scripts/media.json`, then point `MEDIA_SOURCE` at the folder with the raw captures:

```bash
MEDIA_SOURCE=/path/to/captures npm run media
```

Each clip becomes a silent 720p MP4 and a JPEG poster in `public/media/`. Pass a prefix, such as `npm run media -- flag-capture`, to rebuild only part of the list.

## Showreel

Set `reelYoutubeId` in `src/data/profile.ts` and add `public/media/reel.jpg`. The reel then appears above the clip wall.
