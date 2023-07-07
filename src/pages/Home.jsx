import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import {RoadMaps,Course,LandingPage} from './AllPage'
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  
 

  
 
  return (
      <>
    
    <Routes>
    <Route path="/course/:courseid" element={<Course/>}/>
    <Route path="/road/:roadtype" element={<RoadMaps/>}/>
    <Route path="/" element={<LandingPage/>}/>
    </Routes>
      </>  
      

  )
}


export default Home