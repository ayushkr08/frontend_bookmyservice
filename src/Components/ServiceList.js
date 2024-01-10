// ServiceList.js
import React from 'react';
import BookingCard from './BookingCard';

const ServiceList = ({ onServiceSelect }) => {
  const services = [
    { id: 1, name: 'Maid' },
    { id: 2, name: 'Cook' },
    { id: 3, name: 'Electrician' },
    // Add more services as needed
  ];

  return (
    <div>
      <div>
        <h2> Available Services</h2>
      </div>
      <div class= "flex flex-row text-center text-white">
        {services.map((element) => <BookingCard name={element.name}/>)}
      </div>
    </div>
  );
};

export default ServiceList;
