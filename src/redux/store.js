import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({ rockets: rocketReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
