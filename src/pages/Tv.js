import React from 'react'
import List from '../components/List'
import { useOutletContext } from 'react-router-dom'
function Tv() {
  const {series} = useOutletContext()
  return (
    <>
      <div className='list'>
          <div className='list-image'>Tv Series</div>
          <List type="tv" series={series}/>
      </div>
    </>
  )
}

export default Tv
