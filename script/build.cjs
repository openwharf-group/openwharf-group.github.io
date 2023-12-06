const fs = require('fs');
const starlightFullPath = require.resolve("@astrojs/starlight");
const starlightPath = starlightFullPath.replace("/index.ts", "")

// 替换 user-config.ts
const replaceUserConfig = () => {
	const originFile = starlightPath + "/utils/user-config.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const replacedContent = originContent.replace(
		/sidebar:.*?,\n/,
		'sidebar: z.record(z.string(), SidebarItemSchema.array().optional()),\n'
	);
	fs.writeFileSync(originFile, replacedContent, 'utf-8');
}

// 替换 navigation.ts
const replaceNavigation = () => {
	const originFile = starlightPath + "/utils/navigation.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const regex = `if (config.sidebar) {
		return config.sidebar.map((group) => configItemToEntry(group, pathname, locale, routes));
	} else {`;
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

// 替换 routing.ts
const replaceRouting = () => {
	const originFile = starlightPath + "/utils/routing.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const replacedContent = originContent.replace(
		/slug: normalizeIndexSlug\(slug\),?\n/,
		`slug: (slug === 'index' ? '' : (entry.id.replace(/.md$/, "") === slug ? slug : entry.id.replace(/.md$/, ""))),\n`
	);
	fs.writeFileSync(originFile, replacedContent, 'utf-8');
}


const replaceIndexAstro = () => {
	const originFile = starlightPath + "/index.astro";
	const replacedContent  = fs.readFileSync('./script/template/index.txt', 'utf-8')
	fs.writeFileSync(originFile, replacedContent.toString(), 'utf-8');
}


replaceUserConfig()
replaceNavigation()
replaceRouting()
replaceIndexAstro()