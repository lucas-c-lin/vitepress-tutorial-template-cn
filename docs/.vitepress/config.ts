import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['style', {}, `
      /* Hero 布局：标题左，图片右 */
      .VPHero {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;
      }

      .VPHero .container { flex: 1; }

      /* 图片容器：1:1 正方形 */
      .VPHero .image-container {
        width: 400px;
        height: 400px;
      }

      /* 图片：圆角显示 */
      .VPImage.image-src {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit: cover;
      }

      /* 手机端：上下布局 */
      @media (max-width: 768px) {
        .VPHero {
          flex-direction: column;
          gap: 24px;
        }
        .VPHero .image-container {
          width: 280px;
          height: 280px;
        }
      }
    `]
  ],
  base: '/vitepress-tutorial-template-cn/',
  title: "Vitepress Tutorial Template",
  description: "Starter template for Vitepress documentation sites, especially for tutorials and academic documentation.",
  lang: 'zh-CN',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '内容A', link: '/content_A/A1' },
      { text: '内容B', link: '/content_B/B1' },
      { text: '内容C', link: '/content_B/B2' },
      { text: '内容D', link: '/content_C/C1' }
    ],
    sidebar: [
      {
        text: ' 替换为你自己的内容',
        items: [
          { text: '精选教程', link: '/content_A/A1' },
        ]
      },
      {
        text: ' 替换为你自己的内容',
        items: [
          { text: '产品对比', link: '/content_B/B1' },
          { text: '方法对比', link: '/content_B/B2' },
        ]
      },
      {
        text: ' 替换为你自己的内容',
        items: [
          { text: '模型对比', link: '/content_C/C1' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucas-c-lin/openclaw-learning-hub-cn' }
      // 提示：请将上面的GitHub链接替换为您自己的GitHub仓库链接
    ]
  }
})