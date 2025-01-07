import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Home';
import Createappointment from './pages/Createappointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-appointment" element={<Createappointment />} />
      </Routes>
    </Router>
  );
}

export default App;
