# pb-blog

blog powerd by Next.js

markdown 编辑/阅读器使用 [milkdown](https://milkdown.dev/docs/guide/why-milkdown)

## 一期

需求：

1. 头部展示导航栏
2. 展示 markdown 文章列表
   1. 文章列表分页
   2. 文章详情按照 github 样式风格展示，左侧提供锚点定位、
   3. 文章支持标题搜索

前端功能点：

- 布局（头 + body + 底）

  1. 头部：导航栏【多级菜单】（文章类别） + 搜索框

- 首页

  1. 最近十篇文章
  2. 文章列表采用图文方式
  3. 分页

- 文章搜索页

  1. 分页
  2. 按标签搜索、按类别搜索

- 文章上传页面

  1. 身份校验
  2. md 文档上传功能

- 全局

  1. 回到顶部按钮
  2. 管理员登录入口
  3. 密码输入框

后端接口：

1. 首页最近十篇文章查询
2. 按条件分页查询接口
3. md 文件上传接口
4. 登录接口
