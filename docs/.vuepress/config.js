module.exports = {
    title: 'Leach Chen', // 设置网站标题
    base: "/",
    themeConfig: { //主题配置
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Github例子',
                items: [
                    { text: 'Android', link: '/github/android/all/' },
                    { text: 'IOS', link: '/github/ios/all/' },
                    { text: 'Flutter', link: '/github/flutter/all/'},
                    { text: 'Vue', link: '/github/vue/all/'},
                    { text: 'H5', link: '/github/h5/all/' },
                ]
            },
            { text: '博客', link: 'https://www.leachchen.com/blog' },
            { text: '游戏', link: '/game/all/' },
            { text: '工具', link: '/tool/all/' },
            { text: '留言', link: '/message/' },
            { text: '投稿', link: '/contribute/' },
            { text: '关于', link: '/about/' },
        ],

        sidebar: {
            '/github/android/': [
                {
                    title: 'Android Github 合集',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                    ]
                },
            ],
            '/github/ios/': [
                {
                    title: 'IOS Github 合集',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                    ]
                },
            ],
            '/github/flutter/': [
                {
                    title: 'Flutter Github 合集',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                    ]
                },
            ],
            '/github/vue/': [
                {
                    title: 'Vue Github 合集',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                    ]
                },
            ],
            '/github/h5/': [
                {
                    title: 'H5 Github 合集',
                    collapsable: false,
                    children: [
                        'all/',
                        'h5/',
                        'hexo/',
                        'jekyll/',
                        'php/',
                    ]
                },
            ],

            '/game/': [
                {
                    title: 'Games',
                    collapsable: false,
                    children: [
                        'all/',
                        'shoot/',
                    ]
                },
            ],

            '/tool/': [
                {
                    title: 'Tools',
                    collapsable: false,
                    children: [
                        'all/',
                        'practical/',
                    ]
                },
            ],
        }
    }
}














/* module.exports = {
    title: 'Leach Chen', // 设置网站标题
    themeConfig: { //主题配置
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Github例子',
                items: [
                    { text: 'Android', link: '/github/android/all/' },
                    { text: 'IOS', link: '/github/ios/' },
                    { text: 'Vue', link: '/github/vue/'},
                    { text: 'H5', link: '/github/h5/' },
                ]
            },
            { text: '博客', link: '/a' },
            { text: '游戏', link: '/a' },
            { text: '工具', link: '/b' },
            { text: '留言', link: '/b' },
            { text: '投稿', link: '/b' },
        ],

        sidebar: {
            '/github/android/': [
                {
                    title: '全部',
                    collapsable: false,
                    children: [
                        'all/',
                    ]
                },
                {
                    title: '完整项目',
                    collapsable: false,
                    children: [
                        'project/',
                    ]
                },
            ]
        }
    }
} */