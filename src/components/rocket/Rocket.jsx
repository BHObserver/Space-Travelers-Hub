import React from 'react';
import './rocket.css';

const Rocket = (props) => {
  const {
    id, description, name, image,
  } = props;
  return (
    <div className="rocket-container">
      <img src={image} alt={name} className="rocket-image" />
      <div className="rocket-content">
        <p className="rocket-name">{name}</p>
        <p className="rocket-description">{description}</p>
        <button className="rocket-button" type="button">Reserve Rocket</button>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Rocket;
