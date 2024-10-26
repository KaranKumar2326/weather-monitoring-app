const mongoose = require("mongoose");

const weatherAlertSchema = new mongoose.Schema({
  city: String,
  date: String,                 // The date of the alert
  thresholdType: String,         // Type of threshold (e.g., temperature)
  thresholdValue: Number,        // Threshold value (e.g., 35°C)
  actualValue: Number,           // Actual value when alert was triggered
  alertMessage: String,          // Description of the alert
  timestamp: { type: Date, default: Date.now } // Time of alert
});

module.exports = mongoose.model("WeatherAlert", weatherAlertSchema);
