const express = require("express");
const router = express.Router();
const { getAlerts } = require("../controllers/weatherController");
const WeatherAlert = require("../models/WeatherAlert");
const { getDailySummary } = require("../controllers/weatherController");

// Route to fetch daily summaries
// router.get("/summary", getDailySummary);

// Route to fetch all alerts, with optional filtering
router.get("/alerts", getAlerts);

router.get("/summary", getDailySummary);

// New route to fetch all alerts
// router.get("/alerts", async (req, res) => {
//   try {
//     const alerts = await WeatherAlert.find();
//     res.json(alerts);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch alerts." });
//   }
// });

module.exports = router;
