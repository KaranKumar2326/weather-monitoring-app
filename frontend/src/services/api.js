// src/services/api.js

import axios from 'axios';

// Set up base URL for backend API
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

// Function to fetch the weather summary data
export const fetchWeatherSummary = async () => {
    try {
        console.log('Fetching weather summary data...');
        const response = await axios.get(`${API_BASE_URL}/weather/summary`);
        console.log("Weather summary response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather summary:", error);
        return [];
    }
};

// Function to fetch weather alerts
export const fetchAlerts = async () => {
    try {
        console.log('Fetching alerts data...');
        const response = await axios.get(`${API_BASE_URL}/weather/alerts`);
        console.log("Alerts response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching alerts:", error);
        return [];
    }
};

// Function to fetch historical data for temperature trends
export const fetchHistoricalData = async () => {
    try {
        console.log('Fetching historical data...');
        const response = await axios.get(`${API_BASE_URL}/weather/summary`);
        console.log("Historical data response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching historical data:", error);
        return [];
    }
};
