import React from 'react'
import Nave from '../component/nave/Nave';
import Carousel from 'react-multi-carousel';
import video1 from '../asset/video/1.mp4'
import GridSection from '../component/sections/GridSection';
import SideNave from '../component/nave/SideNave';
import { useState } from 'react';
import { useEffect } from 'react';

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
    const serch = {
            top: "55px",
            position: "absolute",
            right: "15px",
            background: "white",
            zIndex: 111111111111111,
            color: "black",
            cursor: "pointer",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            textAlign: "center",
            lineHeight: 0,
        }
        useEffect(()=>{
            console.log(active)
        },[active])
  return (
    <div>
        <button style={serch}>O</button>
        <SideNave active={active}/>
      <Nave sideMenu={setActive}/>
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