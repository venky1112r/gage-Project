import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import HeaderComponent from "../components/HeaderComponent";
import SummaryCardsSection from "../components/SummaryCardsSection";
import DashboardBottomComponent from "../components/DashboardBottomComponent";
import DashboardTopBar from "../components/DashboardTopBar";
import ProtectedRoute from "../components/ProtectedRoute";

const DashboardPage = () => {
  ProtectedRoute(); // Ensure the route is protected

  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  const userrole = location.state?.userrole || "guest";

  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <HeaderComponent email={email} userrole={userrole} />
      <DashboardTopBar />
      <SummaryCardsSection />
      <DashboardBottomComponent />
    </Box>
  );
};

export default DashboardPage;
