import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddCustomerForm = ({ onBack }) => {
  const [expanded, setExpanded] = useState("customerDetails");

  const [formValues, setFormValues] = useState({
    source: "Internal",
    type: "Ethanol Company",
    erp: "AGRIS",
    customerName: "",
    plantName: "",
    plantId: "",
    adminFirstName: "",
    adminLastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (field) => (e) => {
    setFormValues({ ...formValues, [field]: e.target.value });
  };

  const toggleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const displaySummary = (fields) => (
    <Typography variant="body2" color="textSecondary">
      {fields
        .map((field) => formValues[field])
        .filter(Boolean)
        .join(" | ") || "Incomplete"}
    </Typography>
  );

  return (
    <Paper sx={{ m: 2, p: 2, borderRadius: 2 }}>
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" ml={1}>
          New Customer Account
        </Typography>
      </Box>

      {/* Customer Details Accordion */}
      <Accordion
        expanded={expanded === "customerDetails"}
        onChange={toggleAccordion("customerDetails")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">1. Customer Details</Typography>
          <Box ml={2}>
            {expanded !== "customerDetails" &&
              displaySummary(["source", "type", "customerName"])}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="subtitle2">Source *</Typography>
            <RadioGroup
              row
              value={formValues.source}
              onChange={handleChange("source")}
            >
              <FormControlLabel
                value="Internal"
                control={<Radio />}
                label="Internal"
              />
              <FormControlLabel
                value="External"
                control={<Radio />}
                label="External"
              />
            </RadioGroup>

            <Typography variant="subtitle2" mt={2}>
              Customer Type *
            </Typography>
            <RadioGroup
              row
              value={formValues.type}
              onChange={handleChange("type")}
            >
              <FormControlLabel
                value="Ethanol Company"
                control={<Radio />}
                label="Ethanol Company"
              />
              <FormControlLabel
                value="Retailer"
                control={<Radio />}
                label="Retailer"
              />
            </RadioGroup>

            <Grid container spacing={2} mt={1} width={"50%"}>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="ERP"
                  value={formValues.erp}
                  onChange={handleChange("erp")}
                >
                  <MenuItem value="AGRIS">AGRIS</MenuItem>
                  <MenuItem value="CINCH">CINCH</MenuItem>
                  <MenuItem value="n/a">n/a</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Customer Name *"
                  value={formValues.customerName}
                  onChange={handleChange("customerName")}
                />
              </Grid>
              {formValues.type === "Ethanol Company" ? (
                <>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Plant Name *"
                      value={formValues.plantName}
                      onChange={handleChange("plantName")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Plant ID (ERP ID) *"
                      value={formValues.plantId}
                      onChange={handleChange("plantId")}
                    />
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Location Name *"
                      value={formValues.locationName}
                      onChange={handleChange("locationName")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Location ID (ERP ID) *"
                      value={formValues.locationId}
                      onChange={handleChange("locationId")}
                    />
                  </Grid>
                </>
              )}
            </Grid>
            {formValues.type === "Ethanol Company" ? (
              <>
                {" "}
                <Box mt={2}>
                  <Button variant="text" color="secondary">
                    + Add Plant
                  </Button>
                </Box>
              </>
            ) : (
              <>
                {" "}
                <Box mt={2}>
                  <Button variant="text" color="secondary">
                    + Add Location
                  </Button>
                </Box>{" "}
              </>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Customer Admin Accordion */}
      <Accordion
        expanded={expanded === "customerAdmin"}
        onChange={toggleAccordion("customerAdmin")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">2. Customer Administrator</Typography>
          <Box ml={2}>
            {expanded !== "customerAdmin" &&
              displaySummary(["adminFirstName", "adminLastName", "email"])}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Admin First Name"
                value={formValues.adminFirstName}
                onChange={handleChange("adminFirstName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Admin Last Name"
                value={formValues.adminLastName}
                onChange={handleChange("adminLastName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={formValues.email}
                onChange={handleChange("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formValues.phone}
                onChange={handleChange("phone")}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Footer Buttons */}
      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined" onClick={onBack}>
          Cancel
        </Button>
        <Button variant="contained" color="success">
          Add Customer
        </Button>
      </Box>
    </Paper>
  );
};

export default AddCustomerForm;
