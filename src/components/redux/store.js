import { configureStore } from '@reduxjs/toolkit';
import DragonReducer from './Dragon/dragonSlics';

const store = configureStore({
  reducer: {
    dragon: DragonReducer,
  },
});

export default store;
