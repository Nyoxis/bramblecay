import '../styles/globals.css'
import React from 'react'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Vollkorn:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}

export default RootLayout