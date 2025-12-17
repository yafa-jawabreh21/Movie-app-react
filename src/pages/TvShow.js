import React from 'react'
import { useParams } from 'react-router-dom';
import Show from "../components/Show"
function TvShow() {
  const { id } = useParams();
  return (
    <Show id={id} type="series"/>
  )
}

export default TvShow
