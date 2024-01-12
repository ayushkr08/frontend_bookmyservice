// ServiceList.js
import React from 'react';
import BookingCard from './BookingCard';
import WorkerList from './WorkerList';
import Maidpicture from '../Assets/maid.png';
import cookpicture from '../Assets/cook.png';
import electricianpicture from '../Assets/electrician.png';


const ServiceList = ({ onServiceSelect }) => {
  const services = [
    { id: 1, name: 'Maid', picture: Maidpicture },
    { id: 2, name: 'Cook', picture: cookpicture},
    { id: 3, name: 'Electrician', picture: electricianpicture },
    // Add more services as needed
  ];

  return (
    <div>
      <div className="text-center font-semibold tracking-wide text-2xl">
        <h1> Available Services</h1>
      </div>
      <div className= "flex flex-row text-center">
        {services.map((element) => <BookingCard key={element.name} name={element.name} image={element.picture}/>)}
      </div>
    </div>
  );
};
export default ServiceList;
