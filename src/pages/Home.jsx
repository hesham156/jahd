import React from 'react'
import Nave from '../component/nave/Nave'
import GridSection from '../component/sections/GridSection'
import { Link, Route, Routes } from 'react-router-dom'
import Course from './Course'

const Home = () => {
  return (
      <>
      <Nave/>
     
    <Routes>
    <Route path="/course/:courseid" element={<Course/>}/>
    <Route path="/" element={<GridSection/>}/>

    </Routes>
      </>  
      

  )
}


export default Home