import React from 'react'
import List from '../components/List'
import { useOutletContext } from 'react-router-dom'
function Movie() {
  const {movies} = useOutletContext()
  return (
    <>
      <div className='w-full h-full'>
          <div className='w-full h-36 bg-no-repeat bg-cover text-center text-white content-center text-xl font-semibold'>Movies</div>
          <List type="movie" movies={movies}/>
      </div>
    </>
  )
}

export default Movie
