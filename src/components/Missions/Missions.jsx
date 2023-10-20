import React from 'react';
import { useSelector } from 'react-redux';
import MissionRow from './MissionRow'; // Make sure to import your MissionRow component
import './missions.css';

function Missions() {
  const missions = useSelector((state) => state.missions.missionData);

  return (
    <div className="mission-page">
      <table className="mission-table">
        <thead className="mission-header">
          <tr>
            <th width="10%">
              <h3 data-testid="mission-name-header">Mission</h3>
            </th>
            <th width="65%">
              <h3 data-testid="mission-description-header">Description</h3>
            </th>
            <th width="12.5%">
              <h3 data-testid="mission-status-header">Status</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.length === 0 ? (
            <tr data-testid="loading-message">
              <td colSpan="3">Loading missions...</td>
            </tr>
          ) : (
            missions.map((mission) => (
              <MissionRow key={mission.mission_id} mission={mission} data-testid="mission-row" />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
