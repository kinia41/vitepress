export default {
    // 站点级选项
    title: '我的 VitePress 网站',
    description: '这是我的第一个 VitePress 网站',
    head: [
        ['link', { rel: 'icon', href: '/excel.svg' }],
    ],
    base:'/vitepress',
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
            // 可以通过将 SVG 作为字符串传递来添加自定义图标：
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
                },
                link: '...',
                // 也可以为无障碍添加一个自定义标签 (可选但推荐):
                ariaLabel: 'cool link'
            }
        ],
        search: {
            provider: 'local'
        }
    }
}