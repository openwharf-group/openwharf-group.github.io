import { defineCollection,z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
	  description: z.string(),
	  keywords:z.array(z.string()),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	posts: postsCollection,
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
