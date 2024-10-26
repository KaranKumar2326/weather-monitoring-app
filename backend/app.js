const express = require("express");
require('dotenv').config();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");  // No .js extension needed
require("./config/cron");                  // Require cron as a side-effect for setup
// const fetchWeatherData = require("./config/fetchWeatherData"); // Adjust path as needed
; // Call the function immediately

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Routes
const weatherRoutes = require("./routes/weatherRoutes");  // No .js extension needed
app.use("/api/weather", weatherRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
