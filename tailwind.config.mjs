
import starlightPlugin from '@astrojs/starlight-tailwind';
import themeColor from "./themeColor.json"

/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": themeColor['gray']['13'],
					"secondary": themeColor['gray']['02'],
					"accent": themeColor['blue']['08'],
					"neutral": themeColor['blue']['01'],
					"base-100": themeColor['blue']['01'],
					"info": themeColor['gray']['13'],
					"success": themeColor['blue']['06'],
					"warning": themeColor['gray']['06'],
					"error": themeColor['gray']['13'],
				},
			},
		],
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		//替换调色板，只能用这下面的颜色
		colors: {
			blue: {
				'01': themeColor['blue']['01'],
				'02': themeColor['blue']['02'],
				'03': themeColor['blue']['03'],
				'04': themeColor['blue']['04'],
				'05': themeColor['blue']['05'],
				'06': themeColor['blue']['06'],
				'07': themeColor['blue']['07'],
				'08': themeColor['blue']['08'],
				'09': themeColor['blue']['09'],
				'10': themeColor['blue']['10'],
				'11': themeColor['blue']['11'],
				'12': themeColor['blue']['12'],
				'13': themeColor['blue']['13'],
				'14': themeColor['blue']['14'],
				'15': themeColor['blue']['15'],
			},
			gray: {
				'01': themeColor['gray']['01'],
				'02': themeColor['gray']['02'],
				'03': themeColor['gray']['03'],
				'04': themeColor['gray']['04'],
				'05': themeColor['gray']['05'],
				'06': themeColor['gray']['06'],
				'07': themeColor['gray']['07'],
				'08': themeColor['gray']['08'],
				'09': themeColor['gray']['09'],
				'10': themeColor['gray']['10'],
				'11': themeColor['gray']['11'],
				'12': themeColor['gray']['12'],
				'13': themeColor['gray']['13'],
				'14': themeColor['gray']['14'],
				'15': themeColor['gray']['15'],
			}
		},
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
				mono: ["Roboto", "sans-serif"],
			},
			// 设置starlight文档颜色
			colors: {
				gray: {
					100: themeColor['gray']['01'],
					200: themeColor['gray']['02'],
					300: themeColor['gray']['03'],
					400: themeColor['gray']['05'],
					500: themeColor['gray']['10'],
					600: themeColor['gray']['10'],
					700: themeColor['gray']['11'],
					800: themeColor['gray']['13'],
					900: themeColor['gray']['15'],
				},
				accent: {
					200: themeColor['blue']['07'],
					600: themeColor['blue']['08'],
					900: themeColor['blue']['11'],
					950: themeColor['blue']['03']
				}
			},
		}
	},
	plugins: [starlightPlugin(), require("daisyui")],
};
