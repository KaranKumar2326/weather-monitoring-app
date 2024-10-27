// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ toggleTemperatureUnit, unit }) => {
  return (
    <div className="sidebar">
      <h4>🌤 Weather Dashboard</h4>
      <nav>
        <ul>
          <li><Link to="/">Weather Summaries</Link></li>
          <li><Link to="/alerts">Weather Alerts</Link></li>
          <li><Link to="/temperature-trends">Temperature Trends</Link></li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;
