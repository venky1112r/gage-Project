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
import ProtectedRoute from "./components/ProtectedRoute";
import { DashboardProvider } from "./context/DashboardContext.jsx";

function App() {
  return (
    <DashboardProvider>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login-admin" element={<GageLoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/sourcing" element={<SourcingPage />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
    </DashboardProvider>
  );
}

export default App;
