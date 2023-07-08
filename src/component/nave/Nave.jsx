import React, { useState } from 'react'
import style from './nave.module.css'
import data from '../../data/data.json'
import gif from '../../asset/video/gif.gif'
import Hamburger from 'hamburger-react'
import logo from '../../asset/img/logo.png'
import SideNave from './SideNave'
import Social from './Social'
const Nave = () => {
    document.title=data.site.siteName;
   const [active,setActive]= useState(false)
   const [sActive,setSActive]= useState(false)

   return (
    <>
    <SideNave active={active}/>
    <Social active={sActive}/>
    <div className={style.nave}>
         <div className=' h-100 w-100'>
            <div className='d-flex flex-column w-100 h-100'>
             <div className={style.logo + ' logo h-25'}>
                {data.site.siteLogo?<img className={style.logoImg } src={logo} alt={data.site.siteName}/>:<h1 className={style.logoName}>{data.site.siteName}</h1>}
             </div>
             <div className={style.menu + ' logo h-25'}>
               <div className='menu'>
                    <Hamburger  onToggle={(e)=>{setActive(e)}} easing="ease-in-out" color='#fff' />
               </div>
             </div>
             <div className={style.follow + ' logo h-25'}>
               <h4 onClick={()=>{setSActive(sActive?false:true)}} style={{transform:"rotate(-90deg)",color: "white",fontSize: "15px"}}>Follow US</h4>
             </div>
             {/* <div className={style.search + ' w-50'}>
             <MDBCol md="12" className={style.searchBar}>
                  <input className="form-control" type="text" placeholder="ابحث" aria-label="ابحث" />
                  <button onClick={()=>{
                  toast.success("runn",{theme: "dark",})
                  }} type='submit'>بحث</button>
             </MDBCol>
             </div> */}
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