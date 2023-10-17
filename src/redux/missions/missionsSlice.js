import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionData: [],
  selectedMissions: [],
};

export const fetchMissionsAsync = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error; // You can handle errors in the component that dispatches the action.
  }
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
  
});

export default missionsSlice.reducer;
export const { cancelMission, joinMission } = missionsSlice.actions;
