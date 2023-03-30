import React from 'react'
import "./globals.css"
import Header from '@/components/Header'
import Providiers from './Providiers' 
import Tabs from '@/components/Tabs'
import Countries from '@/components/Countries'

function Layout({children}) {
  return (
    
    <html lang="en">
        <body>
            <Providiers>
            <Header />
            <Tabs />
            {children}
            </Providiers>
        </body>
    </html>
  )
}

export default Layout