import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RocketList from './components/rocket/RocketList';
import Nav from './components/Nav';
import './App.css';

const App = () => {
  return (
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
  )
}

export default App