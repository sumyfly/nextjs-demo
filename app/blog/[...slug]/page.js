import Link from 'next/link'

export default function BlogPage({ params }) {
  const { slug } = params

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Post (App Router)</h1>
      
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <h3>Catch-all Route (捕获所有路由):</h3>
        <p>文件路径: <code>app/blog/[...slug]/page.js</code></p>
        <p>slug 数组: <code>{JSON.stringify(slug)}</code></p>
        <p>完整路径: <code>{slug ? slug.join('/') : ''}</code></p>
      </div>

      {slug && slug.length > 0 && (
        <div style={{ margin: '20px 0' }}>
          <h3>路径解析:</h3>
          <ul>
            {slug.map((segment, index) => (
              <li key={index}>
                第 {index + 1} 段: <strong>{segment}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h3>App Router 特性:</h3>
        <ul>
          <li>✅ 直接通过 <code>params</code> 获取路由参数</li>
          <li>✅ 无需 <code>useRouter</code> hook</li>
          <li>✅ 服务端组件优先</li>
          <li>✅ 支持 React 18 新特性</li>
        </ul>
      </div>

      <div>
        <Link href="/">← 返回首页</Link>
      </div>
    </div>
  )
} 