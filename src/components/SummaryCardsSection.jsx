import React from 'react';
import { Grid, Container, Box } from '@mui/material';
import SummaryCard from './SummaryCard';

const SummaryCardsSection = ( { data } ) => {
  console.log(data, "ss");
  return (
    < >
  <Box sx={{ mt: 0 , mb: 0 ,padding:'0px 16px'}}>
      <Grid container spacing={2} alignItems="stretch">
  {/* Contracted CI Score */}
  <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
    <SummaryCard
      label="Contracted CI Score"
      value={data?.contracted_ci_score}
      // delta="+1.2"
      // isPositive={true}
      labelVariant="subtitle2"
      valueVariant="h1"
    />
  </Grid>

  {/* Other Cards */}
  <Grid item xs={12} md={7} sx={{ display: 'flex' }}>
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
        <SummaryCard
          label="Total Bushels"
          value={data?.total_bushels}
          // delta="+1.2%"
          // isPositive={true}
        />
      </Grid>
      <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
        <SummaryCard
          label="Rebate"
          value="$62,072"
          // delta="-1.1%"
          // isPositive={false}
        />
      </Grid>
      <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
        <SummaryCard
          label="Authorized Growers"
          value={data?.authorized_grower_percentage}
          // delta="-1.1%"
          // isPositive={false}
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
