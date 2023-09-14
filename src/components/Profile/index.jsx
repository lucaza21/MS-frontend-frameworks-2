import React from 'react'

export default function Profile() {
  return (
    <>
    <div className='flex flex-col items-center justify-between w-1/4 mx-auto my-3 text-center '>
        <div className=''>
            <img src='/person.jpg' className='w-32 h-32 rounded-full shadow-lg' alt="profile"  />
        </div>
        <div>
            <h1 className='text-lg font-semibold'>@Luis</h1>
        </div>
        <div className='p-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.</p>
        </div>

    </div>
    </>
  )
}
