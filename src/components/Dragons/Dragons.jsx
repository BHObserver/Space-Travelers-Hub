import React, { useEffect } from 'react';
import './dragon.css';
import { useDispatch, useSelector } from 'react-redux';
import { DragonFetch } from '../redux/Dragon/dragonSlics';

export default function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragon.dragons);
  const handleClick = () => {
    dispatch(DragonFetch());
    console.log(dragons);
  };
  useEffect(() => {
    dispatch(DragonFetch());
  }, [dragons]);

  return (
    <div className="main-dragon">
      {dragons.map((dragon, index) => (
        <div key={dragon.name} className="singledragon">
          <img src={dragon.flickr_images[0]} alt={`Dragon ${index + 1}`} className="dragon-image" />
          <div className="dragon-data">
            <h2 className="dragon-name">{dragon.name}</h2>
            <p className="dragon-description">{dragon.description}</p>
            <button className="dragon-button" type="button" onClick={handleClick}>Reserve Dragon</button>
          </div>
        </div>
      ))}
    </div>
  );
}
