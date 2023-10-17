import React from 'react';
import './missions.css';
import { cancelMission, joinMission } from '../../redux/missions/missionsSlice';

function MissionRow({ mission, onJoin, onCancel }) {
  return (
    <tr key={mission.mission_id}>
      <td className="mission-name-cell">
        <h3 className="mission-name">{mission.mission_name}</h3>
      </td>
      <td className="mission-description-cell">
        <p className="mission-description">{mission.description}</p>
      </td>
      <td className="mission-status-cell">
        <div className="mission-status">
          {mission.reserved ? (
            <p className="active-member-status">Active member</p>
          ) : (
            <p className="not-member-status">NOT a member</p>
          )}
        </div>
      </td>
      <td className="mission-action-cell">
        {!mission.reserved ? (
          <button type="button" className="join-mission-button" onClick={() => onJoin(mission.mission_id)}>
            Join Mission
          </button>
        ) : (
          <button type="button" className="leave-mission-button" onClick={() => onCancel(mission.mission_id)}>
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
}

function Missions({ missions, dispatch }) {
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
              <MissionRow
                key={mission.mission_id}
                mission={mission}
                onJoin={() => dispatch(joinMission(mission.mission_id))}
                onCancel={() => dispatch(cancelMission(mission.mission_id))}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
