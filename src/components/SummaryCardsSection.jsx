import React from 'react';
import { Grid, Container, Box } from '@mui/material';
import SummaryCard from './SummaryCard';

const SummaryCardsSection = () => {
  return (
    < >
  <Box sx={{ mt: 0 , mb: 0 ,padding:'0px 16px'}}>
      <Grid container spacing={2} >
        {/* Contracted CI Score - Full height left */}
        <Grid item xs={12} md={5}  >
          <SummaryCard
            label="Contracted CI Score"
            value="24.83"
            delta="+1.2"
            isPositive={true}
            labelVariant="subtitle2" 
            valueVariant="h1"
          >
            {/* Optional line or chart */}
            <div
              style={{
                height: 30,
                borderBottom: '2px solid green',
                marginTop: 8,
              }}
            ></div> 
          </SummaryCard>
        </Grid>

        {/* Other 3 cards on the right */}
        <Grid item xs={12} md={7} >
          <Grid container spacing={2} >
            <Grid item xs={12} sm={4} md={4} >
              <SummaryCard
                label="Total Bushels"
                value="73,322"
                delta="+1.2%"
                isPositive={true}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <SummaryCard
                label="Rebate"
                value="$62,072"
                delta="-1.1%"
                isPositive={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <SummaryCard
                label="Authorized Growers"
                value="58%"
                delta="-1.1%"
                isPositive={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default SummaryCardsSection;
