import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionData: [],
  selectedMissions: [],
};

export const fetchMissionsAsync = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      if (!state.selectedMissions.includes(missionId)) {
        state.selectedMissions.push(missionId);
      }
    },
    cancelMission: (state, action) => {
      const missionId = action.payload;
      state.selectedMissions = state.selectedMissions.filter((id) => id !== missionId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionsAsync.fulfilled, (state, action) => {
      state.missionData = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
    });
  },
});

export default missionsSlice.reducer;
export const { cancelMission, joinMission } = missionsSlice.actions;
