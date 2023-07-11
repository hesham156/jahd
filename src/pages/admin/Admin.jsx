import React from 'react'
import BlockSideNave from '../../component/nave/BlockSideNave'
import { Route, Routes } from 'react-router-dom'
import Setting from './Setting'
import Dashboard from './Dashboard'
import Categores from './Categores'
import style from '../../asset/css/admin/admin.module.css'
const Admin = () => {
  return (
    <div className={style.admin+ ' d-flex'}>
         <div>
                 <BlockSideNave/>
         </div>
         <div >
          <div className="container">
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/categores' element={<Categores/>}/>
                    <Route path='/' element={<Setting/>}/>
                </Routes>
                </div>
         </div>
    </div>
  )
}

export default Admin