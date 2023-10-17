import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import RocketList from './components/rocket/RocketList';
import './App.css';

const App = () => (
  <Router>
    <>
      <Navbar />
      <div>
        <div>
          <Routes>
            <Route path="/" element={<RocketList />} />
          </Routes>
        </div>
      </div>
    </>
  </Router>
);

export default App;
