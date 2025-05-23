import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import OperationalScoreCard from "../components/OperationalScoreCard";
import BushelsByCIScoreCard from "../components/BushelsByCIScoreCard";
import ContractsByCIScoreCard from "../components/ContractsByCIScoreCard";

const DashboardBottomComponent = ({data}) => {
  const levelColors = {
  'Grower': '#8B0000',
  'Retailer': '#A0522D',
  'National': '#D2691E',
  'Custom': '#DAA520',
  'No Score Grower': '#F4A300',
  'No Score Retailer': '#FF6347',
};

  console.log( "DB component data", data?.ci_score_level_delivered);
const deliveredData = (data?.ci_score_level_delivered || []).map(item => ({
    label: item.role,
    value: item.delivered || 0,
    color: levelColors[item.role] || '#ccc', // fallback color
  }));

  const pendingData = (data?.ci_score_level_pending || []).map(item => ({
    label: item.role,
    value: item.pending || 0,
    color: levelColors[item.role] || '#ccc',
  }));
  console.log(deliveredData, "deliveredData", pendingData, "pendingData");
  return (
    <Box sx={{ p: { xs: 2, sm: 2 }, mt: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2} height={'100%'}>
       
            <OperationalScoreCard />
             <BushelsByCIScoreCard 
             deliveredData={deliveredData}
              pendingData={pendingData}
              />
          </Stack>

          {/* <Box sx={{backgroundColor:"yellow"}}>Left</Box> */}
        </Grid>
        <Grid item xs={12} md={7}>
          {/* <Box sx={{backgroundColor:"red" , height:"100%"}}>Right</Box> */}
          <ContractsByCIScoreCard deliveredData={deliveredData} pendingData={pendingData}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardBottomComponent;
