import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ContractsChart = ({ data, width = 500, height = 300 }) => {
  const ref = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 50, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // clean previous

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map(d => d.grade))
      .range([0, innerWidth])
      .padding(0.3);

    const yLeft = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.bushels) + 500])
      .range([innerHeight, 0]);

    const yRight = d3.scaleLinear()
      .domain([0, 40]) // CI Score
      .range([innerHeight, 0]);

    // Bars - Bushels
    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.grade))
      .attr('y', d => yLeft(d.bushels))
      .attr('width', x.bandwidth())
      .attr('height', d => innerHeight - yLeft(d.bushels))
      .attr('fill', '#ADC178');

    // Line - CI Score
    const line = d3.line()
      .x(d => x(d.grade) + x.bandwidth() / 2)
      .y(d => yRight(d.ciScore));

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#7F4F24')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Dots on line
    g.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.grade) + x.bandwidth() / 2)
      .attr('cy', d => yRight(d.ciScore))
      .attr('r', 4)
      .attr('fill', '#7F4F24');

    // X Axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    // Y Axis Left (Bushels)
    g.append('g').call(d3.axisLeft(yLeft));

    // Y Axis Right (CI Score)
    g.append('g')
      .attr('transform', `translate(${innerWidth},0)`)
      .call(d3.axisRight(yRight));

  }, [data, width, height]);

  return <svg ref={ref} />;
};

export default ContractsChart;
