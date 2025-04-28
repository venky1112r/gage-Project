import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Box, Typography, Paper, Grid, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const pieData = [
  { label: 'Grower', value: 10, color: '#8B0000' },
  { label: 'Retailer', value: 20, color: '#A0522D' },
  { label: 'National', value: 30, color: '#DAA520' },
  { label: 'Custom', value: 15, color: '#D2691E' },
  { label: 'No Score', value: 25, color: '#D3D3D3' },
];

const BushelsByCIScoreCard = () => {
  const ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    drawChart();
  }, [currentIndex]);

  const drawChart = () => {
    const width = 160;
    const height = 160;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(ref.current)
      .html('')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(50).outerRadius(radius);

    const arcs = svg.selectAll('arc')
      .data(pie(pieData))
      .enter()
      .append('g');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => i === currentIndex ? d.data.color : '#D3D3D3');

    // Center text
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .text(`${pieData[currentIndex].value}%`);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pieData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pieData.length) % pieData.length);
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Bushels by CI score level
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="caption">DELIVERED BUSHELS</Typography>
          <Typography variant="h6" fontWeight="bold">64,124.30</Typography>
          <Typography variant="caption" color="green">+1.0%</Typography> 
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption">PENDING BUSHELS</Typography>
          <Typography variant="h6" fontWeight="bold">9,124.30</Typography>
          <Typography variant="caption" color="green">+1.0%</Typography>
        </Grid>
      </Grid>

      <Box 
        display="flex" 
        flexDirection={{ xs: 'row', md: 'row' }} 
        justifyContent="space-around" 
        alignItems="center"
        mt={2}
      >
        <IconButton onClick={handlePrevious}>
          <ArrowBackIos fontSize="small" />
        </IconButton>

        <Box ref={ref} />

        <IconButton onClick={handleNext}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>

        <Box>
          {pieData.map((item, i) => (
            <Box key={i} display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  mr: 1,
                }}
              />
              <Typography 
                variant="caption" 
                fontWeight={i === currentIndex ? 'bold' : 'normal'}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default BushelsByCIScoreCard;
