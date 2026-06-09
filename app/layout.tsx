export const metadata = {
  title: 'Process Analyser — Umbrella Suite',
  description: 'At Umbrella, things are done differently.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#0f0f0f', margin: 0, padding: 0 }}>
      <body style={{ backgroundColor: '#0f0f0f', margin: 0, padding: 0, color: '#f0ede6' }}>
        {children}
      </body>
    </html>
  )
}
