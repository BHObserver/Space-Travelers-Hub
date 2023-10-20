import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsAsync } from '../../redux/missions/missionsSlice';
import MissionRow from './MissionRow'; // Make sure to import your MissionRow component
import './missions.css';

function Missions() {
  const missions = useSelector((state) => state.missions.missionData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissionsAsync());
    }
  }, [dispatch, missions.length]);

  return (
    <div className="mission-page">
      <table className="mission-table">
        <thead className="mission-header">
          <tr>
            <th width="10%">
              <h3>Mission</h3>
            </th>
            <th width="65%">
              <h3>Description</h3>
            </th>
            <th width="12.5%">
              <h3>Status</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.length === 0 ? (
            <tr>
              <td colSpan="3">Loading missions...</td>
            </tr>
          ) : (
            missions.map((mission) => (
              <MissionRow key={mission.mission_id} mission={mission} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
