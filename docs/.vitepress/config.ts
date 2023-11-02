import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: '美乐低代码',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: '美乐文档首页', link: '/mlbook/book-home' },
      { text: '文档示例', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    /*
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
        
      },
    ],
    */

    sidebar: {
      '/mlbook/': [
        {
          text: '用户必读', link: '/mlbook/user/readme'
        },

        {
          text: '用户手册',
          items: [
            { text: '登录', link: '/mlbook/user/user01' },
            { text: '导航和界面', link: '/mlbook/user/user02' },
            { text: '自定义配置界面', link: '/mlbook/user/user03' },
            { text: '数据操作', link: '/mlbook/user/user04' },
            { text: '流程审批', link: '/mlbook/user/user05' },
            { text: '消息通知', link: '/mlbook/user/user06' },

          ]
        },

        {
          text: '管理员手册',
          items: [
            { text: '安装使用', link: '/mlbook/admin/admin01' },
            { text: '组织架构管理', link: '/mlbook/admin/admin02' },
            { text: '权限管理', link: '/mlbook/admin/admin03' },
            { text: '业务实体建模', link: '/mlbook/admin/admin04' },
            { text: '表单设计', link: '/mlbook/admin/admin05' },
            { text: '流程审批设计', link: '/mlbook/admin/admin06' },
            { text: '触发器逻辑', link: '/mlbook/admin/admin07' },
            { text: '仪表盘设计', link: '/mlbook/admin/admin08' },
            { text: '报表设计', link: '/mlbook/admin/admin09' },

          ]
        },

        {
          text: '开发者手册',
          items: [
            { text: '配置开发环境', link: '/mlbook/dev/dev01' },

          ]
        },


        
      ],

    }
  },
});
