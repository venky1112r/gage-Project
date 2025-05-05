import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const ContractsChart = ({ data, view }) => {
  const containerRef = useRef();
  const svgRef = useRef();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const height = width * 0.5;
      setSize({ width, height });
    });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!size.width || !data.length) return;

    const { width, height } = size;
    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const showPending = view === "pending";

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Legend
    const legend = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left}, 20)`);

    // Delivered
    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 16)
      .attr("height", 16)
      .attr("fill", "#ADC178");
    legend
      .append("text")
      .attr("x", 22)
      .attr("y", 13)
      .attr("font-size", "12px")
      .text("DELIVERED BUSHELS");

    // Line (CI)
    legend
      .append("line")
      .attr("x1", 370)
      .attr("y1", 8)
      .attr("x2", 390)
      .attr("y2", 8)
      .attr("stroke", "#7F4F24")
      .attr("stroke-width", 2);
    legend
      .append("circle")
      .attr("cx", 380)
      .attr("cy", 8)
      .attr("r", 3)
      .attr("fill", "#7F4F24");
    legend
      .append("text")
      .attr("x", 400)
      .attr("y", 13)
      .attr("font-size", "12px")
      .text("AVERAGE CI SCORE");
      
    if (showPending) {
      // Pending
      legend
        .append("rect")
        .attr("x", 180)
        .attr("y", 0)
        .attr("width", 16)
        .attr("height", 16)
        .attr("fill", "#ccc");
      legend
        .append("text")
        .attr("x", 200)
        .attr("y", 13)
        .attr("font-size", "12px")
        .text("PENDING BUSHELS");
    }

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.grade))
      .range([0, innerWidth])
      .padding(0.3);

    const maxTotal = d3.max(
      data,
      (d) => d.bushels + (showPending ? d.pending || 0 : 0)
    );
    const yLeft = d3
      .scaleLinear()
      .domain([0, maxTotal + 500])
      .range([innerHeight, 0]);

    const yRight = d3.scaleLinear().domain([0, 40]).range([innerHeight, 0]);

    // Delivered bars
    g.selectAll(".delivered-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.grade))
      .attr("y", (d) => yLeft(d.bushels))
      .attr("width", x.bandwidth())
      .attr("height", (d) => innerHeight - yLeft(d.bushels))
      .attr("fill", "#ADC178");

    // Delivered values
    g.selectAll(".delivered-label")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.bushels)
      .attr("x", (d) => x(d.grade) + x.bandwidth() / 2)
      .attr("y", (d) => yLeft(d.bushels) - 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");

    // Pending bars
    if (showPending) {
      g.selectAll(".pending-bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.grade))
        .attr("y", (d) => yLeft(d.bushels + (d.pending || 0)))
        .attr("width", x.bandwidth())
        .attr(
          "height",
          (d) => yLeft(d.bushels) - yLeft(d.bushels + (d.pending || 0))
        )
        .attr("fill", "#ccc");

      g.selectAll(".pending-label")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d.pending || "")
        .attr("x", (d) => x(d.grade) + x.bandwidth() / 2)
        .attr("y", (d) => yLeft(d.bushels + (d.pending || 0)) - 5)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "#333")
        .attr("font-weight", "bold");
    }

    // Line path
    const line = d3
      .line()
      .x((d) => x(d.grade) + x.bandwidth() / 2)
      .y((d) => yRight(d.ciScore));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#7F4F24")
      .attr("stroke-width", 2)
      .attr("d", line);

    g.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.grade) + x.bandwidth() / 2)
      .attr("cy", (d) => yRight(d.ciScore))
      .attr("r", 4)
      .attr("fill", "#7F4F24");

    // Axes
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));
    g.append("g").call(d3.axisLeft(yLeft));
    g.append("g")
      .attr("transform", `translate(${innerWidth},0)`)
      .call(d3.axisRight(yRight));

    // Axis labels
    svg
      .append("text")
      .attr(
        "transform",
        `translate(${margin.left / 5}, ${
          margin.top + innerHeight / 2
        }) rotate(-90)`
      )
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text("BUSHELS");

    svg
      .append("text")
      .attr(
        "transform",
        `translate(${width - margin.right / 5}, ${
          margin.top + innerHeight / 2
        }) rotate(90)`
      )
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text("CI SCORE");

    svg
      .append("text")
      .attr(
        "transform",
        `translate(${margin.left + innerWidth / 2}, ${height - 5})`
      )
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text("GRADE LEVEL");
  }, [size, data, view]);

  return (
    <div>
      <div ref={containerRef} style={{ width: "100%" }}>
        <svg ref={svgRef} />
      </div>
    </div>
  );
};

export default ContractsChart;
