import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const DeliveryTable = () => {
  const rows = [
    { plant: "Clear Lake Energy Northeast", totalCapacity: "30%", grower: "28.47%", retailer: "27.75%", national: "4.53%", custom: "-", noScoreGrower: "-", noScoreRetailer: "-", total: "60.75%" },
    { plant: "Clear Lake Energy Northwest", totalCapacity: "64%", grower: "2.42%", retailer: "3.22%", national: "4.36%", custom: "1.41%", noScoreGrower: "-", noScoreRetailer: "-", total: "11.41%" },
    { plant: "Clear Lake Energy Southeast", totalCapacity: "", grower: "", retailer: "1.74%", national: "6.68%", custom: "-", noScoreGrower: "-", noScoreRetailer: "-", total: "8.43%" },
    { plant: "Clear Lake Energy Southwest", totalCapacity: "78%", grower: "", retailer: "8.11%", national: "", custom: "9.8%", noScoreGrower: "1.46%", noScoreRetailer: "-", total: "19.42%" },
    { plant: "Total by Grade Level", totalCapacity: "58%", grower: "30.88%", retailer: "40.88%", national: "15.57", custom: "11.21%", noScoreGrower: "1.46%", noScoreRetailer: "-", total: "100%" },
    // ... other rows
  ];

  return (
    <Box mt={1} sx={{ width: "100%", mt:0}}>
            <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="outlined" color="White" size="small" sx={{ color: 'red', borderColor: 'black' }}>
          Add Quantity
        </Button>
      </Box>
      <TableContainer sx={{maxHeight: 300, width: "100%",}}>
        <Table size="small" sx={{ '& td, & th': { padding: "4px 10px", fontSize: "0.8rem" } }}>
          <TableHead sx={{ '& th': { fontWeight: 'bold' } }}>
            <TableRow>
              <TableCell>Plant / Grade Level</TableCell>
              <TableCell>Delivery % of Total capacity</TableCell>
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
                <TableCell  sx={{fontWeight: 'bold' }}>{row.plant}</TableCell>
                <TableCell>{row.totalCapacity}</TableCell>
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
