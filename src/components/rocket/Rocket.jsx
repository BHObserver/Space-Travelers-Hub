import React from "react";

const Rocket = (props) => {
  const { id, description, name, image } = props;
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
      <img src={image} alt={name}/>
    </div>
  );
};

export default Rocket;
