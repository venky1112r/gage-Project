import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SourcingPage from "./pages/SourcingPage";
import Reporting from "./pages/ReportingPage";
import Settings from "./pages/SettingsPage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Loginpage";
import Test from "./pages/test";
import GageLoginPage from "./pages/GageLoginpage";


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/gageAdminLogin" element={<GageLoginPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/sourcing" element={<SourcingPage />} />
      <Route path="/reporting" element={<Reporting />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/AdminPage" element={<AdminPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </Router>
  );
}

export default App;
