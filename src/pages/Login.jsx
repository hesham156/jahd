import React from 'react'
import style from '../asset/css/login/login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
const Login = () => {
  const trans =(value)=>{

      return value
  }
  return (
    <div className={style.login + ' d-flex justify-content-center align-items-center'}>
      <div className="container">
        <div  className='forUser d-flex flex-column justify-content-center align-items-center '>
           <div class="logo w-100 text-center">
              <h1>جَاهِد</h1> 
            </div>
           <form  action="" className='d-flex justify-content-center align-items-center flex-column'>
               <input type="text" name="name" placeholder={trans('الايميل')} id="" />
               <input type="password" name="password" placeholder={trans('كلمه السر')} id="" />
               <button type='submit'>{trans('دخول')}</button>
           </form>
           <pr/> {trans('او استخدم')}
           <div className="socialLogin d-flex justify-content-center align-items-center">
                <div className='googleLogin'>
                  <button>
                  <FontAwesomeIcon icon={faGoogle} />

                  </button>
                </div>
                <div className='facebokLogin'>
                  <button>
                  <FontAwesomeIcon icon={faFacebook} />

                  </button>
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