import React from 'react'
import BlockSideNave from '../../component/nave/BlockSideNave'
import { Route, Routes } from 'react-router-dom'
import Setting from './Setting'
import Dashboard from './Dashboard'
import Categores from './Categores'

const Admin = () => {
  return (
    <div className='admin d-flex'>
      <div className='w-25'>
         <BlockSideNave/>
         </div>
         <div className='w-75'>
         <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/categores' element={<Categores/>}/>
            <Route path='/' element={<Setting/>}/>
         </Routes>
         </div>
    </div>
  )
}

export default Admin