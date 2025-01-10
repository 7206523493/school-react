import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Home';
import Createappointment from './pages/Createappointment';
import FitbitDashboard from './pages/Fitbit';
import Toggl from './pages/Toggl';
import FitbitCredentialsForm from './pages/Addfitbituser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-appointment" element={<Createappointment />} />
        <Route path="/fitbit" element={<FitbitDashboard />} />
        <Route path="/addfibit-user" element={<FitbitCredentialsForm/>} />

        <Route path="/toggl" element={<Toggl/>} />
      </Routes>
    </Router>
  );
}

export default App;
