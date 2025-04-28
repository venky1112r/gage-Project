import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const DeliveryTable = () => {
  const rows = [
    { plant: "Clear Lake Energy Northeast", grower: "28.47%", retailer: "27.75%", national: "4.53%", custom: "-", noScoreGrower: "-", noScoreRetailer: "-", total: "60.75%" },
    { plant: "Clear Lake Energy Northwest", grower: "2.42%", retailer: "3.22%", national: "4.36%", custom: "1.41%", noScoreGrower: "-", noScoreRetailer: "-", total: "11.41%" },
    // ... other rows
  ];

  return (
    <Box mt={1}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Plant / Grade Level</TableCell>
              <TableCell>Grower</TableCell>
              <TableCell>Retailer</TableCell>
              <TableCell>National</TableCell>
              <TableCell>Custom</TableCell>
              <TableCell>No Score Grower</TableCell>
              <TableCell>No Score Retailer</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.plant}</TableCell>
                <TableCell>{row.grower}</TableCell>
                <TableCell>{row.retailer}</TableCell>
                <TableCell>{row.national}</TableCell>
                <TableCell>{row.custom}</TableCell>
                <TableCell>{row.noScoreGrower}</TableCell>
                <TableCell>{row.noScoreRetailer}</TableCell>
                <TableCell>{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DeliveryTable;
