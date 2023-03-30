"use client"
import React, {useState, useEffect} from 'react'
import {CiDark} from "react-icons/ci"
import { useTheme } from 'next-themes'
import {BsSun} from "react-icons/bs"

function ThemeComp() {
    const [mounted, setMounted] = useState(false)
    const { systemTheme ,theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])

      const themeMode = theme === "system" ? systemTheme : theme

  return (
    
    <div>
        {
        mounted && (
            themeMode === "dark" ?
            <BsSun onClick={() => setTheme("light")} className='cursor-pointer' size={25} /> :
            <CiDark onClick={() => setTheme("dark")} className='cursor-pointer' size={25} />
        )
    }
    </div>
  )
}

export default ThemeComp