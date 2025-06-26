import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Next.js App Router - Dynamic Routes Demo</h1>
      
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '5px' }}>
        <h3>🆕 使用 App Router (app/ 目录)</h3>
        <p>这是Next.js 13+的新路由系统，不同于传统的 pages/ 目录</p>
      </div>

      <h2>Dynamic Routes Examples:</h2>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Posts (基础动态路由):</h3>
        <ul>
          <li><Link href="/posts/1">Post 1</Link></li>
          <li><Link href="/posts/2">Post 2</Link></li>
          <li><Link href="/posts/hello-world">Post: hello-world</Link></li>
        </ul>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Users (另一个动态路由):</h3>
        <ul>
          <li><Link href="/users/john">User: john</Link></li>
          <li><Link href="/users/jane">User: jane</Link></li>
        </ul>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Blog (Catch-all Routes):</h3>
        <ul>
          <li><Link href="/blog/2023/12/my-first-post">Blog: 2023/12/my-first-post</Link></li>
          <li><Link href="/blog/2024/01/another-post">Blog: 2024/01/another-post</Link></li>
        </ul>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Products (嵌套动态路由):</h3>
        <ul>
          <li><Link href="/products/electronics/laptop">Electronics → Laptop</Link></li>
          <li><Link href="/products/books/javascript">Books → JavaScript</Link></li>
        </ul>
      </div>
    </div>
  )
} 