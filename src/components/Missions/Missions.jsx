import React from 'react';
import './Missions.css';

function MissionRow({ mission, onJoin, onCancel }) {
  return (
    <tr key={mission.mission_id}>
      <td className="mission-name">
        <h3>{mission.mission_name}</h3>
      </td>
      
    </tr>
  );
}
