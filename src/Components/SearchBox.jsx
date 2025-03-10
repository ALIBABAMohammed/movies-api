import React from 'react'

function SearchBox(props) {
  return (
    <div className='serch-box bg-white d-flex justify-content-center align-items-center mx-4 rounded-pill'>
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="24" 
             height="24"
             color='black' 
             fill="none" viewBox="0 0 24 24" 
             strokeWidth={1.5} stroke="currentColor" 
             className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <input
            className='form-control border-0'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='Type to search...'
        ></input>
    </div>
  )
}

export default SearchBox