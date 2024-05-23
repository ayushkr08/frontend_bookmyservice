import React, { useState } from 'react';
import icon from '../Assets/icon.png';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
  const [location, setLocation] = useState('Get Location');
  const [address, setAddress] = useState('');

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchAddress(latitude, longitude);
        },
        (geoError) => {
          console.error("Error fetching location: ", geoError);
          setLocation('Location Error');
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLocation('Geolocation not supported');
    }
  };

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Geocoding data:", data);
      if (data && data.address) {
        const { house_number, road, neighbourhood, suburb, county, state, country } = data.address;
        const formattedAddress = `${house_number ? house_number + ', ' : ''}${road ? road + ', ' : ''}${neighbourhood ? neighbourhood + ', ' : ''}${suburb ? suburb + ', ' : ''}${county ? county + ', ' : ''}${state ? state + ', ' : ''}${country ? country : ''}`;
        setAddress(formattedAddress);
        setLocation('Location');
      } else {
        console.error('Reverse geocoding error: No address found');
        setLocation('Address not found');
      }
    } catch (fetchError) {
      console.error('Reverse geocoding error: ', fetchError);
      setLocation('Address not found');
    }
  };

  return (
    <div className='bg-gray-200 h-20 px-40 flex flex-row'>
      <Link to='/' className='inline-flex'>
        <img src={icon} alt="icon" />
        <header className='font-bold py-6 px-5 text-2xl'>BookMyService</header>
      </Link>
      <div className='flex justify-end w-full items-center'>
        <button onClick={handleLocationClick} className='bg-blue-500 text-white py-2 px-4 rounded mx-2'>
          {location}
        </button>
        {address && (
          <div className="address-box ml-4 p-2 bg-white border border-gray-300 rounded shadow-md max-w-xs overflow-x-auto">
            <p className="text-gray-800 text-sm whitespace-nowrap">{address}</p>
          </div>
        )}
        <GoogleOAuthProvider clientId="515842943475-413dupstc405bnsca0p6aiv38vh3ejhu.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Header;
