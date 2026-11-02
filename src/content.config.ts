import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const media = z.discriminatedUnion('type', [
  z.object({ type: z.literal('clip'), src: z.string(), caption: z.string() }),
  z.object({ type: z.literal('image'), src: z.string(), caption: z.string() }),
  z.object({ type: z.literal('youtube'), id: z.string(), poster: z.string(), caption: z.string() }),
]);

const link = z.object({ label: z.string(), href: z.url() });

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    group: z.enum(['game', 'plugin', 'project']),
    kind: z.enum(['Professional', 'Commercial', 'Indie', 'Personal', 'Prototype', 'Open source']),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    order: z.number(),
    cover: z.string().optional(),
    preview: z.string().optional(),
    notice: z.string().optional(),
    media: z.array(media).default([]),
    links: z.array(link).default([]),
  }),
});

export const collections = { work };
