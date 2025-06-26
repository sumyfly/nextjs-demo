# Next.js App Router Dynamic Route Demo

一个简单的Next.js项目，使用**App Router**演示动态路由功能。

## 项目结构 (App Router)

```
nextjs-demo/
├── app/
│   ├── layout.js                   # 根布局
│   ├── page.js                     # 主页
│   ├── posts/
│   │   └── [id]/
│   │       └── page.js             # 动态路由：/posts/1, /posts/hello 等
│   ├── users/
│   │   └── [username]/
│   │       └── page.js             # 动态路由：/users/john, /users/jane 等
│   ├── blog/
│   │   └── [...slug]/
│   │       └── page.js             # 捕获所有路由：/blog/2023/12/post 等
│   └── products/
│       └── [category]/
│           └── [product]/
│               └── page.js         # 嵌套动态路由
├── package.json
├── next.config.js
└── README.md
```

## App Router 动态路由示例

### 1. 基础动态路由 `app/posts/[id]/page.js`
- 访问 `/posts/1` → 显示 Post ID: 1
- 访问 `/posts/hello-world` → 显示 Post ID: hello-world

### 2. 命名参数动态路由 `app/users/[username]/page.js`
- 访问 `/users/john` → 显示用户: john
- 访问 `/users/jane` → 显示用户: jane

### 3. 捕获所有路由 `app/blog/[...slug]/page.js`
- 访问 `/blog/2023/12/my-post` → slug: ["2023", "12", "my-post"]
- 访问 `/blog/category/tech` → slug: ["category", "tech"]

### 4. 嵌套动态路由 `app/products/[category]/[product]/page.js`
- 访问 `/products/electronics/laptop` → category: "electronics", product: "laptop"
- 访问 `/products/books/javascript` → category: "books", product: "javascript"

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## App Router 路由文件命名规则

- `app/posts/[id]/page.js` - 单个动态参数
- `app/blog/[...slug]/page.js` - 捕获所有路由参数（作为数组）
- `app/docs/[[...slug]]/page.js` - 可选的捕获所有路由参数
- `app/products/[category]/[product]/page.js` - 嵌套动态路由

## App Router 中获取路由参数

```javascript
// App Router 方式 (推荐)
export default function DynamicPage({ params }) {
  const { id, slug } = params
  
  return <div>参数: {id}</div>
}
```

## App Router vs Pages Router 对比

| 特性 | App Router | Pages Router |
|------|------------|--------------|
| 目录结构 | `app/posts/[id]/page.js` | `pages/posts/[id].js` |
| 参数获取 | `{ params }` prop | `useRouter().query` |
| 布局系统 | 嵌套布局 | `_app.js` 全局布局 |
| 服务端组件 | ✅ 默认支持 | ❌ 需要特殊配置 |
| 文件约定 | `page.js`, `layout.js`, `loading.js` | `index.js`, `_app.js`, `_document.js` | 