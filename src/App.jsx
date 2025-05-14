import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SourcingPage from "./pages/SourcingPage";
import Reporting from "./pages/ReportingPage";
import Settings from "./pages/SettingsPage";
import Login from "./pages/Loginpage";
import Test from "./pages/test";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sourcing"
          element={
            <ProtectedRoute>
              <SourcingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reporting"
          element={
            <ProtectedRoute>
              <Reporting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/test"
          element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
