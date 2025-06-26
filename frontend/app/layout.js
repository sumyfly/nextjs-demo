export const metadata = {
  title: 'Next.js App Router Dynamic Routes Demo',
  description: 'Demo of dynamic routes using App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
} 