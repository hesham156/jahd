import React from 'react'
import style from '../asset/css/login/login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import GoogleBtn from '../component/button/GoogleBtn'
import FacebookBtn from '../component/button/FacebookBtn'
import { useState } from 'react'
import useGet from '../hook/useGet'
import { toast } from 'react-toastify'
const Login = () => {
  const lang = 'ar'
  const trans =(value)=>{
      return value
  }
  const [login,setLogin] = useState({})
  return (
    <div dir={lang==='ar'?'rtl':'ltr'} className={style.login + ' d-flex justify-content-center align-items-center'}>
    <div className='overlay'></div>
      <div className="container z-3">
        <div  className='forUser d-flex flex-column justify-content-center align-items-center '>
           <div className="logo w-100 text-center">
              <h1>جَاهِد</h1> 
            </div>
           <form  action="" className='d-flex justify-content-center align-items-center flex-column'>
               <input type="text" name="name" placeholder={trans('الايميل')} id="" />
               <input type="password" name="password" placeholder={trans('كلمه السر')} id="" />
               <button type='submit'>{trans('دخول')}</button>
           </form>
            {trans('او استخدم')}
           <div className="socialLogin d-flex justify-content-center align-items-center">
                <div className='googleLogin'>
                       <GoogleBtn login={setLogin}  value={ <FontAwesomeIcon icon={faGoogle} />}/>
                </div>
                <div className='facebokLogin'>
                     <FacebookBtn login={setLogin}  icon={<FontAwesomeIcon icon={faFacebook} /> }/>
                </div>
           </div>
           <hr/>
              {trans('او يمكنك الانضمام لنا')}
           <div className="createAccount w-100 d-flex justify-content-center align-items-center">
               <button className='w-75 rounded-1'>{trans('الانضمام الان')}</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Login