const mongoose = require("mongoose");

const WeatherSummarySchema = new mongoose.Schema({
  city: { type: String, required: true },
  date: { type: String, required: true },
  tempValues: [Number],
  avgTemp: Number,
  maxTemp: Number,
  minTemp: Number,
  dominantCondition: String,
  humidity: Number,    // New field for humidity
  wind_speed: Number,   // New field for wind speed
});

module.exports = mongoose.model("WeatherSummary", WeatherSummarySchema);
