// models/DailyWeatherSummary.js
const mongoose = require("mongoose");

const DailyWeatherSummarySchema = new mongoose.Schema({
  city: { type: String, required: true },
  date: { type: String, required: true },
  avgTemp: { type: Number, required: true },
  maxTemp: { type: Number, required: true },
  minTemp: { type: Number, required: true },
  dominantCondition: { type: String, required: true }
});

module.exports = mongoose.model("DailyWeatherSummary", DailyWeatherSummarySchema);
