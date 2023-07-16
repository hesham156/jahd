import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import style from './cssModule/btnnave.module.css'
const BtnNave = () => {
    const [active,setActive] = useState(false)
    const [sOpen,setsOpen] = useState(false)

  return (
    <div>
         <div className={(active?'isActive':'')+' topIcons'}>
            
        <button ><FontAwesomeIcon icon={faUser} /></button>
        <button onClick={()=>{setsOpen(sOpen?false:true)}} ><FontAwesomeIcon icon={faSearch} /></button>
        <button onClick={()=>{setActive(active?false:true)}} >{active?'-':'+'}</button>
        </div>
        <div className={(sOpen?style.activeSearch:"")+' '+style.search} >
            <div className={style.searchOverlay}></div>
             <form>
                <input type="text" />
             </form>
        </div>
    </div>
  )
}

export default BtnNave