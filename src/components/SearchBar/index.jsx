import React from 'react'

export default function SearchBar({author, filterAuthor}) {
  return (
    <>
  
    <div className='container w-4/5 py-3 mx-auto text-center '>
        <input type='text' placeholder='Search' className='px-3 text-3xl font-medium border border-gray-300 rounded-none xs:w-1/2 md:w-2/3 lg:w-3/4 text-black-700'
        onChange={(e) => filterAuthor(e.target.value)}
        value={author}></input>
    </div>
    </>
  )
}
