import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import DashboardTopBar from '../components/DashboardTopBar';
import { useLocation } from 'react-router-dom';
import ReportingComponent from '../components/ReportingComponent';
import { Box } from '@mui/material';

const ReportingPage = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  return (
 <>
  <Box sx={{backgroundColor:"#f5f5f5", minHeight:"100vh"}}>
      <HeaderComponent  email={email}/>
      
      <DashboardTopBar hideTimeRange />
      <ReportingComponent />
 </Box>
      </>
  )
}

export default ReportingPage
