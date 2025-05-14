import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
  Grid,
  InputAdornment,
} from "@mui/material";

const ManualInputsComponent = () => {
  const [rows, setRows] = useState([{
    from_date: "2025-04-01",
    to_date: "2025-04-30",
    ng: "12.5", // thousand MMBTU
    cl: "3.2",  // short tons
    ge: "4.1",  // million kWh
    re: "1.3",  // million kWh
    bushels_processed: "1350000", // BU
    ethanol_produced: "42.8", // million gallons
    lastupdatedon: "05/10/2025",
    updatedby: "Alice Johnson",
  },
  {
    from_date: "2025-03-01",
    to_date: "2025-03-31",
    ng: "11.9",
    cl: "2.8",
    ge: "3.9",
    re: "1.1",
    bushels_processed: "1280000",
    ethanol_produced: "40.2",
    lastupdatedon: "04/09/2025",
    updatedby: "Bob Smith",
  },
  {
    from_date: "2025-02-01",
    to_date: "2025-02-28",
    ng: "13.1",
    cl: "3.5",
    ge: "4.3",
    re: "1.4",
    bushels_processed: "1400000",
    ethanol_produced: "44.0",
    lastupdatedon: "03/07/2025",
    updatedby: "Clara Lee",
  },{
    from_date: "2025-02-01",
    to_date: "2025-02-28",
    ng: "13.1",
    cl: "3.5",
    ge: "4.3",
    re: "1.4",
    bushels_processed: "1400000",
    ethanol_produced: "44.0",
    lastupdatedon: "03/07/2025",
    updatedby: "Clara Lee",
  },
{
    from_date: "2025-03-01",
    to_date: "2025-03-31",
    ng: "11.9",
    cl: "2.8",
    ge: "3.9",
    re: "1.1",
    bushels_processed: "1280000",
    ethanol_produced: "40.2",
    lastupdatedon: "04/09/2025",
    updatedby: "Bob Smith",
  },
{
    from_date: "2025-03-01",
    to_date: "2025-03-31",
    ng: "11.9",
    cl: "2.8",
    ge: "3.9",
    re: "1.1",
    bushels_processed: "1280000",
    ethanol_produced: "40.2",
    lastupdatedon: "04/09/2025",
    updatedby: "Bob Smith",
  },
  {
    from_date: "2025-02-01",
    to_date: "2025-02-28",
    ng: "13.1",
    cl: "3.5",
    ge: "4.3",
    re: "1.4",
    bushels_processed: "1400000",
    ethanol_produced: "44.0",
    lastupdatedon: "03/07/2025",
    updatedby: "Clara Lee",
  },]);
  const [formData, setFormData] = useState({
    from_date: "",
    to_date: "",
    ng: "",
    cl: "",
    ge: "",
    re: "",
    bushels_processed: "",
    ethanol_produced: "",
    updatedby: "",
    conversion_efficiency: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const newRow = {
      ...formData,
      lastupdatedon: new Date().toLocaleDateString(),
    };
    setRows((prev) => [newRow, ...prev]);
    clearForm(); // Clear after save
  };

  const clearForm = () => {
    setFormData({
      from_date: "",
      to_date: "",
      ng: "",
      cl: "",
      ge: "",
      re: "",
      bushels_processed: "",
      ethanol_produced: "",
      updatedby: "",
    });
  };

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const fields = [
    { label: "From Date", field: "from_date", type: "date", unit: "" },
    { label: "To Date", field: "to_date", type: "date", unit: "" },
    { label: "Fossil Natural Gas (NG)", field: "ng", unit: "Thousand MMBTU" },
    { label: "Coal Usage (CL)", field: "cl", unit: "Short tons" },
    { label: "Grid Electricity Usage (GE)", field: "ge", unit: "Million kWh" },
    {
      label: "Renewable Electricity Usage (RE)",
      field: "re",
      unit: "Million kWh",
    },
    {
      label: "Total Bushels Processed",
      field: "bushels_processed",
      unit: "BU",
    },
    {
      label: "Total Ethanol Produced",
      field: "ethanol_produced",
      unit: "Million Gallons",
    },
    { label: "Conversion Efficiency", field: "Conversion_Efficiency", unit: "" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Plant Operational details
      </Typography>

      {fields.map((item) => (
        <Grid
          container
          spacing={2}
          alignItems="center"
          key={item.field}
          sx={{ mb: 1 }}
        >
          <Grid item xs={5} sm={3}>
            <Typography variant="body2">{item.label}</Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <TextField
              type={item.type || "text"}
              fullWidth
              size="small"
              value={formData[item.field]}
              onChange={(e) => handleChange(item.field, e.target.value)}
              InputLabelProps={item.type === "date" ? { shrink: true } : {}}
              InputProps={{
                endAdornment: item.unit ? (
                  <InputAdornment position="end">
                    <Typography
                      sx={{ fontSize: "14px", color: "text.secondary" }}
                    >
                      {item.unit}
                    </Typography>
                  </InputAdornment>
                ) : null,
              }}
            />
          </Grid>
        </Grid>
      ))}

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleSave} sx={{ mr: 2 }}>
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={clearForm}>
          Clear
        </Button>
      </Box>

      {/* <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Submitted Data
      </Typography> */}

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>From Date</TableCell>
              <TableCell>To Date</TableCell>
              <TableCell>NG</TableCell>
              <TableCell>CL</TableCell>
              <TableCell>GE</TableCell>
              <TableCell>RE</TableCell>
              <TableCell>Bushels</TableCell>
              <TableCell>Ethanol</TableCell>
              <TableCell>Updated On</TableCell>
              <TableCell>Updated By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{page * rowsPerPage + idx + 1}</TableCell>
                  <TableCell>{row.from_date}</TableCell>
                  <TableCell>{row.to_date}</TableCell>
                  <TableCell>{row.ng}</TableCell>
                  <TableCell>{row.cl}</TableCell>
                  <TableCell>{row.ge}</TableCell>
                  <TableCell>{row.re}</TableCell>
                  <TableCell>{row.bushels_processed}</TableCell>
                  <TableCell>{row.ethanol_produced}</TableCell>
                  <TableCell>{row.lastupdatedon}</TableCell>
                  <TableCell>{row.updatedby}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20]}
      />
      <TablePagination
  component="div"
  count={rows.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  rowsPerPageOptions={[5, 10, 20]}
  labelDisplayedRows={({ from, to, count }) =>
    `${from}-${to} of ${count} row${count !== 1 ? 's' : ''}`
  }
/> */}
<TablePagination
  component="div"
  count={rows.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  rowsPerPageOptions={[5, 10, 20]}
  labelDisplayedRows={({ page }) => {
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    return `Page ${page + 1} of ${totalPages} — ${rows.length} record${rows.length !== 1 ? 's' : ''}`;
  }}
/>

    </Box>
  );
};

export default ManualInputsComponent;
