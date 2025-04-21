import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SummaryCard = ({ label, value, delta, isPositive, subLabel }) => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 2, minWidth: 200, height: '100%' }}>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {label}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold" color="#003320">
          {value}
        </Typography>

        <Box display="flex" alignItems="center" color={isPositive ? '#007f5c' : '#d32f2f'}>
          {isPositive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          <Typography variant="body2">{delta}</Typography>
        </Box>
      </Box>

      {subLabel && (
        <Typography variant="caption" color="text.secondary">
          {subLabel}
        </Typography>
      )}
    </Paper>
  );
};

export default SummaryCard;
