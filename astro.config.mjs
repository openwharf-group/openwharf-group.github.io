import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs V1',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'test',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/docs_v1/guides/example/' },
						{ label: 'What is Nacos', link: '/docs_v1/guides/what-is-nacos/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'docs_v2/reference' },
				},
			],
		}),
		tailwind()
	] 
});