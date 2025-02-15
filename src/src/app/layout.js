import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yapper Time',
  description: 'Discover the art of meaningful conversations with timed discussion prompts. Perfect for social gatherings, team building, and deeper connections.',
  openGraph: {
    title: 'Yapper Time',
    description: 'Discover the art of meaningful conversations with timed discussion prompts. Perfect for social gatherings, team building, and deeper connections.',
    images: [{
      url: 'https://res.cloudinary.com/dk9mn4cvz/image/upload/v1732164419/YapperTime-Conversation-Starters-Mariana-Oka_lwmdth.jpg',
    }],
  },
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