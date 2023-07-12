import React, { useState } from 'react'
import Logo from './Logo'
import Select from '../SelectList/Select'
import SideNave from './SideNave'
import Hamburger from 'hamburger-react'
import style from './blocksidenave.module.css'
const BlockSideNave = () => {
  const list = [{url:'/admin/',text:'Setting'},{url:'/admin/dashboard/',text:'dashboard'},{url:'/admin/categores/',text:'categores'}]
  const [active,setActive] = useState(false)
  return (
    <>
        <SideNave list={list} active={active}/>
        <div className='adminSide'>
            <div className='container'>
                <div className='logo'>
                  <Logo/>
                </div>
                <div className={style.lnks}>
                      <Select list={list} />
                      <Hamburger  onToggle={(e)=>{setActive(e)}}  easing="ease-in-out" color='#f2ab20' />
                </div>            
            </div>
        </div>
    </>
  )
}

export default BlockSideNave