// ServiceList.js
import React from 'react';

const ServiceList = ({ onServiceSelect }) => {
  const services = [
    { id: 1, name: 'Plumbing' },
    { id: 2, name: 'Electrician' },
    { id: 3, name: 'Cleaning' },
    // Add more services as needed
  ];

  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id} onClick={() => onServiceSelect(service)}>
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
