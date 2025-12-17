import React from 'react'
import List from '../components/List'
import { useOutletContext } from 'react-router-dom'

function Movie() {
  const { movies } = useOutletContext()

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div
        className="
          w-full 
          h-36 
          sm:h-40 
          md:h-48 
          bg-no-repeat 
          bg-cover 
          bg-center 
          flex 
          items-center 
          justify-center 
          text-white 
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          font-semibold
        "
      >
        Movies
      </div>

      {/* List */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <List type="movie" movies={movies} />
      </div>
    </div>
  )
}

export default Movie
