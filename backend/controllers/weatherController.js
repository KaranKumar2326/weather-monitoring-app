const axios = require("axios");
const WeatherSummary = require("../models/WeatherSummary");
const WeatherAlert = require("../models/WeatherAlert");

const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"];
const alertThreshold = 20; // Lowered temporarily for testing. Set to 35 for actual use.

// const fetchWeatherData = async () => {
//   console.log(`Fetching weather data for cities: ${cities.join(", ")}`); // Debug log

//   for (const city of cities) {
//     try {
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      
//       const weatherData = {
//         city,
//         main: response.data.weather[0].main,
//         temp: response.data.main.temp - 273.15,  // Convert Kelvin to Celsius
//         feels_like: response.data.main.feels_like - 273.15,
//         dt: new Date(response.data.dt * 1000).toISOString().split("T")[0],  // Format date
//       };
//       console.log(`Weather data for ${city}:`, weatherData); // Debug log
//       await processWeatherData(weatherData);
//     } catch (error) {
//       console.error(`Error fetching data for ${city}:`, error.message);
//     }
//   }
// };

// const axios = require("axios");
// const { processWeatherData } = require("../controllers/weatherController");

// const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"];

const fetchWeatherData = async () => {
  console.log(`Fetching weather data for cities: ${cities.join(", ")}`); // Debug log

  const promises = cities.map(async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      
      const weatherData = {
        city: response.data.name,
        main: response.data.weather[0].main,
        temp: response.data.main.temp - 273.15, // Convert Kelvin to Celsius
        feels_like: response.data.main.feels_like - 273.15,
        humidity: response.data.main.humidity, // New field: humidity
        wind_speed: response.data.wind.speed, // New field: wind speed
        dt: new Date(response.data.dt * 1000).toISOString().split("T")[0], // Format date
      };
      
      console.log(`Weather data for ${city}:`, weatherData); // Debug log
      await processWeatherData(weatherData);
    } catch (error) {
      console.error(`Error fetching data for ${city}:`, error.message);
    }
  });

  // Wait for all API calls to complete
  await Promise.all(promises);
};

// module.exports = fetchWeatherData;

  
  
  

const processWeatherData = async (weatherData) => {
    const { city, temp, dt, humidity, wind_speed } = weatherData;
    const existing = await WeatherSummary.findOne({ city, date: dt });
  
    if (existing) {
      existing.tempValues.push(temp);
      existing.avgTemp = existing.tempValues.reduce((a, b) => a + b) / existing.tempValues.length;
      existing.maxTemp = Math.max(...existing.tempValues);
      existing.minTemp = Math.min(...existing.tempValues);
      existing.humidity = humidity; // Update humidity
      existing.wind_speed = wind_speed; // Update wind speed
      await existing.save();
      console.log(`Updated weather summary for ${city} on ${dt}`);
    } else {
      await WeatherSummary.create({
        city,
        date: dt,
        tempValues: [temp],
        avgTemp: temp,
        maxTemp: temp,
        minTemp: temp,
        dominantCondition: weatherData.main,
        humidity: humidity, // Store humidity
        wind_speed: wind_speed, // Store wind speed
      });
      console.log(`Created new weather summary for ${city} on ${dt}`);
    }
  };
  





// const DailyWeatherSummary = require("../models/DailyWeatherSummary");
// const WeatherAlert = require("../models/WeatherAlert");

// Controller function to fetch daily summaries with optional filtering by date and city
const getDailySummary = async (req, res) => {
  try {
    const { date, city } = req.query;

    const query = {};
    if (date) query.date = date; // Filter by date if provided
    if (city) query.city = city; // Filter by city if provided

    const summaries = await DailyWeatherSummary.find(query);
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch daily summaries." });
  }
};



// Controller function to fetch alerts with optional filtering by date and city
const getAlerts = async (req, res) => {
  try {
    const { date, city } = req.query;

    const query = {};
    if (date) query.date = date;
    if (city) query.city = city;

    const alerts = await WeatherAlert.find(query);
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch alerts." });
  }
};

// module.exports = { getDailySummary, getAlerts };





// const getDailySummary = async (req, res) => {
//   try {
//     const summaries = await WeatherSummary.find();  // Fetch all summaries as an example
//     res.json(summaries);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch daily summary data." });
//   }
// };



const DailyWeatherSummary = require("../models/DailyWeatherSummary");
// const WeatherSummary = require("../models/WeatherSummary");

const calculateDailySummary = async () => {
  console.log("Calculating daily summaries...");

  const date = new Date().toISOString().split("T")[0]; // Current date
  const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"];

  for (const city of cities) {
    try {
      const dailyRecords = await WeatherSummary.find({ city, date });

      if (dailyRecords.length > 0) {
        const temps = dailyRecords.map(record => record.avgTemp);
        const avgTemp = temps.reduce((a, b) => a + b) / temps.length;
        const maxTemp = Math.max(...temps);
        const minTemp = Math.min(...temps);

        // Determine the dominant weather condition based on the most frequent occurrence
        const conditionCount = dailyRecords.reduce((acc, record) => {
          acc[record.dominantCondition] = (acc[record.dominantCondition] || 0) + 1;
          return acc;
        }, {});
        const dominantCondition = Object.keys(conditionCount).reduce((a, b) =>
          conditionCount[a] > conditionCount[b] ? a : b
        );

        await DailyWeatherSummary.create({
          city,
          date,
          avgTemp,
          maxTemp,
          minTemp,
          dominantCondition
        });

        console.log(`Daily summary created for ${city} on ${date}`);
      } else {
        console.log(`No data found for ${city} on ${date}`);
      }
    } catch (error) {
      console.error(`Error calculating daily summary for ${city}:`, error.message);
    }
  }
};



// const WeatherSummary = require("../models/WeatherSummary");
// const WeatherAlert = require("../models/WeatherAlert");

// Function to delete records older than 30 days
const cleanupOldRecords = async () => {
  const thresholdDate = new Date();
  thresholdDate.setDate(thresholdDate.getDate() - 30); // 30 days ago

  try {
    const summaryDeleteResult = await WeatherSummary.deleteMany({ date: { $lt: thresholdDate } });
    const alertDeleteResult = await WeatherAlert.deleteMany({ date: { $lt: thresholdDate } });

    console.log(`Deleted ${summaryDeleteResult.deletedCount} old weather summaries`);
    console.log(`Deleted ${alertDeleteResult.deletedCount} old weather alerts`);
  } catch (error) {
    console.error("Error cleaning up old records:", error.message);
  }
};


module.exports = { fetchWeatherData, getDailySummary, calculateDailySummary, getAlerts, cleanupOldRecords };
// module.exports = { getDailySummary, getAlerts };
