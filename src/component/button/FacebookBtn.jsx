import React from 'react'
import FacebookLogin from 'react-facebook-login'
import sendData from '../../data/sendData';
import { toast } from 'react-toastify';
import axios from 'axios';
const FacebookBtn = ({icon,login}) => {
    function responseFacebook(response) {
        axios
        .get(`http://localhost:3004/users?email=${response.email}`)
        .then((res)=>{
            console.log(res);
            res.data.length===0?toast.success('login')&&sendData(response):toast.error('user')
        })
        .catch((err)=>{console.log(err);})
      
      }
  return (
      <>
         <FacebookLogin
            appId="913562719798311"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon={icon}
            textButton=' '
         />
      
      </>
    )
}

export default FacebookBtn