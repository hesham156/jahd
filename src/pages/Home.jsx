import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import {RoadMaps,Course,LandingPage} from './AllPage'
import 'react-multi-carousel/lib/styles.css';
import GridSection from '../component/sections/GridSection';
import Admin from './admin/Admin';
import SearchNave from '../component/nave/SearchNave';

const Home = () => {
  
 

  
 
  return (
      <>
          <SearchNave/>

    <Routes>
    <Route path="/course/:courseid" element={<Course/>}/>
    <Route path="/road/:roadtype" element={<RoadMaps/>}/>
    <Route path="/road/" element={<GridSection src={'http://localhost:3004/roadsMap'}/>}/>
    <Route path="/course/" element={<GridSection src={'http://localhost:3004/courses'}/>}/>
    <Route path="/books/" element={<GridSection src={'http://localhost:3004/books'}/>}/>
    <Route path="/articls/" element={<GridSection src={'http://localhost:3004/articls'}/>}/>

    <Route path="/*" element={<LandingPage/>}/>
    </Routes>
      </>  
      

  )
}


export default Home