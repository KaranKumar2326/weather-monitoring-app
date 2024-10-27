import React, { useEffect, useState } from 'react';
import { fetchWeatherSummary } from '../services/api';
import './WeatherSummary.css';

const WeatherSummary = () => {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherSummary();
      console.log(data);
      setSummaries(data);
    };
    fetchData();
    console.log(summaries);
  }, []);

  return (
    <div className="summary-container">
      <h2>Daily Weather Summaries</h2>
      <div className="summary-cards">
        {summaries.map((summary, index) => (
          <div key={index} className="summary-card">
            <h3>{summary.city} - {summary.date}</h3>
            <p>Average Temp: {summary.avgTemp.toFixed(1)}°C</p>
            <p>Max Temp: {summary.maxTemp.toFixed(1)}°C</p>
            <p>Min Temp: {summary.minTemp.toFixed(1)}°C</p>
            <p>Humidity: {summary.humidity}%</p>
            <p>Wind Speed: {summary.wind_speed} m/s</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSummary;
