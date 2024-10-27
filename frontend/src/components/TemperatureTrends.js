import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { fetchHistoricalData } from '../services/api';

// Registering required components for Chart.js
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureTrends = () => {
  const [tempData, setTempData] = useState(null);
  const [humidityData, setHumidityData] = useState(null);
  const [windSpeedData, setWindSpeedData] = useState(null);

  useEffect(() => {
    const loadHistoricalData = async () => {
      try {
        console.log("Fetching historical data...");
        const response = await fetchHistoricalData();
        console.log("Historical data response:", response);

        if (response && response.length > 0) {
          // Prepare labels (dates) and data arrays for each trend
          const labels = response.map(entry => entry.date);
          const avgTemps = response.map(entry => entry.avgTemp);
          const humidityLevels = response.map(entry => entry.humidity);
          const windSpeeds = response.map(entry => entry.wind_speed);

          // Set up data for Temperature chart
          setTempData({
            labels,
            datasets: [
              {
                label: 'Average Temperature (°C)',
                data: avgTemps,
                fill: false,
                borderColor: 'rgba(255,99,132,1)',
                tension: 0.1,
              },
            ],
          });

          // Set up data for Humidity chart
          setHumidityData({
            labels,
            datasets: [
              {
                label: 'Humidity (%)',
                data: humidityLevels,
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1,
              },
            ],
          });

          // Set up data for Wind Speed chart
          setWindSpeedData({
            labels,
            datasets: [
              {
                label: 'Wind Speed (m/s)',
                data: windSpeeds,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
              },
            ],
          });
        } else {
          console.warn("No valid historical data available");
        }
      } catch (error) {
        console.error("Error fetching historical data:", error);
      }
    };

    loadHistoricalData();
  }, []);

  return (
    <div className="temperature-trends">
      <h2>Temperature Trends Over Time</h2>
      {tempData ? (
        <Line data={tempData} key="tempChart" />
      ) : (
        <p>Loading temperature trends...</p>
      )}

      <h2>Humidity Trends Over Time</h2>
      {humidityData ? (
        <Line data={humidityData} key="humidityChart" />
      ) : (
        <p>Loading humidity trends...</p>
      )}

      <h2>Wind Speed Trends Over Time</h2>
      {windSpeedData ? (
        <Line data={windSpeedData} key="windSpeedChart" />
      ) : (
        <p>Loading wind speed trends...</p>
      )}
    </div>
  );
};

export default TemperatureTrends;
