import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useLocation } from "react-router-dom";
import SummaryCardsSection from "../components/SummaryCardsSection";
import DashboardBottomComponent from "../components/DashboardBottomComponent";
import DashboardTopBar from "../components/DashboardTopBar";

const DashboardPage = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  return (
    <div>
      <HeaderComponent email={email} />
      <DashboardTopBar />
      <SummaryCardsSection />
      <DashboardBottomComponent />
    </div>
  );
};

export default DashboardPage;
