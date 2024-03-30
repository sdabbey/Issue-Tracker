import '@radix-ui/themes/styles.css'
import './theme-config.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import { Theme, ThemePanel } from '@radix-ui/themes'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Issue App',
  description: 'First NextJS Application',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.variable}>
        <Theme appearance="dark" accentColor="purple">
        
          <Navbar/>
          <main className='p-5'>
            {children}
          </main>
          
        </Theme>
      </body>
    </html>
  )
}
