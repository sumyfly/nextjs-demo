import Link from 'next/link'

export default function PostPage({ params }) {
  const { id } = params

  return (
    <div style={{ padding: '20px' }}>
      <h1>Post Page (App Router)</h1>
      <p>当前帖子ID: <strong>{id}</strong></p>
      
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>App Router 动态路由信息:</h3>
        <p>文件路径: <code>app/posts/[id]/page.js</code></p>
        <p>路由参数: <code>{JSON.stringify(params)}</code></p>
        <p>参数获取: 通过 <code>params</code> prop 直接获取</p>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <h3>App Router vs Pages Router:</h3>
        <ul>
          <li>✅ App Router: <code>function PostPage({`{ params }`})</code></li>
          <li>❌ Pages Router: <code>const router = useRouter(); const {`{ id }`} = router.query</code></li>
        </ul>
      </div>

      <div>
        <Link href="/">← 返回首页</Link>
      </div>
    </div>
  )
} 