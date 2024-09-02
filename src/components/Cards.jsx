// Card.js
import React from 'react';
import './Cards.css'; // Create a CSS file for styling

const Card = ({ images }) => {
  return (
    <div className="card">
      <div className="card-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="card-image" />
        ))}
      </div>
    </div>
  );
};

export default Card;
