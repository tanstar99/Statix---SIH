import React, { useState } from 'react';

const AppointmentBooking = () => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment booking
    alert('Appointment booked!');
  };

  return (
    <div className="appointment-booking">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor/Service"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <textarea
          placeholder="Reason for visit"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
