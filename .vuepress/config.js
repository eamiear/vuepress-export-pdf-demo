module.exports = {
    title: '昂宝智慧客控系统',
    descirption: '操作文档',
    port: 9000,
    base: '/hotel-control-docs/',
    themeConfig: {
        search: false, // 搜索
        navbar: false, // 导航
        nextLinks: false, // 下一页
        prevLinks: false, // 上一页
        nav: [
        ],
        sidebar: [
            {
                title: '操作手册',   // 必要的
                //	path: '/basics-guide/course',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/guide/0-home.md', '首页概览'],
                    ['/guide/1-hotel-manager.md', '酒店管理'],
                    ['/guide/2-device-manager.md', '设备管理'],
                    ['/guide/3-report-manager.md', '报表管理'],
                    ['/guide/4-system-manager.md', '系统管理']
                ]
            },
        ]
    },
    plugins:[
        ['vuepress-plugin-export'],
        [
            'vuepress-plugin-medium-zoom',
            {
                options: {
                    margin: 16
                }
            }
        ]

    ]
 }

