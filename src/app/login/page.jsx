import React from 'react'

const Page = () => {
  return (
    <div className='flex justify-center m-20'>
        <form action="">
            <div>
                <input placeholder='Email address' className='p-5 m-1 bg-transparent rounded-lg bg-orange-100' type="text" />
            </div>
            <div>
                <input placeholder='Password' className='p-5 m-1 bg-transparent rounded-lg bg-orange-100' type="text" />
            </div>
            <div className='flex justify-center'>
                <button className='flex rounded-lg justify-center p-1 m-2 w-4/5 bg-orange-500'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Page