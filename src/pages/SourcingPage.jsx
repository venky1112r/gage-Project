import React,{useEffect, useState} from 'react'
import HeaderComponent from '../components/HeaderComponent';
import DashboardTopBar from '../components/DashboardTopBar';
import SummaryCardsSection from '../components/SummaryCardsSection';
import { useLocation } from 'react-router-dom';
import SourcingBottomComponent from '../components/SourcingBottomComponent';
import { Box } from '@mui/material';
import ProtectedRoute from "../components/ProtectedRoute";
import{ useDashboard  } from "../context/DashboardContext.jsx";
const SourcingPage = () => {
  
  const {  loading , mySources,  opportunitiesMap, summaryMetrics, loadMySources,  loadSummaryMetrics,  loadOpportunitiesMap,} = useDashboard();
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
    const userrole = location.state?.userrole || "guest"; 
const [sourcingData, setSourcingData]=useState({});

  useEffect(() => {
    const loadData = async () => {
      if (!summaryMetrics) await loadSummaryMetrics();
      if (!mySources || mySources.length === 0) await loadMySources();
      if (!opportunitiesMap) await loadOpportunitiesMap();
    };

    loadData();
  }, []);

  useEffect(() => {
    if (summaryMetrics && mySources && opportunitiesMap) {
      setSourcingData({ mySources, opportunitiesMap, summaryMetrics });
    } 
  }, [summaryMetrics, mySources, opportunitiesMap]);
console.log("sourcig ", sourcingData);
  return (
    <>
        <Box sx={{backgroundColor:"#f5f5f5"}}>
        <HeaderComponent email={email} userrole={userrole} />
       
        <DashboardTopBar/>
       <SummaryCardsSection data={sourcingData} loading={loading} />
        <SourcingBottomComponent data={sourcingData} />
    </Box>
    </>
  )
}

export default SourcingPage
