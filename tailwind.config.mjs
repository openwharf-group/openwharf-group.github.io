
import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		//替换调色板，只能用这下面的颜色
		colors: {
			blue: {
				'01': '#EDF2FC',
				"02": "#E0E9FB",
				"03": "#C6D6F7",
				"04": "#A6BFF2",
				"05": "#8BABE9",
				"06": "#7097E6",
				"07": "#567BE1",
				"08": "#3D57DA",
				"09": "#2C46C9",
				"10": "#1F36AD",
				"11": "#162B92",
				"12": "#0D1A59",
				"13": "#0B1337",
				"14": "#070B22",
				"15": "#030611",
			},
			gray: {
				"01": "#F4F4F6",
				"02": "#EBECEF",
				"03": "#DDDEE4",
				"04": "#C7C9D1",
				"05": "#B3B6C1",
				"06": "#A3A6B3",
				"07": "#9295A5",
				"08": "#818598",
				"09": "#6E7587",
				"10": "#5C6170",
				"11": "#4C505D",
				"12": "#2E3038",
				"13": "#1E1F24",
				"14": "#121316",
				"15": "#0A0A0A",
			}
		},
		extend: {
			// 设置starlight文档颜色
			colors: {
				gray: {
					100: "#F4F4F6",
					200: "#EBECEF",
					300: "#DDDEE4",
					400: "#B3B6C1",
					500: "#9295A5",
					600: "#6E7587",
					700: "#4C505D",
					800: "#1E1F24",
					900: "#0A0A0A",
				},
				accent: {
					200: '#567BE1',
					600: '#3D57DA',
					900: '#162B92',
					950: '#0B1337'
				}
			}
		}
	},
	plugins: [starlightPlugin()],
};
