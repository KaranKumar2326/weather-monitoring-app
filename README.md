Here's a concise and comprehensive `README.md` file that includes installation steps, environment setup, and usage instructions for both the frontend and backend of your weather monitoring application.

```markdown
# Weather Monitoring Application

A full-stack weather monitoring application that provides real-time weather summaries, alerts, and historical temperature trends. The app includes a backend API for weather data processing and a frontend to display the data visually.

## Project Structure

- **Backend**: Node.js/Express application that fetches weather data, processes it, and stores it in MongoDB.
- **Frontend**: React application that consumes the API and displays weather summaries, alerts, and trends using charts.

## Prerequisites

- **Node.js**: Ensure Node.js (v12 or higher) is installed.
- **MongoDB**: Set up a MongoDB instance locally or in the cloud. Default local connection URI is used in this setup.
- **Git**: Git for version control and managing repositories.

## Installation and Setup

Follow these steps to set up and run the application on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/KaranKumar2326/weather-monitoring-app.git
cd weather-monitoring-app
```

### 2. Set Up Backend

1. **Navigate to the backend folder**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**: Create a `.env` file in the `backend` folder with the following content:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/weatherDB
   API_KEY=YOUR_OPENWEATHERMAP_API_KEY
   ```

   Replace `YOUR_OPENWEATHERMAP_API_KEY` with your API key from OpenWeatherMap.

4. **Start Backend Server**:

   For development (with auto-reload):

   ```bash
   npm run dev
   ```

   For production:

   ```bash
   npm start
   ```

### 3. Set Up Frontend

1. **Navigate to the frontend folder**:

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**: Create a `.env` file in the `frontend` folder with the following content:

   ```plaintext
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```

4. **Start Frontend Server**:

   ```bash
   npm start
   ```

The frontend should be accessible at [http://localhost:3000](http://localhost:3000) by default.

## Usage

- **Weather Summaries**: View daily weather summaries for various cities.
- **Weather Alerts**: Real-time weather alerts based on predefined thresholds.
- **Temperature Trends**: Visual representation of historical temperature, humidity, and wind speed trends.

## API Endpoints

- **GET /api/weather/summary**: Fetches weather summaries.
- **GET /api/weather/alerts**: Fetches weather alerts.
- **GET /api/weather/trends**: Fetches historical temperature data for trends.

## Additional Features

- **Auto-Reload for Development**: The backend uses `nodemon` for auto-reloading.
- **Environmental Configuration**: `.env` files are used for API keys and MongoDB configuration.
- **Charting in Frontend**: Display temperature, humidity, and wind speed trends using charts.

## Dependencies

### Backend

- `axios`: For making HTTP requests to the weather API.
- `cors`: Middleware for handling CORS requests.
- `dotenv`: For managing environment variables.
- `express`: Web framework for building the backend API.
- `mongoose`: MongoDB object modeling for Node.js.
- `node-cron`: For scheduling weather data fetching.
- `nodemailer`: For sending email alerts.

### Frontend

- `react`: JavaScript library for building user interfaces.
- `axios`: For making API requests from the frontend.
- `chart.js` & `react-chartjs-2`: For rendering data charts.

## Troubleshooting

- **MongoDB Connection**: Ensure MongoDB is running locally or update `MONGO_URI` in `.env` with the correct connection string.
- **API Key**: Obtain a valid API key from OpenWeatherMap and add it to your `.env` file in the backend.

## Contributing

Feel free to open issues or submit PRs for additional features or improvements.

## License

This project is licensed under the MIT License.

---

```

### Instructions for Use:
1. Replace placeholder values with real data where indicated.
2. Customize any additional instructions specific to your project setup or deployment.
3. Review the `README.md` file to ensure it covers all necessary instructions for someone else to set up and run your project.

This `README.md` provides clear, concise instructions, covering installation, environment setup, and usage, ensuring the application can be successfully set up and tested by others.
