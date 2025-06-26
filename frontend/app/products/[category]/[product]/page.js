import Link from 'next/link'

export default function ProductPage({ params }) {
  const { category, product } = params

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Page (App Router)</h1>
      
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0fff0', borderRadius: '5px' }}>
        <h3>产品信息:</h3>
        <p>类别: <strong>{category}</strong></p>
        <p>产品: <strong>{product}</strong></p>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>嵌套动态路由:</h3>
        <p>文件路径: <code>app/products/[category]/[product]/page.js</code></p>
        <p>所有参数: <code>{JSON.stringify(params)}</code></p>
        <p>URL 结构: <code>/products/{category}/{product}</code></p>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#ffe4e1', borderRadius: '5px' }}>
        <h3>App Router 嵌套路由优势:</h3>
        <ul>
          <li>✅ 清晰的文件夹结构</li>
          <li>✅ 多层动态参数支持</li>
          <li>✅ 每层可以有自己的布局</li>
          <li>✅ 自动代码分割</li>
        </ul>
      </div>

      <div>
        <Link href="/">← 返回首页</Link>
      </div>
    </div>
  )
} 