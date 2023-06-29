import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";
import { toast } from 'react-toastify';
import sendData from '../../data/sendData';
import { useState } from 'react';
import { useEffect } from 'react';

const GoogleBtn = ({value,login}) => {
    gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:
            "232951264606-cg8ch44g9i549cmglc8foi01n0ma8ks0.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });
      function responseGoogle(response) {
       
        login(sendData(response))
      };
    
    return (
        <>
        <GoogleLogin
          clientId="232951264606-cg8ch44g9i549cmglc8foi01n0ma8ks0.apps.googleusercontent.com"
          buttonText={value}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          style={{background:'red !important'}}
          icon={false}

          
        />
        </>
      );
}

export default GoogleBtn