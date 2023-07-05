import React from 'react'
import Nave from '../component/nave/Nave'
import GridSection from '../component/sections/GridSection'
import { Link, Route, Routes } from 'react-router-dom'
import {RoadMaps,Course} from './AllPage'

const Home = () => {
  return (
      <>
      <Nave/>
     
    <Routes>
    <Route path="/course/:courseid" element={<Course/>}/>
    <Route path="/road/:roadtype" element={<RoadMaps/>}/>
    <Route path="/" element={<GridSection src={'http://localhost:3004/roadsMap'}/>}/>

    </Routes>
      </>  
      

  )
}


export default Home