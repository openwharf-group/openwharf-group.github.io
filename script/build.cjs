const fs = require('fs');
const starlightFullPath = require.resolve("@astrojs/starlight");
const starlightPath = starlightFullPath.replace("/index.ts", "")

// 替换 user-config
const replaceUserConfig = () => {
	const originFile = starlightPath + "/utils/user-config.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const replacedContent = originContent.replace(
		/sidebar:.*?,\n/,
		'sidebar: z.record(z.string(), SidebarItemSchema.array().optional()),\n'
	);
	fs.writeFileSync(originFile, replacedContent, 'utf-8');
}

// 替换 navigation
const replaceNavigation = () => {
	const originFile = starlightPath + "/utils/navigation.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const regex = /if \(config\.sidebar\) \{[\s\S]*?\} else \{/g;
	const replacedContent = originContent.replace(
		regex,
		`if (config.sidebar) {
			const regex = /\\/docs\\/(v[0-9])/;
			const match = regex.exec(pathname);
			if(match && match[1]) {
				return config.sidebar[match[1]].map((group) => configItemToEntry(group, pathname, locale, routes));
			} else {
				return config.sidebar.latest.map((group) => configItemToEntry(group, pathname, locale, routes));
			}
		} else {`
	);
	fs.writeFileSync(originFile, replacedContent, 'utf-8');
}

const replaceIndexAstro = () => {
	const originFile = starlightPath + "/index.astro";
	const replacedContent  = fs.readFileSync('./script/template/index.astro', 'utf-8')
	fs.writeFileSync(originFile, replacedContent.toString(), 'utf-8');
}


replaceUserConfig()
replaceNavigation()
replaceIndexAstro()