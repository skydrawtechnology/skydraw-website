import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
