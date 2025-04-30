import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import DonutChart from './DonutChart';

const ciData = [
  { label: 'Bushels', value: 48 },
  { label: 'Plant Footprint', value: 27 },
  { label: 'Transportation', value: 25 },
];

const colorMap = {
  'Bushels': '#004225', 
  'Plant Footprint': '#6BA368', 
  'Transportation': '#C4A35A', 
};

const SourcingOpportunitesMap = () => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 3 }}>
      
    </Paper>
  );
};

export default SourcingOpportunitesMap;
