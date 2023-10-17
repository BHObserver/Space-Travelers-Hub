import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Rocket from './Rocket';
import { getRockets } from '../../redux/rockets/rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <div>
      {rockets.map((rockets) => (
        <Rocket
          id={rockets.id}
          name={rockets.name}
          description={rockets.description}
          image={rockets.flickr_images}
        />
      ))}
    </div>
  );
};

export default RocketList;
