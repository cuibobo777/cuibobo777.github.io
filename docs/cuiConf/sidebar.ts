import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    '/essay/': [],
    '/posts/web/': [
        {
            text: 'github',
            collapsed: true,
            items: [
                {
                    text: 'vitepress 自动构建',
                    link: '/posts/web/github/g_001_workflows'
                }
            ]
        },
        {
            text: 'browser',
            collapsed: true,
            items: [
                {
                    text: '浏览器渲染原理',
                    link: '/posts/web/brower/b_001_browserRendering'
                }
            ]
        }
    ],
    '/posts/backend/': [],
}