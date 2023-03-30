"use client"
import React from 'react'

const Countries = ({dt}) => {

    console.log(dt.name.common);

  return (

    <div className=" flex rounded-lg items-center justify-center m-1 container w-1/5 p-1">
      <div className="card">
        <img src={dt.flags.png} alt="flag" />
        <p className='flex flex-wrap break-normal'>{dt.name.common}</p>
      </div>
    </div>
    
  )
}

export default Countries;