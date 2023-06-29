import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import sendData from '../../data/sendData';
const FacebookBtn = ({icon,login}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState  ({});
    function responseFacebook(response) {
        login(sendData(response));
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