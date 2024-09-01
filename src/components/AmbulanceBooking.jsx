import React, { useState } from 'react';

const AmbulanceBooking = () => {
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const [emergencyDescription, setEmergencyDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ambulance booking
    alert('Ambulance booked!');
  };

  return (
    <div className="ambulance-booking">
      <h2>Request an Ambulance</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pickup Address"
          value={pickupAddress}
          onChange={(e) => setPickupAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Drop-off Address"
          value={dropoffAddress}
          onChange={(e) => setDropoffAddress(e.target.value)}
        />
        <textarea
          placeholder="Description of Emergency"
          value={emergencyDescription}
          onChange={(e) => setEmergencyDescription(e.target.value)}
        />
        <button type="submit">Book Ambulance</button>
      </form>
    </div>
  );
};

export default AmbulanceBooking;
