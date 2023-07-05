import React from 'react'
import GridSection from '../component/sections/GridSection'
import { useParams } from 'react-router-dom'

const RoadMaps = () => {
    const type = useParams('roadtype')
   console.log(type);
  return (
    <div>
        <GridSection src={`http://localhost:3004/courses?type=${type.roadtype}`}/>
    </div>
  )
}

export default RoadMaps