import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SourcingPage from "./pages/SourcingPage";
import Reporting from "./pages/ReportingPage";
import Settings from "./pages/SettingsPage";
import Login from "./pages/Loginpage";
import Test from "./pages/test";


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/sourcing" element={<SourcingPage />} />
      <Route path="/reporting" element={<Reporting />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </Router>
  );
}

export default App;
