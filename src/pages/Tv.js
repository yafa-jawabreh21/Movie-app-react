import React from 'react'
import List from '../components/List'
import { useOutletContext } from 'react-router-dom'

function Tv() {
  const { series } = useOutletContext()

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
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
        Tv Series
      </div>

      {/* List */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <List type="tv" series={series} />
      </div>
    </div>
  )
}

export default Tv
