import { Inter } from 'next/font/google'
import './globals.css'
import ConversationStarters from '../../components/ConversationStarters';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yappertime - Conversation Starters',
  description: 'Fun conversation starters for any social situation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}