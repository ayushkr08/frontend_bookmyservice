// Header.js
import React from 'react';
import icon from '../Assets/icon.png';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-200 h-20 px-40 flex flex-row'>
      <Link to='/' className='inline-flex'>
        <img src={icon}></img>
        <header className='font-bold py-6 px-5 text-2xl'>BookMyService</header>
      </Link>
      <div className='flex justify-end w-full'>
        <button className="box-border bg-gray-300">
          Login/Signup
        </button>
      </div>

    </div>
  )
};

export default Header;
