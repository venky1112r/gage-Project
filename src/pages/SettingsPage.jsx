import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import DashboardTopBar from '../components/DashboardTopBar';
import { useLocation } from 'react-router-dom';
import SettingComponent from '../components/SettingComponent';
import { Box } from '@mui/material';
const SettingsPage = () => {
    const location = useLocation();
    const email = location.state?.email || "guest@example.com";
  return (
  <><Box sx={{backgroundColor:"#f5f5f5", minHeight:"100vh"}}>
      <HeaderComponent email={email} />
       
        <DashboardTopBar hideTimeRange />
        <SettingComponent/>
        </Box>
    </>
      
    
  )
}

export default SettingsPage
