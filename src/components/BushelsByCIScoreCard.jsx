import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box, Typography, Paper, Grid, Divider } from '@mui/material';

const pieData = [
  { label: 'Grower', value: 10, color: '#8B0000' },
  { label: 'Retailer', value: 20, color: '#A0522D' },
  { label: 'National', value: 30, color: '#DAA520' },
  { label: 'Custom', value: 15, color: '#D2691E' },
  { label: 'No Score', value: 25, color: '#D3D3D3' },
];

const BushelsByCIScoreCard = () => {
  const ref = useRef();

  useEffect(() => {
    drawChart();
  }, []);

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
      .attr('fill', d => d.data.color);

    // Center text
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .text("68%");
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
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

      {/* <Divider sx={{ my: 2 }} /> */}

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box ref={ref} />
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
              <Typography variant="caption">{item.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default BushelsByCIScoreCard;
