import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  IconButton,
  TextField,
  InputBase,
} from "@mui/material";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";

const BusinessRulesComponent = () => {
  const [rows, setRows] = useState([
    {
      gradelevel: "National",
      civalue: "14.6",
      lastupdatedon: "01/01/2023",
      updatedby: "John Doe",
    },
    {
      gradelevel: "Retailer1",
      civalue: "12.6",
      lastupdatedon: "01/01/2023",
      updatedby: "John Doe",
    },
    {
      gradelevel: "Retailer2",
      civalue: "10.6",
      lastupdatedon: "01/01/2023",
      updatedby: "John Doe",
    },
    {
      gradelevel: "Retailer3",
      civalue: "8.6",
      lastupdatedon: "01/01/2023",
      updatedby: "John Doe",
    },
  ]);

  const [editIdx, setEditIdx] = useState(-1);
  const [editValue, setEditValue] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditValue(rows[idx].civalue);
  };

  const handleSave = () => {
    const updatedRows = [...rows];
    updatedRows[editIdx].civalue = editValue;
    setRows(updatedRows);
    setEditIdx(-1);
    setEditValue("");
  };

  const handleCancel = () => {
    setEditIdx(-1);
    setEditValue("");
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredRows = rows.filter((row) =>
    row.gradelevel.toLowerCase().includes(searchText) ||
    // row.gradelevel.toLowerCase().includes(searchText) ||
  row.civalue.toLowerCase().includes(searchText) 
  );

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        CI Score Averages
      </Typography>

      <Box sx={{ mb: 2, display: "flex", alignItems: "center", maxWidth: 300 , border: "1px solid #9EA9A3", borderRadius:"6px"}}>
        <SearchIcon sx={{ mr: 1 }} />
        <InputBase
          placeholder="Search Grade Level"
          fullWidth
          onChange={handleSearch}
          value={searchText}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ "& th": { fontWeight: "bold" } }}>
            <TableRow>
              <TableCell>Grade Level</TableCell>
              <TableCell>CI Value</TableCell>
              <TableCell>Last Updated On</TableCell>
              <TableCell>Updated By</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.gradelevel}</TableCell>

                <TableCell>
                  {editIdx === idx ? (
                    <TextField
                      size="small"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      type="number"
                      inputProps={{ step: "0.1" }}
                    />
                  ) : (
                    row.civalue
                  )}
                </TableCell>

                <TableCell>{row.lastupdatedon}</TableCell>
                <TableCell>{row.updatedby}</TableCell>

                <TableCell align="center">
                  {editIdx === idx ? (
                    <>
                      <IconButton color="primary" onClick={handleSave} size="small">
                        <SaveIcon fontSize="small" />
                      </IconButton>
                      <IconButton color="error" onClick={handleCancel} size="small">
                        <CancelIcon fontSize="small" />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(rows.indexOf(row))}
                      size="small"
                    >
                      <ModeEditOutlineOutlinedIcon sx={{ color: "#000000" }} fontSize="small" />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={4}>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Heat Maps Averages (Country/State)
        </Typography>
        <Button
          variant="outlined"
          sx={{ mt: 2, color: "#000000", borderColor: "#000000" }}
        >
          Upload DTN File
        </Button>
        <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
          File format: .csv file (5MB max)
        </Typography>
      </Box>
    </Box>
  );
};

export default BusinessRulesComponent;
