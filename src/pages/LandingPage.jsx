import React, { useState } from 'react'
import Nave from '../component/nave/Nave';
import Carousel from 'react-multi-carousel';
import video1 from '../asset/video/1.mp4'
import GridSection from '../component/sections/GridSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const LandingPage = () => {
    const [active,setActive] = useState(false)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      
  return (
    <div>
      <div className={(active?'isActive':'')+' topIcons'}>
        <button ><FontAwesomeIcon icon={faUser} /></button>
        <button ><FontAwesomeIcon icon={faSearch} /></button>
        <button onClick={()=>{setActive(active?false:true)}} >{active?'-':'+'}</button>
        </div>


      <Nave/>
      <Carousel  arrows={false} responsive={responsive} infinite={true} autoPlay={true}> 
     <div>
     <div className='overlay2'></div>
     <video style={{height: "100vh",objectFit: "fill"}}   loop={true}  autoPlay={true} width="100%">
      <source src={video1} />
     </video>
     </div>
   
      </Carousel>
      <GridSection src={'http://localhost:3004/roadsMap'}/>

       </div>
  )
}

export default LandingPage