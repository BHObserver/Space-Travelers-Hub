import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isloading: false,
  dragons: [],
  isrejected: false,
};

export const DragonFetch = createAsyncThunk('fetchdragon', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/dragons');
  return response.json();
});
const DragonSlice = createSlice({
  name: 'Dragon',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(DragonFetch.pending, (state) => ({
      ...state,
      isloading: true,
    }));
    builder.addCase(DragonFetch.fulfilled, (state, action) => ({
      ...state,
      isloading: false,
      dragons: action.payload,
    })); builder.addCase(DragonFetch.rejected, (state) => ({
      ...state,
      isloadging: false,
      isrejected: true,
    }));
  },
});

export default DragonSlice.reducer;
