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

const OperationalScoreCard = () => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          Operational Net CI Score
        </Typography>
        <Typography variant="caption" sx={{ color: '#800000', cursor: 'pointer' }}>
          Provide data
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={5} justifyContent="space-around" flexDirection={{ xs: 'row', md: 'row' } }>
        {/* Left side: Score */}
        <Box>
          <Typography variant="h3" sx={{ color: '#000000' }}>
            39.11
          </Typography>
          {/* Legend below chart */}
          <Stack spacing={1} mt={2}>
            {ciData.map((item) => (
              <Box key={item.label} display="flex" alignItems="center">
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: colorMap[item.label],
                    mr: 1,
                  }}
                />
                <Typography variant="caption" color="textSecondary">
                  {item.label.toUpperCase()}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Right side: Donut Chart  */}
        <Box display="flex" flexDirection="column" >
          <DonutChart data={ciData} colorMap={colorMap} />
          
        </Box>
      </Box>
    </Paper>
  );
};

export default OperationalScoreCard;
