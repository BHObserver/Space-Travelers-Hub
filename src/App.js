import React, { useEffect } from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Dragons from './components/Dragons/Dragons';
import MyProfileDragon from './components/myprofile/myProfileDragon';
import { DragonFetch } from './components/redux/Dragon/dragonSlics';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Dragons />} />
      <Route path="/missions" element={<Dragons />} />
      <Route path="/Dragons" element={<Dragons />} />
      <Route path="/my-profile" element={<MyProfileDragon />} />
    </Route>,
  ),
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DragonFetch());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
