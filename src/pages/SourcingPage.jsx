import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import DashboardTopBar from '../components/DashboardTopBar';
import SummaryCardsSection from '../components/SummaryCardsSection';
import { useLocation } from 'react-router-dom';
import SourcingBottomComponent from '../components/SourcingBottomComponent';

const SourcingPage = () => {
  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  return (
    <div>
        <HeaderComponent email={email}/>
        <div style={{backgroundColor:"#f5f5f5"}}>
        <DashboardTopBar/>
        <SummaryCardsSection />
        <SourcingBottomComponent />
        </div>
    </div>
  )
}

export default SourcingPage
