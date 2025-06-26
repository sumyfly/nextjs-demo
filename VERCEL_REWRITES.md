# Vercel Rewrites 最佳实践

## 🎯 为什么使用一条 Rewrite 规则？

### ❌ 错误方式 - 为每个路径写规则
```json
{
  "rewrites": [
    {
      "source": "/posts/:id",
      "destination": "/frontend/posts/:id"
    },
    {
      "source": "/users/:username",
      "destination": "/frontend/users/:username"
    },
    {
      "source": "/blog/:path*",
      "destination": "/frontend/blog/:path*"
    },
    {
      "source": "/api/:path*",
      "destination": "/frontend/api/:path*"
    }
    // ... 需要为每个路由都写一遍 😫
  ]
}
```

### ✅ 正确方式 - 一条规则搞定所有
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/frontend/$1"
    }
  ]
}
```

## 🔄 Rewrites vs Routes vs Redirects

### `rewrites` (内部重写，URL不变)
- **用途**: 将请求内部转发到不同路径
- **URL**: 用户看到的URL不变
- **SEO**: 搜索引擎索引原始URL
- **示例**: `/api/users` → `/frontend/api/users` (用户仍看到 `/api/users`)

### `redirects` (外部重定向，URL改变)
- **用途**: 永久或临时重定向到新URL
- **URL**: 用户看到新的URL
- **SEO**: 搜索引擎更新索引
- **示例**: `/old-blog` → `/blog` (用户看到 `/blog`)

### `routes` (Legacy，不推荐)
- **状态**: Vercel v1 时代的配置方式
- **推荐**: 迁移到 `rewrites` 和 `redirects`

## 🏗️ Monorepo 项目结构示例

```
your-project/
├── frontend/          # Next.js 应用
│   ├── app/          # App Router
│   ├── next.config.js
│   └── package.json
├── backend/          # API 服务 (可选)
├── docs/            # 文档 (可选)
├── vercel.json      # 部署配置
└── package.json     # 根配置
```

## 📋 完整的 vercel.json 配置

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  
  "name": "nextjs-dynamic-route-demo",
  "version": 2,

  "builds": [
    {
      "src": "frontend/next.config.js",
      "use": "@vercel/next"
    }
  ],

  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/frontend/$1"
    }
  ],

  "cleanUrls": true,
  "trailingSlash": false,
  "regions": ["hnd1", "iad1"]
}
```

## 🎯 高级 Rewrites 用例

### 1. API 代理
```json
{
  "rewrites": [
    {
      "source": "/api/external/:path*",
      "destination": "https://external-api.com/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/frontend/$1"
    }
  ]
}
```

### 2. 多域名支持
```json
{
  "rewrites": [
    {
      "source": "/admin/:path*",
      "destination": "/admin-app/:path*",
      "has": [
        {
          "type": "host",
          "value": "admin.yourdomain.com"
        }
      ]
    },
    {
      "source": "/(.*)",
      "destination": "/frontend/$1"
    }
  ]
}
```

### 3. 条件性重写
```json
{
  "rewrites": [
    {
      "source": "/feature/:path*",
      "destination": "/beta-frontend/:path*",
      "has": [
        {
          "type": "header",
          "key": "x-beta-user",
          "value": "true"
        }
      ]
    },
    {
      "source": "/(.*)",
      "destination": "/frontend/$1"
    }
  ]
}
```

## 🔧 调试 Rewrites

### 查看重写结果
1. 打开浏览器开发者工具
2. 查看 Network 面板
3. 观察请求的实际路径

### 常见问题
1. **路径匹配优先级**: Rewrites 按数组顺序执行，第一个匹配的规则生效
2. **循环重写**: 避免重写规则指向自身
3. **静态文件**: 静态文件请求不会被重写

## 🚀 性能优化

### 1. 减少重写规则数量
- ✅ 使用通配符 `(.*)` 和 `$1`
- ❌ 避免为每个路径写单独规则

### 2. 合理的匹配顺序
```json
{
  "rewrites": [
    // 最具体的规则在前
    {
      "source": "/api/special/:path*",
      "destination": "/special-handler/:path*"
    },
    // 通用规则在后
    {
      "source": "/(.*)",
      "destination": "/frontend/$1"
    }
  ]
}
```

## 📚 总结

对于Frontend在子目录的Next.js项目：

1. **使用 `rewrites` 而不是 `routes`**
2. **一条通用规则** `"/(.*)" → "/frontend/$1"`
3. **特殊需求才添加额外规则**
4. **注意规则顺序**

这样配置既简洁又高效！🎉 