import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const ContractsChart = ({ data }) => {
  const containerRef = useRef();
  const svgRef = useRef();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const height = width * 0.6; // keep responsive ratio (60% of width)
      setSize({ width, height });
    });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!size.width || !data.length) return;

    const { width, height } = size;
    const margin = { top: 20, right: 40, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // clear before redraw

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
      .domain([0, 40])
      .range([innerHeight, 0]);

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.grade))
      .attr('y', d => yLeft(d.bushels))
      .attr('width', x.bandwidth())
      .attr('height', d => innerHeight - yLeft(d.bushels))
      .attr('fill', '#ADC178');

    const line = d3.line()
      .x(d => x(d.grade) + x.bandwidth() / 2)
      .y(d => yRight(d.ciScore));

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#7F4F24')
      .attr('stroke-width', 2)
      .attr('d', line);

    g.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.grade) + x.bandwidth() / 2)
      .attr('cy', d => yRight(d.ciScore))
      .attr('r', 4)
      .attr('fill', '#7F4F24');

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    g.append('g').call(d3.axisLeft(yLeft));
    g.append('g')
      .attr('transform', `translate(${innerWidth},0)`)
      .call(d3.axisRight(yRight));
  }, [size, data]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg ref={svgRef} />
    </div>
  );
};

export default ContractsChart;
