
import React, { useState } from 'react'
import { FaHeart, FaRegCommentAlt } from "react-icons/fa";



export default function Post({post: {image, author, description, date,likes, comments}}) {

    const [count, setCount] = useState(0)
  return (
    <>
        
        <div className='flex flex-col items-center justify-center m-3 hover:scale-110' >
            <div className='shadow-xl'>
                <img src={image} alt={image} className='w-full rounded-t-lg'></img>
            </div>
            <div className='flex flex-col justify-end p-2 border-b-2 border-indigo-300 border-solid rounded-b-lg h-2/3 border-x-2'>
                
                <div className='flex flex-row items-center justify-between w-full'>
                    <p className='text-sm font-medium text-slate-500'>{date}</p>
                    <button className='flex flex-row items-center justify-between w-auto h-8 text-white bg-red-500 rounded-md'
                    onClick={()=> setCount(count +1)}>
                        <FaHeart className='mx-1'/> 
                        <div className='mx-1'>{count}</div>
                    </button>
                </div>
                <h3 className='self-start my-2 text-xl font-medium text-neutral-800'>@{author}</h3>
                <p className='my-2 overflow-hidden grow text-neutral-600'>{description}</p>
                <div className='flex flex-row items-center w-full'>
                    <div className='flex flex-row items-center w-auto h-8 text-xs font-medium rounded-md text-slate-500'>
                        <FaRegCommentAlt className='mx-1'/> 
                        <button className='mx-1'>{comments}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
