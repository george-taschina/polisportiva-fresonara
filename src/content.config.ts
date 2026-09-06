import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      category: z.enum(['news', 'evento', 'casa-del-giovane']),
      eventDate: z.coerce.date().optional(),
      eventEndDate: z.coerce.date().optional(),
      location: z.string().optional(),
      image: image().optional(),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { news };
