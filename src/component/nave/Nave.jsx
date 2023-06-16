import React from 'react'
import style from './nave.module.css'
import { Link } from 'react-router-dom'
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { MDBCol } from "mdbreact";

const Nave = () => {
    document.title=data.site.siteName;
  return (
    
    <div className={style.nave}>
         <div className='container'>
            <div className='d-flex flex-row'>
             <div className={style.logo + ' w-25'}>
                {data.site.siteLogo?<img className={style.logoImg} src={data.site.siteLogo} alt={data.site.siteName}/>:<h1 className={style.logoName}>{data.site.siteName}</h1>}
             </div>
             <div className={style.search + ' w-50'}>
             <MDBCol md="12">
                  <input className="form-control" type="text" placeholder="ابحث" aria-label="ابحث" />
             </MDBCol>
             </div>
             <div className={style.lnks + ' w-25'}>
                <ul>
                    <li><FontAwesomeIcon icon={faUser} />
                         <ul>
                                <li> <Link to='/login'>دخول</Link></li>
                                <li> <Link to='/register'>انشاء حساب</Link></li>
                         </ul>
                    </li>
                
                </ul>
             </div>
             </div>
         </div>
    </div>
  )
}

export default Nave