// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import WeatherSummary from './components/WeatherSummary';
import Alerts from './components/Alerts';
import TemperatureTrends from './components/TemperatureTrends';
import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Sidebar />
//         <div className="content">
//           <Routes>
//           <Route path="/temperature-trends" element={<TemperatureTrends />} />
//             <Route path="/" element={<WeatherSummary />} />
//             <Route path="/alerts" element={<Alerts />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;



// // src/App.js
// import React, { useState } from 'react';
// // ... other imports

const App = () => {
  const [unit, setUnit] = useState('C');

  const toggleTemperatureUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar toggleTemperatureUnit={toggleTemperatureUnit} unit={unit} />
        <div className="content">
          <Routes>
            <Route path="/" element={<WeatherSummary unit={unit} />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/temperature-trends" element={<TemperatureTrends unit={unit} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
