// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenWharf',
  favicon: 'img/favico.png',

  // Set the production url of your site here
  url: 'https://higress.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alibaba', // Usually your GitHub org/user name.
  projectName: 'openwharf', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  clientModules: [require.resolve('./src/myClientModule.ts'), require.resolve('./src/custom-js.ts')],
  i18n: {
    defaultLocale: 'default',
    locales: ['en-us', 'zh-cn', 'default'],
    localeConfigs: {
      'en-us': {
        label: 'En',
        htmlLang: 'en-US',
      },
      'zh-cn': {
        label: '中',
        htmlLang: 'zh-CN',
      },
    },
  },
  scripts: [
    { src: '//g.alicdn.com/mamba/assets/0.0.19/mse-arc-ui.min.js' },
    {
      src: '//g.alicdn.com/alilog/mlog/aplus_v2.js',
      id: 'beacon-aplus',
      exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
    },
    {
      src: '//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js',
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-YHS75WKFBR',
      async: true,
    },
  ],
  stylesheets: [
    {
      href: '//g.alicdn.com/mamba/assets/0.0.19/mse-arc-ui.min.css',
    },
  ],
  plugins: ['docusaurus-plugin-sass', './postcss-tailwind-loader.js',],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath, locale }) => {
            return `https://github.com/higress-group/higress-group.github.io/blob/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          editUrl: ({ blogPath, locale }) => {
            return `https://github.com/higress-group/higress-group.github.io/blob/main/i18n/${locale}/docusaurus-plugin-content-blog/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
    // [
    //   '@docusaurus/preset-classic',
    //   {
    //     pages: {
    //       path: 'src/pages',
    //       routeBasePath: '/zh-cn',
    //       include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
    //       exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
    //       mdxPageComponent: '@theme/MDXPage',
    //       // remarkPlugins: [require('remark-math')],
    //       rehypePlugins: [],
    //       beforeDefaultRemarkPlugins: [],
    //       beforeDefaultRehypePlugins: [],
    //     },
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'higress,higress官网,云原生网关' }],
      // Replace with your project's social card
      image: 'img/higress_logo_small.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // 禁止切换主题模式
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'OpenWharf logo',
          src: 'img/logo_standard.svg',
        },
        items: [
          {
            label: 'Home',
            to: '/',
            activeBaseRegex: '^/$',
            position: 'right',
          }
        ],
      },
      // footer: {
      //   style: 'light',
      //   links: [
      //     {
      //       title: 'Vision',
      //       items: [
      //         {
      //           label: 'OpenWharf is ...',
      //           to: '/',
      //         },
      //       ],
      //     },
      //   ],
      //   logo: {
      //     src: 'img/logo_white.svg',
      //     width: 120,
      //     height: 36,
      //   },
      //   copyright: `Copyright © ${new Date().getFullYear()} OpenWharf<br/>浙公网安备 33011002016922号 浙ICP备12022327号-1119`,
      // },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
