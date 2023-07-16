import React from 'react'
import style from './cssModule/logo.module.css'
import logo from '../../asset/img/logo.png'
import data from '../../data/data.json'

const Logo = () => {
  return (
    <div className={style.logo + ' logo h-25 d-flex justify-content-center align-item-center'}>
                {data.site.siteLogo?<img className={style.logoImg } src={logo} alt={data.site.siteName}/>:<h1 className={style.logoName}>{data.site.siteName}</h1>}
             </div>
  )
}

export default Logo