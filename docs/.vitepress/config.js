export default {
    base:'/vitepress/',
    // 站点级选项
    title: '我的 VitePress 网站',
    description: '这是我的第一个 VitePress 网站',
    head: [
        ['link', { rel: 'icon', href: '/excel.svg' }],
    ],
    // 主题配置
    themeConfig: {
        logo: '/excel.svg',
        // 导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', items:[{text:'介绍',link:'/guide/introduction'},{text:'快速开始',link:'/guide/getting-started'}] }
        ],

        // 侧边栏
        sidebar: [
            {
                text: '指南',
                items: [
                    { text: '介绍', link: '/guide/introduction' },
                    { text: '快速开始', link: '/guide/getting-started' }
                ]
            }
        ],

        // 页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present My Project'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
        search: {
            provider: 'local'
        }
    }
}
