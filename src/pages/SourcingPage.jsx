import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import DashboardTopBar from '../components/DashboardTopBar';
import { useLocation } from 'react-router-dom';

const SourcingPage = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  return (
    <div>
        <HeaderComponent email={email}/>
        <div style={{backgroundColor:"#f5f5f5"}}>
        <DashboardTopBar/>
        </div>
    </div>
  )
}

export default SourcingPage
