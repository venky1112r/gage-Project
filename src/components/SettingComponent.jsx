import { React, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ReportingComponent from "./ReportingComponent";
import BusinessRulesComponent from "./BusinessRulesComponent";
import ManualInputsComponent from "./ManualInputsComponent";

const SettingComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          p: 3,
          m: 2,
          border: "1px solid #ccc",
          borderRadius: 4,
          bgcolor: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            mb: 1,
            color: "#000000",
            "& .MuiTabs-indicator": {
              backgroundColor: "#000000", // This changes the underline color
            },
          }}
        >
          <Tab
            sx={{
              textTransform: "capitalize",
              color: "#000000",
              "&.Mui-selected": {
                color: "#000000", // This changes the underline color
              },
            }}
            label="Bussiness Rules"
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              color: "#000000",
             "&.Mui-selected": {
                color: "#000000", // This changes the underline color
              },
            }}
            label="Manual Inputs"
          />
        </Tabs>

        {value === 0 && (
          <Box sx={{ p: 3 }}>
            <BusinessRulesComponent />
          </Box>
        )}
        {value === 1 && (
          <Box sx={{ p: 3 }}>
            <ManualInputsComponent />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default SettingComponent;
