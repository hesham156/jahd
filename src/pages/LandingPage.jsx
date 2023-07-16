import React, { useState } from 'react'
import Nave from '../component/nave/Nave';
import Carousel from 'react-multi-carousel';
import video1 from '../asset/video/1.mp4'
import GridSection from '../component/sections/GridSection';
import SearchNave from '../component/nave/SearchNave';



const LandingPage = () => {
    const responsive = {
        superLargeDesktop: {
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
     

    
      <Nave />
      <Carousel  arrows={false} responsive={responsive} infinite={true} autoPlay={true}> 
     <div>
     <section>
         Welcome in my site
     </section>
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