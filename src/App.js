import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Import your Navbar component

function App() {
  return (
    <Router>
      <>
        <Navbar />
      </>
    </Router>
  );
}

export default App;
