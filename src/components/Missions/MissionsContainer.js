import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsAsync } from '../../redux/missions/missionsSlice'; // Remove unused actions
import Missions from './Missions';

function MissionsContainer() {
  const missions = useSelector((state) => state.missions.missionData);
  const selectedMissions = useSelector((state) => state.missions.selectedMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissionsAsync());
    }
  }, [dispatch, missions.length]);

  return <Missions missions={missions} selectedMissions={selectedMissions} />;
}

export default MissionsContainer;
