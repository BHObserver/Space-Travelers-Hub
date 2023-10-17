import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsAsync, cancelMission, joinMission } from '../../redux/missions/missionsSlice';
import Missions from './Missions';

function MissionsContainer() {
  const missions = useSelector((state) => state.missions.missionData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissionsAsync());
    }
  }, [dispatch, missions.length]);

  return <Missions missions={missions} onJoin={joinMission} onCancel={cancelMission} />;
}

export default MissionsContainer;
