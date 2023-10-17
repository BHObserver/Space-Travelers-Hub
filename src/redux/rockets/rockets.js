const URL = "https://api.spacexdata.com/v4/rockets";
const GET_ROCKETS = "rockets/rockets/GET_ROCKETS";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await axios.get(`${URL}`);
  const data = response.data; // Axios automatically parses JSON
  const arr = [];
  data.forEach((key) => {
      arr.push({
          item_id: key.id,
          name: key.name,
          description: key.description,
          flickr_images: key.flickr_images[0],
        });
        console.log(arr);
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
