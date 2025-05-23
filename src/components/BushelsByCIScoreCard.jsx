import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Delivered and Pending datasets (same color for No Score items)

const BushelsByCIScoreCard = ({deliveredData, pendingData}) => {
//   console.log(deliveredData, "deliveredData" ,pendingData, "pendingData");
//   const deliveredData1 = [
//   { label: deliveredData?.label, value: 10, color: '#8B0000' },
//   { label: 'Retailer', value: 20, color: '#A0522D' },
//   { label: 'National', value: 30, color: '#D2691E' },
//   { label: 'Custom', value: 15, color: '#DAA520' },
//   { label: 'No Score Grower', value: 10, color: '#F4A300' },
//   { label: 'No Score Retailer', value: 15, color: '#FF6347  ' },
// ];

// const pendingData1 = [
//   { label: 'Grower', value: 12, color: '#8B0000' },
//   { label: 'Retailer', value: 18, color: '#A0522D' },
//   { label: 'National', value: 22, color: '#D2691E' },
//   { label: 'Custom', value: 10, color: '#DAA520' },
//   { label: 'No Score Grower', value: 20, color:'#F4A300 ' },
//   { label: 'No Score Retailer', value: 18, color: '#FF6347 ' },
// ];

  const ref = useRef();
  const [view, setView] = useState('delivered'); // 'delivered' | 'pending'
  const [selectedIndex, setSelectedIndex] = useState(null);

  const chartData = view === 'delivered' ? deliveredData : pendingData;
const totalDelivered = deliveredData?.reduce((sum, d) => sum + d.value, 0).toFixed(2);
const totalPending = pendingData?.reduce((sum, d) => sum + d.value, 0).toFixed(2);

  useEffect(() => {
    drawChart();
  }, [view, selectedIndex, deliveredData, pendingData ]);

  const drawChart = () => {
    const width = 160;
    const height = 160;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(ref.current)
      .html('')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie().value(d => d.value).sort(null); // Disable sorting
    const arc = d3.arc().innerRadius(50).outerRadius(radius);

    const pieData = pie(chartData);

    const arcs = svg
      .selectAll('arc')
      .data(pieData)
      .enter()
      .append('g')
      .on('click', (_, d) => {
        setSelectedIndex(d.index === selectedIndex ? null : d.index);
      });

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color)
      .attr('opacity', d => selectedIndex === null || selectedIndex === d.index ? 1 : 0.3)
      .style('cursor', 'pointer');

    // Center text
    const total = chartData.reduce((sum, d) => sum + d.value, 0);
    let centerText = '100.00%'; // Set default to 100%

    if (selectedIndex !== null) {
      const selected = chartData[selectedIndex];
      const percentage = ((selected.value / total) * 100).toFixed(1);
      centerText = `${percentage}%`;
    }

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('font-size', '20px')
      .style('font-weight', 'bold')
      .text(centerText);
  };

  const toggleView = () => {
    setView(prev => (prev === 'delivered' ? 'pending' : 'delivered'));
    setSelectedIndex(null); // reset selection when switching views
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 4, p: 2,flexGrow: 1 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ fontSize: "18px"}}>
        Bushels by CI score level
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              padding: ' 0px 4px 0px 4px',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
              borderRadius: 2,
              backgroundColor: view === 'delivered' ? '#transparent' : 'transparent',
              border: view === 'delivered' ? '1px solid #1b5e20' : 'none',
            }}
          >
            <Typography variant="caption">DELIVERED BUSHELS</Typography>
            <Typography variant="h6" fontWeight="bold">{totalDelivered}</Typography>
            {/* <Typography variant="caption" color="green">+1.0%</Typography> */}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              padding: ' 0px 4px 0px 4px',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
              borderRadius: 2,
              backgroundColor: view === 'pending' ? '#transparent' : 'transparent',
              border: view === 'pending' ? '1px solid #1b5e20' : 'none',
            }}
          >
            <Typography variant="caption">PENDING BUSHELS</Typography>
            <Typography variant="h6" fontWeight="bold">{totalPending}</Typography>
            {/* <Typography variant="caption" color="green">+1.0%</Typography> */}
          </Box>
        </Grid>
      </Grid>

      <Box
        display="flex"
        flexDirection={{ xs: 'row', md: 'row' }}
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <IconButton onClick={toggleView}>
          <ArrowBackIos fontSize="small" />
        </IconButton>

        <Box ref={ref} />

        <IconButton onClick={toggleView}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>

        <Box>
          {chartData.map((item, i) => (
            <Box key={i} display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  mr: 1,
                  opacity: selectedIndex === null || selectedIndex === i ? 1 : 0.3,
                }}
              />
              <Typography
                variant="caption"
                
                fontWeight={selectedIndex === i ? 'bold' : 'normal'}
              >
                {item.label.toUpperCase()}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default BushelsByCIScoreCard;
