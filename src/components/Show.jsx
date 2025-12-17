import React, { useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'

function Show({ id, type }) {
  const { series, movies } = useOutletContext()

  const dataresult = useMemo(() => {
    if (type === "series" && Array.isArray(series)) {
      return series.find(el => Number(el.id) === Number(id))
    }
    if (type === "movies" && Array.isArray(movies)) {
      return movies.find(el => Number(el.id) === Number(id))
    }
    return undefined
  }, [type, id, series, movies])

  return (
    <div
      className="
        w-full 
        min-h-screen 
        flex 
        flex-col 
        md:flex-row 
        justify-center 
        items-center 
        p-4 sm:p-8 md:p-16 
        text-white 
        bg-center 
        bg-no-repeat 
        bg-cover
      "
      style={{
        backgroundImage: `linear-gradient(to top, rgb(0,0,0), rgba(0,0,0,0.98), rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${process.env.PUBLIC_URL}/images${dataresult?.poster_path})`,
      }}
    >
      {dataresult ? (
        <>
          {/* Poster */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <img
              className="h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl object-cover"
              src={`${process.env.PUBLIC_URL}/images${dataresult.poster_path}`}
              alt={dataresult.original_name || dataresult.original_title}
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {dataresult.original_name || dataresult.original_title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="px-3 py-1 bg-red-600 rounded-full text-sm">Drama</div>
              <div className="px-3 py-1 bg-red-600 rounded-full text-sm">Crime</div>
            </div>
            <p className="text-sm sm:text-base md:text-lg">{dataresult.overview}</p>
          </div>
        </>
      ) : (
        <div>Loading or no data...</div>
      )}
    </div>
  )
}

export default Show
