import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebars from './config/sidebars';
import sidebarsv2 from './config/sidebarsv2';
import locales from './src/i18n/languages';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links'
import remarkRemoveMdLinks from "./plugins/remarkRemoveMdLinks"
import remarkRemovePlainLanguageCode from "./plugins/remarkRemovePlainLanguageCode"
import remarkRemoveRepeatHeader from "./plugins/remarkRemoveRepeatHeader"


// https://astro.build/config
export default defineConfig({
	site: 'https://nacos.io',
	image: {
		domain:["img.alicdn"]
	},
	integrations: [
		starlight({
			title: 'My Docs',
			components: {
				TableOfContents: './src/components/starlight/TableOfContents.astro',
			},
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
		// shikiConfig: {
		// 	// 选择 Shiki 内置的主题（或添加你自己的主题）
		// 	// https://github.com/shikijs/shiki/blob/main/docs/themes.md
		// 	theme: 'dracula',
		// 	// 另外，也提供了多种主题
		// 	// https://github.com/antfu/shikiji#lightdark-dual-themes
		// 	experimentalThemes: {
		// 		light: 'github-light',
		// 		dark: 'github-dark',
		// 	},
		// 	// 添加自定义语言
		// 	// 注意：Shiki 内置了无数语言，包括 .astro！
		// 	// https://github.com/shikijs/shiki/blob/main/docs/languages.md
		// 	langs: [],
		// 	// 启用自动换行，以防止水平滚动
		// 	wrap: true,
		// },
		rehypePlugins: [
			// 在这里添加 rehype-external-links 插件配置
			[rehypeExternalLinks, {
				target: '_blank',
				rel: ['noopener', 'noreferrer']
			}]],
		remarkPlugins: [remarkRemoveMdLinks, remarkRemovePlainLanguageCode, remarkRemoveRepeatHeader]
	}
});