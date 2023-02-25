import './globals.css'

export const metadata = {
  title: 'web.developer',
  description: 'web.developer - freelance development, freelance cloud consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='page-top'>{children}</body>
    </html>
  )
}
