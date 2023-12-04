import { defineCollection, z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.string().optional(),
		// Transform string to Date object
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
	blog,
};
