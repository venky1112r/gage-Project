import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import DashboardTopBar from '../components/DashboardTopBar';
import SummaryCardsSection from '../components/SummaryCardsSection';
import { useLocation } from 'react-router-dom';
import SourcingBottomComponent from '../components/SourcingBottomComponent';
import { Box } from '@mui/material';

const SourcingPage = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  return (
    <>
        <Box sx={{backgroundColor:"#f5f5f5"}}>
        <HeaderComponent email={email}/>
       
        <DashboardTopBar/>
        <SummaryCardsSection />
        <SourcingBottomComponent />
    </Box>
    </>
  )
}

export default SourcingPage
