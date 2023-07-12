import React, { useState } from 'react'
import style from './nave.module.css'
import data from '../../data/data.json'
import gif from '../../asset/video/gif.gif'
import Hamburger from 'hamburger-react'
import SideNave from './SideNave'
import Social from './Social'
import BtnNave from './BtnNave'
import Logo from './Logo'
const Nave = () => {
    document.title=data.site.siteName;
   const [active,setActive]= useState(false)
   const [sActive,setSActive]= useState(false)
   const data = [{id:1,text:"home",url:"/#"},{id:2,text:"road maps",url:'/road/'},{id:3,text:"courses",url:'/courses/'},{id:3,text:"books",url:'/books/'},{id:3,text:"articls",url:'/articls/'},{id:4,text:"login",url:'/login/'}]

   return (
    <>
    <BtnNave/>
    <SideNave active={active} list={data}/>
    <Social active={sActive} />
    <div className={style.nave}>
         <div className=' h-100 w-100'>
            <div className='d-flex flex-column w-100 h-100'>
             <Logo/>
             <div className={style.menu + ' logo h-25'}>
               <div className='menu'>
                    <Hamburger  onToggle={(e)=>{setActive(e)}} easing="ease-in-out" color='#fff' />
               </div>
             </div>
             <div className={style.follow + ' logo h-25'}>
               <h4 onClick={()=>{setSActive(sActive?false:true)}} style={{transform:sActive?"rotate(-90deg)":"rotate(0deg)",color: "white",fontSize: "15px"}}>Follow US</h4>
             </div>
             <div className={style.lnks + ' h-25'}>
                   <img src={gif} width="50%"/>
             </div>
             </div>
         </div>
    </div>
    </>
  )
}

export default Nave