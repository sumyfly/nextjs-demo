# Vercel.json 配置参数详解

## 📋 基础配置

### `$schema`
- **类型**: `string`
- **说明**: JSON Schema URL，提供IDE自动补全和验证
- **示例**: `"https://openapi.vercel.sh/vercel.json"`

### `name`
- **类型**: `string`
- **说明**: 项目名称，会显示在Vercel仪表板
- **示例**: `"nextjs-dynamic-route-demo"`

### `version`
- **类型**: `number`
- **说明**: Vercel平台版本，推荐使用2
- **默认值**: `2`

## 🏗️ 构建配置

### `build`
- **类型**: `object`
- **说明**: 构建环境配置
- **子配置**:
  - `env`: 构建时环境变量

### `buildCommand`
- **类型**: `string`
- **说明**: 自定义构建命令
- **默认值**: 根据框架自动检测
- **示例**: `"npm run build"`

### `outputDirectory`
- **类型**: `string`
- **说明**: 构建输出目录
- **默认值**: 根据框架自动检测
- **示例**: `".next"`

### `installCommand`
- **类型**: `string`
- **说明**: 依赖安装命令
- **默认值**: 自动检测包管理器
- **示例**: `"npm install"`

### `devCommand`
- **类型**: `string`
- **说明**: 开发服务器启动命令
- **示例**: `"npm run dev"`

### `framework`
- **类型**: `string`
- **说明**: 框架类型，帮助Vercel优化部署
- **可选值**: `"nextjs"`, `"create-react-app"`, `"vue"`, `"nuxtjs"`, 等
- **示例**: `"nextjs"`

## ⚡ 函数配置

### `functions`
- **类型**: `object`
- **说明**: Serverless函数配置
- **子配置**:
  - `runtime`: 运行时环境 (`"nodejs18.x"`, `"nodejs16.x"`, `"python3.9"`, 等)
  - `maxDuration`: 最大执行时间（秒）
  - `memory`: 内存大小（MB）
  - `regions`: 部署区域

## 🌐 路由配置

### `routes`
- **类型**: `array`
- **说明**: 自定义路由规则
- **属性**:
  - `src`: 源路径（支持正则）
  - `dest`: 目标路径
  - `status`: HTTP状态码
  - `headers`: 自定义响应头

### `rewrites`
- **类型**: `array`
- **说明**: URL重写规则（内部跳转，URL不变）
- **属性**:
  - `source`: 源路径
  - `destination`: 目标路径

### `redirects`
- **类型**: `array`
- **说明**: URL重定向规则（外部跳转，URL改变）
- **属性**:
  - `source`: 源路径
  - `destination`: 目标路径
  - `permanent`: 是否永久重定向（301 vs 302）
  - `statusCode`: 自定义状态码

## 🔒 安全配置

### `headers`
- **类型**: `array`
- **说明**: 自定义HTTP响应头
- **常用安全头**:
  - `X-Content-Type-Options: nosniff` - 防止MIME类型嗅探
  - `X-Frame-Options: DENY` - 防止点击劫持
  - `X-XSS-Protection: 1; mode=block` - XSS保护
  - `Referrer-Policy` - 引用策略
  - `Permissions-Policy` - 权限策略
  - `Content-Security-Policy` - 内容安全策略

## 🌍 环境与部署

### `env`
- **类型**: `object`
- **说明**: 生产环境变量
- **注意**: 敏感信息应在Vercel仪表板设置

### `regions`
- **类型**: `array`
- **说明**: 部署区域列表
- **可选值**: 
  - `"iad1"` - 美国东部（弗吉尼亚）
  - `"hnd1"` - 亚洲（东京）
  - `"fra1"` - 欧洲（法兰克福）
  - `"sfo1"` - 美国西部（旧金山）

## 🎨 URL美化

### `cleanUrls`
- **类型**: `boolean`
- **说明**: 移除URL中的.html扩展名
- **默认值**: `false`
- **示例**: `/about.html` → `/about`

### `trailingSlash`
- **类型**: `boolean`
- **说明**: URL末尾是否添加斜杠
- **默认值**: `false`
- **示例**: `/about` vs `/about/`

## 🐙 Git集成

### `github`
- **类型**: `object`
- **说明**: GitHub集成配置
- **子配置**:
  - `enabled`: 启用GitHub集成
  - `autoAlias`: 自动为分支创建别名

## ⏰ 定时任务

### `crons`
- **类型**: `array`
- **说明**: 定时任务配置（需要Pro计划）
- **属性**:
  - `path`: API路径
  - `schedule`: Cron表达式

## 🖼️ 图片优化

### `images`
- **类型**: `object`
- **说明**: Next.js图片优化配置
- **子配置**:
  - `domains`: 允许的外部图片域名
  - `sizes`: 响应式图片尺寸
  - `formats`: 支持的图片格式
  - `minimumCacheTTL`: 最小缓存时间
  - `dangerouslyAllowSVG`: 是否允许SVG

## ⚡ Edge Functions

### `edge`
- **类型**: `object`
- **说明**: Edge Functions配置
- **子配置**:
  - `regions`: Edge部署区域

## 🔄 增量静态再生成

### `isr`
- **类型**: `object`
- **说明**: ISR配置
- **子配置**:
  - `expiration`: 缓存过期时间（秒）
  - `allowQuery`: 允许的查询参数

## 🔧 高级配置

### `outputFileTracing`
- **类型**: `boolean`
- **说明**: 启用文件跟踪优化
- **默认值**: `true`

### `public`
- **类型**: `boolean`
- **说明**: 项目是否公开可见
- **默认值**: `false`

### `source`
- **类型**: `string`
- **说明**: 源代码路径模式
- **默认值**: `"**"`

### `ignoreCommand`
- **类型**: `string`
- **说明**: 跳过构建的条件命令
- **示例**: `"git diff --quiet HEAD^ HEAD ./"`

### `nodeVersion`
- **类型**: `string`
- **说明**: Node.js版本
- **可选值**: `"18.x"`, `"16.x"`, `"14.x"`

### `supportsResponseStreaming`
- **类型**: `boolean`
- **说明**: 支持响应流
- **默认值**: `false`

### `middleware`
- **类型**: `object`
- **说明**: Next.js中间件配置
- **子配置**:
  - `matcher`: 匹配路径模式

## 📚 使用建议

### 最小配置
```json
{
  "version": 2,
  "framework": "nextjs"
}
```

### 生产环境推荐配置
```json
{
  "version": 2,
  "framework": "nextjs",
  "regions": ["iad1", "hnd1"],
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## ⚠️ 注意事项

1. **环境变量安全**: 敏感信息不要写在`vercel.json`中
2. **区域选择**: 根据用户地理位置选择合适的区域
3. **缓存策略**: 合理设置缓存时间
4. **安全头**: 生产环境务必添加安全响应头
5. **文件大小**: `vercel.json`文件不应过大 