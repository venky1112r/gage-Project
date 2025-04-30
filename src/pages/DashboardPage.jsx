import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useLocation } from "react-router-dom";
import SummaryCardsSection from "../components/SummaryCardsSection";
import DashboardBottomComponent from "../components/DashboardBottomComponent";
import DashboardTopBar from "../components/DashboardTopBar";
import { Box } from "@mui/material";

const DashboardPage = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  return (
    <>
     <Box sx={{ backgroundColor: "#f5f5f5"}}>
      <HeaderComponent email={email} />
      <DashboardTopBar />
      <SummaryCardsSection />
      <DashboardBottomComponent />
      </Box>
    </>
  );
};

export default DashboardPage;
