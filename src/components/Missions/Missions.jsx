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
      
    </tr>
  );
}
