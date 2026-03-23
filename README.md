# VitePress 极简教程模板

欢迎！这是一个基于 [VitePress](https://vitepress.dev/) 的中文教程网站模板。它以苹果风格设计，极简又强大。无论你是程序员、写手还是知识工作者，都可以用它快速搭建一个专业的知识分享网站。

**关键特性：**
- 📝 完全基于 Markdown，自动生成网站
- ⚡ 超快的开发和构建速度
- 🎨 干净美观的苹果风格设计
- 🔄 实时预览，改完立即看到效果
- 📱 自适应手机和电脑屏幕

---

## 第一步：做好准备

### 需要什么？

1. **Node.js** — 这是一个 JavaScript 运行环境
   - 去 [nodejs.org](https://nodejs.org/) 下载 LTS 版本（推荐 18+ 版本）
   - 安装完了打开命令行，输入 `node --version`，有版本号就说明安装成功了

2. **Git** — 用来下载和管理代码
   - 去 [git-scm.com](https://git-scm.com/) 下载安装
   - 安装完打开命令行，输入 `git --version`，有版本号就成功了

3. **编辑器** — 推荐 VS Code（免费好用）
   - 去 [code.visualstudio.com](https://code.visualstudio.com/) 下载安装

---

## 第二步：把模板下载到电脑

### 方法 A：用命令行（推荐新手学习）

1. 打开命令行（Windows 按 Win + R，输入 `cmd`；Mac 打开 Terminal）
2. 进入你想放代码的文件夹，比如桌面：
   ```bash
   cd Desktop
   ```
3. 克隆这个项目：
   ```bash
   git clone https://github.com/你的用户名/项目名.git
   ```
   把 `你的用户名` 和 `项目名` 换成实际的。如果没有 GitHub 账号，先去 [github.com](https://github.com/) 注册一个。

4. 进入项目文件夹：
   ```bash
   cd 项目名
   ```

### 方法 B：直接下载（不太推荐，但最快）

1. 点击 GitHub 上的 **Code** 按钮
2. 选择 **Download ZIP**
3. 解压到你想放的地方

---

## 第三步：安装依赖并启动

1. 在项目文件夹里打开命令行
2. 安装所需的包：
   ```bash
   npm install
   ```
   这会下载项目需要的所有代码库，可能需要几分钟。等完了继续。

3. 启动本地网站：
   ```bash
   npm run docs:dev
   ```
   看到类似 `Local: http://localhost:5173` 的信息，就说明成功了！

4. 用浏览器打开 `http://localhost:5173`，就能看到你的网站了。

---

## 第四步：自定义你的网站

### 改首页

打开 `docs/index.md` 这个文件，修改这些地方：

```markdown
hero:
  name: "改成你的项目名"
  text: "一句话说明你的网站是干什么的"
  tagline: "可选：放一些副标题或愿景描述"
  image:
    src: /你的logo.png
    alt: Logo 描述
```

**小贴士：** 图片放在 `docs/public/` 文件夹下，然后在 Markdown 里用 `/文件名` 引用。

### 改导航按钮

首页上那两个大按钮（"内容A" 和 "内容B"），也在 `docs/index.md` 里改：

```markdown
actions:
  - theme: brand
    text: 🚀 你的按钮名字
    link: /content_A/A1
  - theme: alt
    text: 📊 另一个按钮
    link: /content_B/B1
```

### 改功能特性

首页下面那块 features 区域，展示你网站的特色。也是在 `docs/index.md`：

```markdown
features:
  - title: 📖 你的特性1
    details: 简单描述一下
  - title: 📊 你的特性2
    details: 简单描述一下
```

---

## 第五步：添加你的内容

### 文件夹结构

项目预设了三个内容分类：
- `docs/content_A/` — 放第一类内容（比如教程）
- `docs/content_B/` — 放第二类内容（比如案例）
- `docs/content_C/` — 放第三类内容（比如资源）

### 怎么加文章

假设你想在 "内容A" 里加一篇文章：

1. 打开 `docs/content_A/` 文件夹
2. 新建一个 `.md` 文件（Markdown 格式），比如 `A2.md`
3. 写你的内容。最上面记得加标题：
   ```markdown
   # 这是文章标题
   
   ## 第一部分
   
   你的内容...
   
   ## 第二部分
   
   继续写...
   ```

4. 保存后回到浏览器刷新，侧边栏会自动显示你的新文章！

### 添加图片

1. 把图片放在 `docs/public/` 文件夹
2. 在 Markdown 里用这样的方式引用：
   ```markdown
   ![图片描述](/图片名.jpg)
   ```

---

## 第六步：实时调试和预览

### 热更新

当你在 VS Code 里改了任何内容，保存后浏览器会**自动刷新**，立即显示最新效果。这就是开发的快乐！

### 查看实时效果

- 本地命令行运行着 `npm run docs:dev`
- 浏览器打开 `http://localhost:5173`
- 改代码 → 保存 → 自动刷新

就这么简单。

### 停止开发服务器

在命令行里按 `Ctrl + C`（Mac 上是 `Command + C`），网站就停了。要重新启动，再输入 `npm run docs:dev` 就行。

---

## 第七步：构建和部署准备

### 本地构建

当你觉得网站差不多了，想看看构建后的样子：

```bash
npm run docs:build
```

这会在 `docs/.vitepress/dist/` 里生成纯 HTML 文件，是最终要上线的东西。

### 本地预览构建结果

```bash
npm run docs:preview
```

这会让你在本地看看最终网站的样子，对标上线的真实效果。

### 部署

构建完了，把 `docs/.vitepress/dist/` 文件夹里的内容上传到你的服务器或静态托管平台（比如 GitHub Pages、Vercel 等）。具体怎么部署你可以另外写教程 😉

---

## 一些常见问题

### Q: 改了东西但浏览器不更新？
A: 试试按 F5 或 Ctrl + R 强制刷新。如果还不行，检查一下命令行有没有报错。

### Q: 怎么改网站的导航栏、标题等？
A: 这些配置在 `docs/.vitepress/config.mts` 里。这个文件稍微复杂一点，但注释写得很清楚，配合 VitePress 官方文档看就行了。

### Q: 侧边栏的文章顺序怎么改？
A: VitePress 默认按字母顺序排列。要自定义顺序，需要在 `config.mts` 里手动配置侧边栏。

### Q: 可以用 markdown 写复杂的东西吗（比如代码高亮、表格）？
A: 完全可以！Markdown 支持代码块、表格、任务列表等，VitePress 还额外支持 Vue 组件。具体看[官方文档](https://vitepress.dev/guide/markdown)。

### Q: 项目文件夹可以删除或改名吗？
A: 慎重。`docs/` 里的 `.vitepress/` 文件夹和 `public/` 文件夹最好别动，其他的可以自由改。

---

## 项目结构速查

```
项目文件夹/
├── docs/                    # 网站内容（这是重点！）
│   ├── index.md            # 首页
│   ├── content_A/          # 内容分类 A
│   │   ├── A1.md
│   │   └── A2.md
│   ├── content_B/          # 内容分类 B
│   │   ├── B1.md
│   │   └── B2.md
│   ├── content_C/          # 内容分类 C
│   │   └── C1.md
│   ├── public/             # 静态文件（图片、logo 等）
│   └── .vitepress/         # VitePress 配置（重要！）
│       └── config.mts      # 站点配置文件
├── package.json            # 项目依赖和脚本
└── README.md               # 这个文件！
```

---

## 快速命令速查

| 命令 | 作用 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run docs:dev` | 启动本地开发服务器 |
| `npm run docs:build` | 构建生产版本 |
| `npm run docs:preview` | 预览构建结果 |

---

## 下一步建议

1. ✅ 完成首页自定义（改标题、logo、按钮）
2. ✅ 把你的内容分类放进对应文件夹
3. ✅ 本地跑 `npm run docs:dev` 实时预览
4. ✅ 调试到满意为止
5. ✅ 跑 `npm run docs:build` 生成最终版本
6. ✅ 部署到你选择的平台

---

## 遇到问题？

- 多试试 F5 刷新 😄
- 看看命令行有没有红色的错误信息
- VitePress 官方文档很友好：[vitepress.dev](https://vitepress.dev/)
- 还是不行？检查一下 Node.js 和 npm 的版本

---

**祝你创作愉快！** 🚀
