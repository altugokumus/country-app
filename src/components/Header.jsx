import React from 'react'
import {BiSearch} from "react-icons/bi"
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import Link from 'next/link'

function Header() {

    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        }
    ]


  return (
    <div className='flex items-center gap-10 h-20 p-5'>
        <Link href={"/"} className='bg-amber-600 p-3 rounded-lg text-2xl font-bold'>CountryApp</Link>
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input placeholder='Country name' className='flex-1 outline-none bg-transparent' type="text" />
            <BiSearch size={25} /> 
        </div>
        <ThemeComp />
        {
        menu.map((Item, i)=>(
            <MenuItem Item={Item} key={i} />
        ))
        }
    </div>
    
  )
}

export default Header