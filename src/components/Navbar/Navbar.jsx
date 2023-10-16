import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png'; // Assuming the image file is in the correct location.
import './navbar.css';

const Navbar = () => (
  <nav className="navbar-container">
    <div className="logo-container">
      <div className="brand-section">
        <img src={logo} alt="logo" className="logo-image" />
        <div className="logo-title">Space Travelers&apos; Hub</div>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Rockets</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/missions">Missions</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/my-profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
