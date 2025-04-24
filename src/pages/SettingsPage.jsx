import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import DashboardTopBar from '../components/DashboardTopBar';
import { useLocation } from 'react-router-dom';
const SettingsPage = () => {
    const location = useLocation();
    const email = location.state?.email || "guest@example.com";
  return (
    <div>
        <HeaderComponent email={email} />
        <DashboardTopBar/>
    </div>
  )
}

export default SettingsPage
