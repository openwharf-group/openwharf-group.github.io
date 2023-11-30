import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebars from './config/sidebars';
import sidebarsv2 from './config/sidebarsv2';
import locales from './src/i18n/languages';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links'
import remarkRemoveMdLinks from "./plugins/remarkRemoveMdLinks"


// https://astro.build/config
export default defineConfig({
	site: 'https://nacos.io',
	integrations: [
		starlight({
			title: 'My Docs',
			editLink: {
				baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			locales,
			sidebar: {
				latest: sidebars,
				v2: sidebarsv2,
			},
			customCss: ['./src/style/global.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
	markdown: {
		rehypePlugins: [
			// 在这里添加 rehype-external-links 插件配置
			[rehypeExternalLinks, {
				target: '_blank',
				rel: ['noopener', 'noreferrer']
			}]],
		remarkPlugins: [remarkRemoveMdLinks]
	}
});