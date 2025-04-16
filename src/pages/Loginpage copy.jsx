import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";

const Login = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Side */}
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{
          backgroundColor: "#d3e0d2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "#154734", fontWeight: "bold" }}>
          G.A.G.E.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2, color: "#2e5939" }}>
          Grow Above Green Energy
        </Typography>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ width: "75%", maxWidth: 400 }}>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Log in to continue
          </Typography>
          <Box component="form" noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <Link href="#" variant="body2" sx={{ float: "right", mt: 1, mb: 2 }}>
              Forgot your password?
            </Link>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#154734",
                "&:hover": { backgroundColor: "#103726" },
              }}
            >
              LOG IN
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
