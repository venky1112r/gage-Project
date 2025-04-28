import React, { useState } from "react";
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
  IconButton,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const ManualInputsComponent = () => {
  const [rows, setRows] = useState([
    { 
      plant: "Clear Lake Energy Northeast",
      total_bushels: "14,000",
      plant_footprint: "14.3",
      transportation: "4.3",
      lastupdatedon: "12/16/2024",
      updatedby: "Jack Sparrow",
    },
    {
      plant: "Clear Lake Energy Northwest",
      total_bushels: "14,000",
      plant_footprint: "14.3",
      transportation: "4.3",
      lastupdatedon: "12/16/2024",
      updatedby: "Jack Sparrow",
    },
    {
      plant: "Clear Lake Energy Southeast",
      total_bushels: "14,000",
      plant_footprint: "14.3",
      transportation: "4.3",
      lastupdatedon: "12/16/2024",
      updatedby: "Jack Sparrow",
    },
    {
      plant: "Clear Lake Energy Southwest",
      total_bushels: "14,000",
      plant_footprint: "14.3",
      transportation: "4.3",
      lastupdatedon: "12/16/2024",
      updatedby: "Jack Sparrow",
    },
  ]);

  const [editIdx, setEditIdx] = useState(-1);
  const [editRowData, setEditRowData] = useState({});

  const handleEdit = (index) => {
    setEditIdx(index);
    setEditRowData(rows[index]);
  };

  const handleCancel = () => {
    setEditIdx(-1);
    setEditRowData({});
  };

  const handleSave = () => {
    const updatedRows = [...rows];
    updatedRows[editIdx] = editRowData;
    setRows(updatedRows);
    setEditIdx(-1);
  };

  const handleChange = (field, value) => {
    setEditRowData({ ...editRowData, [field]: value });
  };

  return (
    <div>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Operational Details
        </Typography>
        <Box mt={1}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Plant</TableCell>
                  <TableCell>Total Capacity, Bushels</TableCell>
                  <TableCell>Plant Footprint</TableCell>
                  <TableCell>Transportation</TableCell>
                  <TableCell>Last updated on</TableCell>
                  <TableCell>Updated by</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx} hover>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>
                      {row.plant}
                    </TableCell>
                    <TableCell>
                      {editIdx === idx ? (
                        <TextField
                          value={editRowData.total_bushels}
                          onChange={(e) =>
                            handleChange("total_bushels", e.target.value)
                          }
                          size="small"
                        />
                      ) : (
                        row.total_bushels
                      )}
                    </TableCell>
                    <TableCell>
                      {editIdx === idx ? (
                        <TextField
                          value={editRowData.plant_footprint}
                          onChange={(e) =>
                            handleChange("plant_footprint", e.target.value)
                          }
                          size="small"
                        />
                      ) : (
                        row.plant_footprint
                      )}
                    </TableCell>
                    <TableCell>
                      {editIdx === idx ? (
                        <TextField
                          value={editRowData.transportation}
                          onChange={(e) =>
                            handleChange("transportation", e.target.value)
                          }
                          size="small"
                        />
                      ) : (
                        row.transportation
                      )}
                    </TableCell>
                    <TableCell>{row.lastupdatedon}</TableCell>
                    <TableCell>{row.updatedby}</TableCell>
                    <TableCell align="center">
                      {editIdx === idx ? (
                        <>
                          <IconButton
                            color="primary"
                            onClick={handleSave}
                            size="small"
                          >
                            <SaveIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={handleCancel}
                            size="small"
                          >
                            <CancelIcon fontSize="small" />
                          </IconButton>
                        </>
                      ) : (
                        <IconButton
                          color="primary"
                          onClick={() => handleEdit(idx)}
                          size="small"
                        >
                          <ModeEditOutlineOutlinedIcon sx={{ color: '#000000' }} fontSize="small" />
                          </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default ManualInputsComponent;
