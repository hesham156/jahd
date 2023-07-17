import React, { useState } from 'react'
import style from './cssModule/categores.module.css'
const Categores = () => {
const [cName,setCName] = useState();
const [cUrl,setCUrl] = useState();
const [cType,setCType] = useState();
const [cInstr,setCInstr] = useState();

  return (
    <div className={style.categores}>
        <div className='container'>
            <div className='form p-2 rounded-2 bg-white'>
                <form action="" className='d-flex justify-content-center align-items-center flex-wrap gap-1'> 
                   <input className='input ' type="text" placeholder='name' name='' onChange={(e)=>{setCName(e.target.value)}}/>
                   <input className='input ' type="text" placeholder='email' name='' onChange={(e)=>{setCUrl(e.target.value)}}/>
                   <input className='input ' type="text" placeholder='pass' name='' onChange={(e)=>{setCType(e.target.value)}}/>
                   <input className='input ' type="text" placeholder='user' name='' onChange={(e)=>{setCInstr(e.target.value)}}/>
                   {/* <input className='input ' type="text" placeholder='ff' name='' onChange={(e)=>{setC(e.target.value)}}/>
                   <input className='input ' type="text" placeholder='ff' name='' onChange={(e)=>{setC(e.target.value)}}/> */}
                   <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Categores