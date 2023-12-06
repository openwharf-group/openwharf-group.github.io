const fs = require('fs');
const starlightFullPath = require.resolve("@astrojs/starlight");
const starlightPath = starlightFullPath.replace("/index.ts", "")


const replaceRouteData = () => {
	const originFile = starlightPath + "/utils/route-data.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const replacedContent = originContent.replace(
		/const sidebar = getSidebar.*?;\n/,
		'const sidebar = getSidebar(url.pathname, locale, props.categories);\n'
	);
	fs.writeFileSync(originFile, replacedContent, 'utf-8');
}

replaceRouteData();

// 替换 navigation.ts
const replaceNavigation = () => {
	const originFile = starlightPath + "/utils/navigation.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const regex = /export function getSidebar\(pathname\: string\, locale\: string \| undefined\).+\n(.+)/;
	const replacedContent = originContent.replace(
		regex,
		`export function getSidebar(pathname: string, locale: string | undefined, categories: any): SidebarEntry[] {
		const routes = getLocaleRoutes(locale);
		const versionRegex = /\\/docs\\/(next|v[0-9]\\.[0-9]\\.[0-9]|v[0-9]\\.[0-9]|v[0-9]|[0-9]\\.[0-9]\\.[0-9]|[0-9]\\.[0-9]|[0-9])/;
		const match = versionRegex.exec(pathname);

		const version = match ? match[1] : 'latest';
		if(categories && categories[version]){
			return categories[version].map((group) => configItemToEntry(group, pathname, locale, routes));
		}\n`
	);
	fs.writeFileSync(originFile, replacedContent, 'utf-8');
}
replaceNavigation();


const replaceIndexAstro = () => {
	const originFile = starlightPath + "/index.astro";
	const replacedContent = fs.readFileSync('./script/template/index.txt', 'utf-8')
	fs.writeFileSync(originFile, replacedContent.toString(), 'utf-8');
}
replaceIndexAstro();

// export function getSidebar(pathname: string, locale: string | undefined): SidebarEntry[] {
// 	const routes = getLocaleRoutes(locale);
// 	if (config.sidebar) {
// 		const regex = /\/docs\/(latest|next|(v[0-9]\.[0-9]\.[0-9])|(v[0-9]\.[0-9])|(v[0-9])|([0-9]\.[0-9]\.[0-9])|([0-9]\.[0-9])|([0-9]))/;
// 		const match = regex.exec(pathname);
// 		if (match && match[1]) {
// 			return config.sidebar[match[1]].map((group) => configItemToEntry(group, pathname, locale, routes));
// 		} else {
// 			return config.sidebar.latest.map((group) => configItemToEntry(group, pathname, locale, routes));
// 		}
// 	} else {
// 		const regex = /latest|next|(v[0-9]\.[0-9]\.[0-9])|(v[0-9]\.[0-9])|(v[0-9])|([0-9]\.[0-9]\.[0-9])|([0-9]\.[0-9])|([0-9])/;
// 		const match = regex.exec(pathname);
// 		let dirRoutes = routes;
// 		if (match && match[0]) {
// 			// console.log("---", match)
// 			dirRoutes = routes.filter(item => {
// 				return item.slug.split('/')[0] === match[0]
// 			})
// 			// console.log('dirRoutes', dirRoutes)
// 		} else {
// 			// console.log("===", match)
// 		}

// 		const tree = treeify(dirRoutes, locale || '');
// 		return sidebarFromDir(tree, pathname, locale, false);
// 	}
// }
