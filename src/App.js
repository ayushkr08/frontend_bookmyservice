// App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import ServiceList from './Components/ServiceList';
import BookingForm from './Components/BookingForm';

const App = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div>
      <Header />
      <ServiceList onServiceSelect={handleServiceSelect} />
      {/* // BookingForm
      //outlet */}
    </div>
  );
};

export default App;
