import React from 'react'
import { useParams } from 'react-router-dom';
import Show from "../components/Show"
function MovieShow() {
  const { id } = useParams();
  return (
    <Show id={id} type="movies"/>
  )
}

export default MovieShow
