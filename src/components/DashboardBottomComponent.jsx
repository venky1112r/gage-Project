import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import OperationalScoreCard from "../components/OperationalScoreCard";
import BushelsByCIScoreCard from "../components/BushelsByCIScoreCard";
import ContractsByCIScoreCard from "../components/ContractsByCIScoreCard";

const DashboardBottomComponent = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 2 }, mt: 0, py: 2 }}>
       <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
            <Grid container spacing={2} direction={"column"}  >
                <Grid item>
                    {/* <Box sx={{backgroundColor:"red"}}>Top</Box> */}
                    <OperationalScoreCard/>
                </Grid>
                <Grid item>
                    {/* <Box sx={{backgroundColor:"yellow"}}>Bottom</Box> */}
                    <BushelsByCIScoreCard />
                </Grid>
            </Grid>
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
