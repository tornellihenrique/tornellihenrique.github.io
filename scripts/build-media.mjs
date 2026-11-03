import { execFile } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import ffmpegPath from 'ffmpeg-static';

const run = promisify(execFile);
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(rootDir, 'public', 'media');
const manifest = JSON.parse(await readFile(path.join(rootDir, 'scripts', 'media.json'), 'utf8'));

const sourceDir = process.env.MEDIA_SOURCE;
if (!sourceDir) {
  throw new Error('Set MEDIA_SOURCE to the folder that holds the raw captures.');
}

const CLIP_SIZE = '1280:720';
const POSTER_OFFSET_SECONDS = 1.5;

function maskFilter({ x, y, w, h }) {
  return `delogo=x=${x}:y=${y}:w=${w}:h=${h}`;
}

function timedMaskFilter(mask) {
  return mask.from === undefined ? maskFilter(mask) : `${maskFilter(mask)}:enable='gte(t,${mask.from})'`;
}

async function buildClip({ out, src, start, duration, crop, masks = [] }) {
  const input = path.join(sourceDir, src);
  const target = path.join(outputDir, `${out}.mp4`);
  await mkdir(path.dirname(target), { recursive: true });

  const filters = [...masks.map(timedMaskFilter), `crop=${crop}`, `scale=${CLIP_SIZE}`, 'fps=30'].join(',');
  await run(ffmpegPath, [
    '-y', '-loglevel', 'error', '-ss', String(start), '-t', String(duration), '-i', input,
    '-an', '-vf', filters, '-c:v', 'libx264', '-crf', '27', '-preset', 'slow',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', target,
  ]);

  const posterMasks = masks.filter(({ from = 0 }) => from <= POSTER_OFFSET_SECONDS).map(maskFilter);
  await run(ffmpegPath, [
    '-y', '-loglevel', 'error', '-ss', String(start + POSTER_OFFSET_SECONDS), '-i', input,
    '-frames:v', '1', '-vf', [...posterMasks, `crop=${crop}`, `scale=${CLIP_SIZE}`].join(','), '-q:v', '4',
    path.join(outputDir, `${out}.jpg`),
  ]);
}

async function buildImage({ out, url }) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`);
  }

  const target = path.join(outputDir, `${out}.jpg`);
  const raw = `${target}.source`;
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(raw, Buffer.from(await response.arrayBuffer()));

  await run(ffmpegPath, [
    '-y', '-loglevel', 'error', '-i', raw, '-frames:v', '1',
    '-vf', 'scale=1280:-2', '-q:v', '4', target,
  ]);
  await run('node', ['-e', `require('node:fs').rmSync(${JSON.stringify(raw)})`]);
}

const filter = process.argv[2] ?? '';
const matches = ({ out }) => out.startsWith(filter);

for (const clip of manifest.clips.filter(matches)) {
  await buildClip(clip);
  console.log(`clip  ${clip.out}`);
}

for (const image of manifest.images.filter(matches)) {
  await buildImage(image);
  console.log(`image ${image.out}`);
}
