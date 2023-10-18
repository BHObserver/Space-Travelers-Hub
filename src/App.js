import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dragons from './components/Dragons/Dragons';
import MyProfiles from './components/Profile/Profiles';
import RocketList from './components/rocket/RocketList';
import MissionsContainer from './components/Missions/MissionsContainer'; // Import MissionsContainer

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketList />} />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/my-profile" element={<MyProfiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
