import React from 'react';
import './Missions.css';

function MissionRow({ mission, onJoin, onCancel }) {
  return (
    <tr key={mission.mission_id}>
      <td className="mission-name">
        <h3>{mission.mission_name}</h3>
      </td>
      <td>
        <p className="description">{mission.description}</p>
      </td>
      <td>
        <div className="status">
          {mission.reserved ? (
            <p className="active-member">Active member</p>
          ) : (
            <p className="not-member">NOT a member</p>
          )}
        </div>
      </td>
      <td className="mission-btn">
        {!mission.reserved ? (
          <button type="button" className="join-mission" onClick={() => onJoin(mission.mission_id)}>
            Join Mission
          </button>
        ) : (
          <button type="button" className="leave-mission" onClick={() => onCancel(mission.mission_id)}>
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
}

function Missions({ missions, onJoin, onCancel }) {
  return (
    <div className="mission-page">
      <table className="missionTable">
        <thead className="missionThead">
          <tr>
            <th width="10%">
              <h3>Missions</h3>
            </th>
            <th width="65%">
              <h3>Description</h3>
            </th>
            <th width="12.5%">
              <h3>Status</h3>
            </th>
            <th width="12.5%"></th>
          </tr>
        </thead>
        
      </table>
    </div>
  );
}

export default Missions;
