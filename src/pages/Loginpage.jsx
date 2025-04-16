import React, { useState } from "react";
import { Typography, TextField, Button, Link, Box } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showSSO, setShowSSO] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSSO(true); // Hide form fields and show SSO message
    }
  };

  return (
    <Box sx={{ 
      height: "100vh", 
      width: '100vw', 
      display: "flex",
      overflow: 'hidden'
    }}>
      {/* Left Side - Branding */}
      <Box
        sx={{
          width: '50%',
          height: '100%',
          backgroundColor: '#d3e0d2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Typography variant="h1" fontWeight="bold" sx={{ color: "#154734" }}>
          G.A.G.E.
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, color: "#2e5939" }}>
          Grow Above Green Energy
        </Typography>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box 
          component="form"
          onSubmit={handleLogin}
          sx={{ 
            width: "100%", 
            maxWidth: 400,
            backgroundColor: '#fff',
            p: 4,
            borderRadius: 2
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Log in to continue
          </Typography>

          {!showSSO ? (
            <>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <Box textAlign="right" sx={{ mt: 1 }}>
                <Link href="#" sx={{ color: "red", fontSize: "0.775rem" }}>
                  Forgot your Password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  backgroundColor: "#154734",
                  "&:hover": { backgroundColor: "#2e5939" },
                }}
              >
                LOG IN
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                For a secure login you will be redirected to a single-sign on page for logging into GAGE Dashboard.
              </Typography>
              
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#154734",
                  "&:hover": { backgroundColor: "#2e5939" },
                }}
                onClick={() => {
                  // Add your actual SSO redirect logic here
                  console.log("Redirecting to SSO...");
                  // window.location.href = "https://your-sso-provider.com/auth";
                }}
              >
                LOGIN VIA SSO
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;