import React, { useEffect, useState } from 'react';
import { fetchAlerts } from '../services/api';
import './Alerts.css';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAlerts();
      setAlerts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="alerts-container">
      <h2>Weather Alerts</h2>
      <div className="alert-cards">
        {alerts.map((alert, index) => (
          <div key={index} className="alert-card">
            <h3>{alert.city} - {alert.date}</h3>
            <p>{alert.alertMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
