const fs = require('fs');
const starlightFullPath = require.resolve("@astrojs/starlight");
const starlightPath = starlightFullPath.replace("/index.ts", "")

/**
 * @description: 替换 utils/route-data.ts
 * 传递 categories 参数
 */
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

/**
 * @description: 替换 utils/navigation.ts
 *
 */
const replaceNavigation = () => {
	/**
	 * 获取当前页面的 sidebar， 左侧菜单动态加载
	 * 根据页面路由获取sidebar
	 */
	const originFile = starlightPath + "/utils/navigation.ts";
	const originContent = fs.readFileSync(originFile, 'utf-8');
	const sideBarRegex = /export function getSidebar\(pathname\: string\, locale\: string \| undefined\).+\n(.+)/;
	const sideBarContent = originContent.replace(
		sideBarRegex,
		`export function getSidebar(pathname: string, locale: string | undefined, categories: any): SidebarEntry[] {
		const routes = getLocaleRoutes(locale);
		const versionRegex = /\\/docs\\/(next|v[0-9]\\.[0-9]\\.[0-9]|v[0-9]\\.[0-9]|v[0-9]|[0-9]\\.[0-9]\\.[0-9]|[0-9]\\.[0-9]|[0-9])/;
		const match = versionRegex.exec(pathname);
		const version = match ? match[1] : 'latest';
		if(categories && categories[version]){
			return categories[version].map((group) => configItemToEntry(group, pathname, locale, routes));
		}\n`
	);

	/**
	 * 核心的 sidebar Link链接构建
	 */
	/**
	 * /v2/en/quickstart/quick-start-docker.html => /docs/v2/quickstart/quick-start-docker.html
	 * /v2/zh-cn/quickstart/quick-start-kubernetes.html => /docs/v2/quickstart/quick-start-docker.html
	 */
	const sideBarLinkRegex = /href = formatPath\(href\).+\n.+\}/;
	const sideBarLinkContent = sideBarContent.replace(
		sideBarLinkRegex,
		`href = formatPath(href);
		const regex = /\\/(next|v[0-9]\\.[0-9]\\.[0-9]|v[0-9]\\.[0-9]|v[0-9]|[0-9]\\.[0-9]\\.[0-9]|[0-9]\\.[0-9]|[0-9])\\/(en|zh-cn)/;
		href = href.replace(regex, '/docs/$1');
		}`
	);

	fs.writeFileSync(originFile, sideBarLinkContent, 'utf-8');
}
replaceNavigation();

/**
 * @description: 替换 index.astro
 * 1. 动态替换核心路由能力
 * 2. 动态集成siderBar能力
 */
const replaceIndexAstro = () => {
	const originFile = starlightPath + "/index.astro";
	const replacedContent = fs.readFileSync('./script/template/index.txt', 'utf-8')
	fs.writeFileSync(originFile, replacedContent.toString(), 'utf-8');
}
replaceIndexAstro();