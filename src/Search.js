import React, { useContext } from 'react'
import { AppContext } from './context'

 const Search = () => {
  const {query, setQuery}=useContext(AppContext)
  return (
    <div>

      <form className='flex justify-center my-6' onSubmit={(e)=>e.preventDefault()}>
      <input type="text" className='border-2 border-gray-400 rounded-lg px-4 py-2 w-1/2' value={query} onChange={(e)=>setQuery(e.target.value)}/>
      
      </form>
    </div>
  )
}

export default Search