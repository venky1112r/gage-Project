import React, { useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Divider
} from '@mui/material';

const DashboardTopBar = () => {
  const [plant, setPlant] = useState('all');
  const [timeRange, setTimeRange] = useState('month');

  const handlePlantChange = (event) => setPlant(event.target.value);
  const handleTimeRange = (_, newRange) => {
    if (newRange) setTimeRange(newRange);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems={{ xs: 'flex-start', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      px={3}
      py={2}
      
    >
      {/* Left side: Title + Dropdown */}
      <Box display="flex" alignItems="center" flexWrap="wrap">
      <Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem sx={{borderColor: '#222'}}/>}
  spacing={2}
>
    
        <Typography variant="h3"  mr={2}>
          Clear Lake Energy
        </Typography>
        <Select
          value={plant}
          onChange={handlePlantChange}
          size="small"
          sx={{ minWidth: 140 }}
        >
          <MenuItem value="all">All Plants</MenuItem>
          <MenuItem value="north">North Plant</MenuItem>
          <MenuItem value="south">South Plant</MenuItem>
        </Select>
        </Stack>
      </Box>

      {/* Right side: Time range selector */}
      <Box mt={{ xs: 2, md: 0 }}>
        <Typography
          variant="caption"
          display="block"
          textAlign="right"
          sx={{ mb: 0.5 }}
        >
          Last updated: January 31, 2025
        </Typography>
        <ToggleButtonGroup
          value={timeRange}
          exclusive
          onChange={handleTimeRange}
          size="small"
          aria-label="Time range"
          color="primary"
        >
       {['day', 'week', 'month', 'year'].map((value) => (
              <ToggleButton
                key={value}
                value={value}
                sx={{
                  color: timeRange === value ? '#fff' : '#333',
                  backgroundColor: timeRange === value ? '#2e7d32' : 'transparent',
                  borderColor: '#2e7d32',
                  '&:hover': {
                    backgroundColor: '#2e7d32',
                    color: '#fff',
                  },
                  textTransform: 'capitalize',
                }}
              >
                {value}
              </ToggleButton>
            ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default DashboardTopBar;
