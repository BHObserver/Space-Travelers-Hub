import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';
const GET_ROCKETS = 'rockets/rockets/GET_ROCKETS';

const initialState = [];

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await axios.get(`${URL}`);
  const { data } = response; // Axios automatically parses JSON
  const arr = [];
  data.forEach((key) => {
    arr.push({
      item_id: key.id,
      name: key.name,
      description: key.description,
      flickr_images: key.flickr_images[0],
    });
  });
  return arr;
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
