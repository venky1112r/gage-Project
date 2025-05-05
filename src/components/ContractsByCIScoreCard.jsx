import { React, useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ContractsChart from "./ContractsChart";
import DeliveryTable from "./DeliveryTable";
import CheckIcon from "@mui/icons-material/Check";

const data = [
  { grade: "Grower", bushels: 2784,pending: 540, ciScore: 30 },
  { grade: "Retailer", bushels: 2607,pending: 0, ciScore: 26 },
  { grade: "National", bushels: 3900,pending: 200, ciScore: 35 },
  { grade: "Custom", bushels: 2431,pending: 120, ciScore: 22 },
  { grade: "No Score Grower", bushels: 2045,pending: 1294, ciScore: 18 },
  { grade: "No Score Retailer", bushels: 1224,pending: 296, ciScore: 20 },
];

const ContractsByCIScoreCard = () => {
  const [view, setView] = useState("delivered");

  const handleViewChange = (event, newView) => {
    if (newView === null) {
      setView("delivered");
    }
    setView(newView);
  };
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Contracts by CI Score level
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          size="small"
        >
          <ToggleButton value="delivered">
            Delivered
            <CheckIcon fontSize="small" sx={{ mr: 0.5 }} />
          </ToggleButton>
          <ToggleButton value="pending">
            Pending
            {view === "pending" && (
              <CheckIcon fontSize="small" sx={{ mr: 0.5 }} />
            )}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Box mt={2}>
        <ContractsChart data={data} width={500} height={300} view={view} />
        <DeliveryTable />
      </Box>
    </Paper>
  );
};

export default ContractsByCIScoreCard;
