import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebars from './config/sidebars';
import sidebarsv2 from './config/sidebarsv2';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links'
import remarkRemoveMdLinks from "./plugins/remarkRemoveMdLinks"


export const locales = {
	'root': { label: '简体中文', lang: 'zh-CN' },
	'en': { label: 'English', lang: 'en' }
};

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			locales,
			sidebar: {
				latest: sidebars,
				v2: sidebarsv2,
			},
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
	markdown: {
		rehypePlugins: [
			// 在这里添加 rehype-external-links 插件配置
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
		remarkPlugins: [
			remarkRemoveMdLinks,
		],
	},
});