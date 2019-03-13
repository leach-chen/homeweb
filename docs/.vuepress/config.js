module.exports = {
    title: '资源库', // 设置网站标题
    base: "/",
    head: [
         // add jquert and fancybox
         ['script', { async:"async",src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}],
         ['script', {},"(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: \"ca-pub-4924092018203651\",enable_page_level_ads: true});"],
         
         ['script', { async:"async","custom-element":"amp-auto-ads",src:"https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"}],
         
         ['script', { async:"async",src:"//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"}],
         ['script', {},"var _hmt = _hmt || [];(function() {var hm = document.createElement(\"script\");hm.src = \"https://hm.baidu.com/hm.js?0447a7b7b5fc544c1a27e5675a8e5a6c\";var s = document.getElementsByTagName(\"script\")[0]; s.parentNode.insertBefore(hm, s);})();"],         
        
        
         ['script', {src:"https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"}],
        ],

    plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ],
    themeConfig: { //主题配置
        //添加导航栏
        // algolia: {
        //     apiKey: 'eb9a770d84c8a6f01e3a5a45f8e9ae27',
        //     indexName: 'leachchen'
        // },
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Github资源',
                items: [
                    { text: 'Android', link: '/github/android/all/' },
                    { text: 'IOS', link: '/github/ios/all/' },
                    { text: 'Flutter', link: '/github/flutter/all/'},
                    { text: 'Vue', link: '/github/vue/all/'},
                    { text: 'H5', link: '/github/h5/all/' },
                ]
            },
            { text: '游戏', link: '/game/all/' },
            { text: '工具', link: '/tool/all/' },
            { text: '留言', link: '/message/' },
            { text: 'Gitter聊天', link: 'https://gitter.im/leachchen/fullstack?utm_source=share-link&utm_medium=link&utm_campaign=share-link' },
            { text: '博客', link: 'https://www.leachchen.com/blog' },
            //{ text: '投稿', link: '/contribute/' },
            { text: '加入', link: '/join/' },
        ],

        sidebar: {
            '/github/android/': [
                {
                    title: 'Android Github',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                        'animation/',
                        'view/',
                        'synthesize/',
                        'architecture/',
                    ]
                },
            ],
            '/github/ios/': [
                {
                    title: 'IOS Github',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                    ]
                },
            ],
            '/github/flutter/': [
                {
                    title: 'Flutter Github',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                    ]
                },
            ],
            '/github/vue/': [
                {
                    title: 'Vue Github',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                    ]
                },
            ],
            '/github/h5/': [
                {
                    title: 'H5 Github',
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
                        'synthesize/',
                    ]
                },
            ],

            '/tool/': [
                {
                    title: 'Tools',
                    collapsable: false,
                    children: [
                        'all/',
                        'synthesize/',
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