import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const SummaryCard = ({
  label,
  value,
  delta,
  isPositive,
  subLabel,
  labelVariant = "subtitle2",
  valueVariant = "h3",
}) => {
  const [intPart, decimalPart] = value.toString().split(".");
  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 4,
        p: 2,
        mb:0,
        minWidth: 200,
        height: { xs: "auto", md: "100%" },
        maxHeight: { xs: "none", md: "120px" },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant={labelVariant} fontWeight="bold" gutterBottom>
            {label}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            color={isPositive ? "#007f5c" : "#d32f2f"}
          >
            {isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
            <Typography variant="body2">{delta}</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="baseline">
          <Typography variant={valueVariant} color="#003320">
            {intPart}
          </Typography>
          {decimalPart && (
            <Typography variant="h3" color="#003320">
              .{decimalPart}
            </Typography>
          )}
        </Box>
      </Box>

      {subLabel && (
        <Typography variant="caption" color="text.secondary">
          {subLabel}
        </Typography>
      )}
    </Paper>
  );
};

export default SummaryCard;
