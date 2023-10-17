import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RocketList from './components/rocket/RocketList';
import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div>
      <BrowserRouter>
      <div>
        <div>
          <Nav />
          <div>
         <Routes>
          <Route path='/' element={<RocketList />} />
         </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
      </>
    </Router>
  );

}

export default App