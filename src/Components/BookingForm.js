// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ selectedService }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    // Implement booking logic (e.g., send data to the server)
    console.log(`Booking ${selectedService.name} for ${name} on ${date}`);
  };

  return (
    <div>
      <h2>Book {selectedService.name}</h2>
      <form>
        <label>
          Your Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Preferred Date:
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleBooking}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
