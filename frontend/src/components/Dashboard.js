import React from 'react';
import WeatherSummary from './WeatherSummary';
import Alerts from './Alerts';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <WeatherSummary />
    <Alerts />
  </div>
);

export default Dashboard;
