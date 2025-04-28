import React from 'react';
import { Paper, Typography, Box, Stack } from '@mui/material';
import ContractsChart from './ContractsChart';
import DeliveryTable from './DeliveryTable';

const data = [
  { grade: 'Grower', bushels: 2784, ciScore: 30 },
  { grade: 'Retailer', bushels: 2607, ciScore: 26 },
  { grade: 'National', bushels: 3900, ciScore: 35 },
  { grade: 'Custom', bushels: 2431, ciScore: 22 },
  { grade: 'No Score', bushels: 2045, ciScore: 18 },
];
 
const ContractsByCIScoreCard = () => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Contracts by CI Score level
        </Typography>
        <Typography variant="caption" sx={{ color: '#666', cursor: 'pointer' }}>
          Delivered ⌄
        </Typography>
      </Stack>

      <Box mt={2}>
        <ContractsChart data={data} width={500} height={300} />
        <DeliveryTable />
      </Box>
    </Paper>
  );
};

export default ContractsByCIScoreCard;

