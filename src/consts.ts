// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const BLOG_CATEGORY = [
    {
        type: 'article',
        title: '技术',
        href: '/blog/article'
    },
    
    {
        type: 'ecosystem',
        title: '生态',
        href: '/blog/ecosystem'
    },
    {
        type: 'case',
        title: '最佳实践',
        href: '/blog/case'
    },
    {
        type: 'all',
        title:'全部文章',
        href: '/blog/all'
    },
]

export const NEWS_CATEGORY = [
    {
        type: 'announcement',
        title:'社区公告',
        href: '/news/announcement'
    },
    {
        type: 'release',
        title:'发布声明',
        href: '/news/release'
    },
    {
        type: 'committer',
        title:'人员晋升',
        href: '/news/committer'
    },
    {
        type: 'cooperate',
        title:'社区合作',
        href: '/news/cooperate'
    },
]

export const ACTIVITY_CATEGORY = [
    {
        type: 'announcement',
        title:'社区公告',
        href: '/activity/announcement'
    },
    {
        type: 'activity-preview',
        title:'活动预告',
        href: '/activity/activity-preview'
    },
    {
        type: 'activity-detail',
        title:'活动详情',
        href: '/activity/activity-detail'
    }
]

export const HEADER_ACTIVITY_CARD = [
    { collection: 'blog', slug: 'ecosystem-nacos-controller-opensource' },
    { collection: 'blog' , slug: 'announcement-2022-award' },
]