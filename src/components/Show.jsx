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
    <div className='flex justify-center p-[15%] text-white h-fit bg-center bg-no-repeat bg-cover' style={{
                  backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL}/images${dataresult.poster_path})`,
                }}  >
      {dataresult ? (
        <>
            <div className='w-[36%] h-fit' key={id}>
            <img className='h-[356px] rounded-[29px]' src={`${process.env.PUBLIC_URL}/images${dataresult.poster_path}`} alt='' />
          </div>
          <div className='w-[44%] h-fit'>
            <h1>{dataresult.original_name || dataresult.original_title}</h1>
            <div className='flex flex-wrap'>
              <div className='type'>Drama</div>
              <div className='type'>Crime</div>
            </div>
            <p>{dataresult.overview}</p>
          </div>
        </>
      ) : (
        <div>Loading or no data...</div>
      )}
    </div>
  )
}

export default Show
