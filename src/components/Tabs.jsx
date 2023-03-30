"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"

function Tabs() {
    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")

    const tabs = [
        {
            name: "Popular",
            url: "popular"
        },
        {
            name: "Latest",
            url: "latest"
        },
        {
            name: "Up Coming",
            url: "upcoming"
        }
    ]

  return (
    <div className='p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-10'>
        {
            tabs.map((tab, i) => (
                <Link key={i} className={`cursor-pointer hover:opacity-75 ${tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`} href={`/?genre=${tab.url}`} >{tab.name}</Link>    
            ))
        }
    </div>
  )
}

export default Tabs