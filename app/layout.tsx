// app/layout.tsx
import './globals.css' // se você estiver usando Tailwind ou algum CSS global
import { ReactNode } from 'react'

export const metadata = {
  title: 'Meu Blog',
  description: 'Blog pessoal com Next.js 15',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
