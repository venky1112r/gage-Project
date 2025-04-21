import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import DonutChart from './DonutChart';

const ciData = [
  { label: 'Bushes', value: 48 },
  { label: 'Plant Footprint', value: 27 },
  { label: 'Transportation', value: 25 },
];

const colorMap = {
  'Bushes': '#004225',
  'Plant Footprint': '#6BA368',
  'Transportation': '#C4A35A',
};

const OperationalScoreCard = () => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 2 }}>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        Operational Net CI Score
        <Typography variant="caption" sx={{ float: 'right', color: '#800000', cursor: 'pointer' }}>
          Provide data
        </Typography>
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DonutChart data={ciData} />

        <Box textAlign="center">
          <Typography variant="h4" fontWeight="bold" color="#003320">39.11</Typography>
          <Typography variant="caption">CI Score</Typography>
        </Box>

        <Stack spacing={1}>
          {ciData.map(item => (
            <Box key={item.label} display="flex" alignItems="center">
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: colorMap[item.label],
                  mr: 1,
                }}
              />
              <Typography variant="caption">
                {item.label}: <strong>{item.value}%</strong>
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default OperationalScoreCard;
