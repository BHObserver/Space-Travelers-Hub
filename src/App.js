import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dragons from './components/Dragons/Dragons';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import RocketList from './components/rocket/RocketList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<RocketList />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/Dragons" element={<Dragons />} />
      <Route path="/my-profile" element={<Profile />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
