import React from 'react';
import './BedAvailability.css';

const BedAvailability = () => {
  // Sample data; replace with real data or API calls
  const bedData = [
    { type: 'General', available: 10 },
    { type: 'Private', available: 5 },
    { type: 'ICU', available: 2 },
    { type: 'VIP', available: 1 },
  ];

  return (
    <div className="bed-availability">
      <h2>Bed Availability Status</h2>
      <table>
        <thead>
          <tr>
            <th>Bed Type</th>
            <th>Available Beds</th>
          </tr>
        </thead>
        <tbody>
          {bedData.map((bed, index) => (
            <tr key={index}>
              <td>{bed.type}</td>
              <td>{bed.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BedAvailability;
