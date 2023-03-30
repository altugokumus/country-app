import React from 'react'
import Countries from '@/components/Countries';

const Page = async({searchParams}) => {

    
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    
    const data = await res.json();

  return (
    <div className='flex justify-center flex-wrap'>
        {
            data?.map((dt, i) =>(
                <Countries key={i} dt={dt} />
            ))
        }
        
    </div>
  )
}

export default Page