import Link from 'next/link'

export default function UserPage({ params }) {
  const { username } = params

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile (App Router)</h1>
      <p>用户名: <strong>{username}</strong></p>
      
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '5px' }}>
        <h3>用户信息 (模拟数据):</h3>
        <p>姓名: {username}</p>
        <p>邮箱: {username}@example.com</p>
        <p>注册时间: 2024-01-01</p>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>App Router 路由信息:</h3>
        <p>文件路径: <code>app/users/[username]/page.js</code></p>
        <p>路由参数: <code>{JSON.stringify(params)}</code></p>
      </div>

      <div>
        <Link href="/">← 返回首页</Link>
      </div>
    </div>
  )
} 