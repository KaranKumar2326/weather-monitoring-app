const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendAlert(city, temp) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "alert_recipient@example.com",
    subject: `Weather Alert: High Temperature in ${city}`,
    text: `Alert: The temperature in ${city} has reached ${temp.toFixed(2)}°C!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("Error sending alert:", error);
    else console.log("Alert sent:", info.response);
  });
}

module.exports = sendAlert;
