import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer, // Include the missions reducer
});

const store = configureStore({ reducer: rootReducer });

export default store;
