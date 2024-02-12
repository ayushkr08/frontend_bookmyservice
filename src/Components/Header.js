// Header.js
import React from 'react';
import icon from '../Assets/icon.png';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"

const Header = () => {
  return (
    <div className='bg-gray-200 h-20 px-40 flex flex-row'>
      <Link to='/' className='inline-flex'>
        <img src={icon}></img>
        <header className='font-bold py-6 px-5 text-2xl'>BookMyService</header>
      </Link>
      <div className='flex justify-end w-full'>
        <GoogleOAuthProvider clientId="515842943475-413dupstc405bnsca0p6aiv38vh3ejhu.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={credentialResponse => {
              var decoded = jwtDecode(credentialResponse.credential)
              console.log(decoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
        {/* <button className="box-border bg-gray-300">
          Login/Signup
        </button> */}
      </div>

    </div>
  )
};

export default Header;
