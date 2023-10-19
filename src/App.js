import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dragons from './components/Dragons/Dragons';
import MyProfiles from './components/Profile/Profiles';
import RocketList from './components/rocket/RocketList';
import MissionsContainer from './components/Missions/MissionsContainer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<RocketList />} />
      <Route path="/missions" element={<MissionsContainer />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/my-profile" element={<MyProfiles />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
