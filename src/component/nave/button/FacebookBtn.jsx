import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
const FacebookBtn = ({icon}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState  ({});
    function responseFacebook(response) {
        console.log(response);
        setIsLoggedIn(true);
        setUserData(response);
        // Send response to server for server-side verification and user authentication
      }
  return (
      <>
         <FacebookLogin
            appId="your-app-id"
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