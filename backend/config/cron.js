const cron = require("node-cron");
const { calculateDailySummary, cleanupOldRecords } = require("../controllers/weatherController");

// Schedule the daily summary to run every day at 12:05 AM
cron.schedule("5 0 * * *", () => {
  console.log("Daily summary cron job triggered...");
  calculateDailySummary();
});

// Schedule the weekly cleanup job to run every Sunday at midnight (00:00)
cron.schedule("0 0 * * 0", () => {
  console.log("Weekly cleanup cron job triggered...");
  cleanupOldRecords();
});

module.exports = cron;
