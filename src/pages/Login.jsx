import React from 'react'
import style from '../asset/css/login/login.module.css'
const Login = () => {
  return (
    <div className={style.login + ' d-flex justify-content-center align-items-center'}>
      <div className="container">
        <div  className='forUser d-flex flex-column justify-content-center align-items-center '>
        <div class="logo w-100 text-center"><h1>جَاهِد</h1></div>
           <form  action="" className='d-flex justify-content-center align-items-center flex-column'>
               <input type="text" name="" id="" />
               <input type="password" name="" id="" />
               <button type='submit'>دخول</button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Login