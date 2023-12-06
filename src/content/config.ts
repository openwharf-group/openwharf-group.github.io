import { defineCollection, z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.string().or(z.array(z.string().or(z.number())).optional()),
		// Transform string to Date object
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				keywords: z.string().or(z.array(z.string()).optional()),
				position: z.number().optional(),
			}),
		})
	}),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
	blog,
};
