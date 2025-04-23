import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = ['Dashboard', 'Sourcing', 'Reporting', 'Settings'];

const HeaderComponent = ({ email }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = navItems.findIndex(item =>
    location.pathname.toLowerCase().includes(item.toLowerCase())
  );

  const handleTabChange = (event, newValue) => {
    const path = `/${navItems[newValue].toLowerCase()}`;
    navigate(path);
  };


  return (
    <AppBar position="static" color="#fff" elevation={1} sx={{ p: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#003320' }}>
          G.A.G.E.
        </Typography>

        {/* Navigation Tabs */}
        <Tabs
          value={currentTab === -1 ? 0 : currentTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          TabIndicatorProps={{ style: { backgroundColor: '#800000' } }}
        >
          {navItems.map((label, index) => (
            <Tab
              key={label}
              label={label.toUpperCase()}
              sx={{
                fontWeight: currentTab === index ? 'bold' : 'normal',
                color: currentTab === index ? '#800000' : '#000',
                textTransform: 'none',
              }}
            />
          ))}
        </Tabs>

        {/* Avatar with initials */}
        <Avatar sx={{ bgcolor: '#c9d9c4', color: '#000', fontWeight: 'bold' }}>
        {email.charAt(0).toUpperCase()}
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
