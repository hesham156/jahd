import React from 'react'
import Nave from '../../component/nave/Nave'
import BlockSideNave from '../../component/nave/BlockSideNave'
import { Route, Routes } from 'react-router-dom'
import Setting from './Setting'

const Admin = () => {
  return (
    <div className='admin d-flex'>
      <div className='w-25'>
         <BlockSideNave/>
         </div>
         <div className='w-75'>
         <Routes>
            <Route path='/' element={<Setting/>}/>
         </Routes>
         </div>
    </div>
  )
}

export default Admin