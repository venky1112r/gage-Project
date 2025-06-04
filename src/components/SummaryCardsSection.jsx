import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SummaryCard from './SummaryCard';

const SummaryCardsSection = ({ data }) => {
 
  const summary = data?.summaryMetrics?.[0] || {};

  return (
    <Box sx={{ mt: 0, mb: 0, padding:'0px 16px'}}>
      <Grid container spacing={2} alignItems="stretch">
        {/* Contracted CI Score */}
        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <SummaryCard
            label="Contracted CI Score"
            value={(summary.contracted_ci_score ?? 0).toFixed(2)}  // delta="+1.2"
            // isPositive={true}
            labelVariant="subtitle2"
            valueVariant="h1"
          />
        </Grid>

        {/* Other Cards */}
        <Grid item xs={12} md={7} sx={{ display: 'flex' }}>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <SummaryCard
                label={
                  <>
                    Contracted Bushels{' '}
                    <Typography component="span" variant="caption" sx={{ fontSize: '0.75rem' }}>
                      (in Millions)
                    </Typography>
                  </>
                }
                value={
                  ((summary.contracted_bushels ?? 0) / 1_000_000)
                    .toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                }
                // delta="+1.2%"
                // isPositive={true}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <SummaryCard
                label="Rebate"
                value={`$${(summary.rebate ?? 0).toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}`}
                // delta="-1.1%"
                // isPositive={false}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <SummaryCard
                label="Authorized Growers"
                value={`${summary.authorized_growers ?? 0}%`}
                // delta="-1.1%"
                // isPositive={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SummaryCardsSection;
