import DocsMenu from "./DocsMenu.astro";
import CommunityMenu from "./CommunityMenu.astro";


export default [
  {
      label: "文档",
      translations: {
          en: "DOCS"
      },
      trigger: "hover",
      slot: DocsMenu,
      position: "absolute",
      items: [
          {
              label: "最新版",
              target: "_self",
              link: "/docs/what-is-nacos",
              translations: {
                  en: "Latest"
              }
          },
          {
              label: "预览版",
              target: "_self",
              link: "/docs/next/what-is-nacos",
              translations: {
                  en: "Next"
              }
          },
          {
              label: "1.x",
              target: "_self",
              link: "/docs/v1/what-is-nacos",
              translations: {
                  en: "1.x"
              }
          },
          {
            label: "2.x",
            target: "_self",
            link: "/docs/v2/what-is-nacos",
            translations: {
                en: "2.x"
            }
          }
      ]
  },
  {
      label: "企业版 NACOS",
      translations: {
          en: "NACOS CLOUD"
      },
      trigger: "click", 
      route: "/cloud",
      target: "_self"
  },
  {
      label: "社区",
      translations: {
          en: "COMMUNITY"
      },
      trigger: "click",
      slot: CommunityMenu,
      position: "fixed",
      items: [
        {
          section: "社区",
          translations: {
              en: "COMMUNITY"
          },
          children: [
            {
              label: "报告文档问题",
              target: "_blank",
              link: "https://github.com/alibaba/nacos/issues",
              translations: {
                  en: "Report a doc issue"
              }
            },
            {
              label: "贡献社区",
              target: "_blank",
              link: "https://github.com/alibaba/nacos/pulls",
              translations: {
                  en: "Contribute community"
              }
            },
            {
              label: "贡献者",
              target: "_blank",
              link: "https://github.com/alibaba/nacos/graphs/contributors",
              translations: {
                  en: "Contributors"
              }
            }
          ]
        },
        {
          section: "事件",
          translations: {
              en: "Events"
          },
          children: [
            {
              label: "新闻",
              target: "_self",
              link: "/news",
              translations: {
                  en: "News"
              }
            },
            {
              label: "活动",
              target: "_self",
              link: "/activity",
              translations: {
                  en: "Activity"
              }
            }
          ]
        },
        {
          section: "资源",
          translations: {
              en: "Resources"
          },
          children: [
            {
              label: "博客",
              target: "_self",
              link: "/blog",
              translations: {
                  en: "Blog"
              }
            },
            {
              label: "电子书",
              target: "_self",
              link: "/docs/ebook/kbyo6n.mdx",
              translations: {
                  en: "E-book"
              }
            }
          ]
        }
      ]
  },
  {
      label: "控制台样例",
      translations: {
          en: "DEMO"
      },
      trigger: "click", 
      target: "_self",
      route: "http://console.nacos.io/nacos/index.html"
  }
]