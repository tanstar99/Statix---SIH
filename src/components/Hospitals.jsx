import React, { useState, useEffect } from 'react';

const HospitalsList = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Mock hospital data
    setHospitals([
      { id: 1, name: 'City Hospital', location: 'Downtown', specialty: 'General' },
      { id: 2, name: 'County Clinic', location: 'Suburb', specialty: 'Pediatrics' }
    ]);
  }, []);

  return (
    <div className="hospitals-list">
      <h2>Hospitals</h2>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id}>
            <h3>{hospital.name}</h3>
            <p>{hospital.location}</p>
            <p>Specialty: {hospital.specialty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalsList;
