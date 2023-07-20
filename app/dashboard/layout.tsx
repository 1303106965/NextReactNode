export const metadata = {
  title: 'space',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div>
            {children}
            <h4>dashboard layout</h4>
        </div>
  )
}