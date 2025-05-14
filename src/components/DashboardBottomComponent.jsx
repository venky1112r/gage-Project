import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import OperationalScoreCard from "../components/OperationalScoreCard";
import BushelsByCIScoreCard from "../components/BushelsByCIScoreCard";
import ContractsByCIScoreCard from "../components/ContractsByCIScoreCard";

const DashboardBottomComponent = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 2 }, mt: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2} height={'100%'}>
       
            <OperationalScoreCard />
             <BushelsByCIScoreCard />
          </Stack>

          {/* <Box sx={{backgroundColor:"yellow"}}>Left</Box> */}
        </Grid>
        <Grid item xs={12} md={7}>
          {/* <Box sx={{backgroundColor:"red" , height:"100%"}}>Right</Box> */}
          <ContractsByCIScoreCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardBottomComponent;
