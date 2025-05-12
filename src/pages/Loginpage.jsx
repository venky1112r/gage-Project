import React, { useState } from "react";
import { Typography, TextField, Button, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showSSO, setShowSSO] = useState(false);

  const navigate = useNavigate();

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
      setShowSSO(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
      }}
    >
      {/* Left Side - Branding */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "50vh", md: "100vh" },
          backgroundColor: "#d3e0d2",
          display: "flex",
          flexDirection: "column",
         justifyContent: "center",
          alignItems: "center", 
          textAlign: "center",  
          px: 2,
           position: "relative", // Needed for absolute positioning
        }}
      >
        <Box margin={'auto'}>

   
        <Typography
          variant="h1"
          fontWeight="bold"
          color="primary.main"
          sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "5rem" } }}
        >
          G.A.G.E.
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, color: "#2e5939", fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          Grown Above Ground Energy
        </Typography>
             </Box>
                {/* Logo in bottom-right */}
        <Box
          component="img"
          src="src/assets/logos/Cultura_Logo_Primary_LightBG.png" // Replace with actual logo filename in /public
          width={150}          
          alt="Company Logo"
          // alignSelf={'end'}
          // marginTop={'auto'}
    sx={{
      position: "absolute",
      bottom: { xs: 12, md: 24 },
      right: { xs: 12, md: 24 },
      width: { xs: 80, sm: 100, md: 140 },
      maxHeight: { xs: 60, sm: 80, md: 100 },
      objectFit: "contain",
    }}
        />
      
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "auto", md: "100vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, sm: 4 },
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: "100%",
            maxWidth: 400,
            backgroundColor: "#fff",
            p: 4,
            // borderRadius: 2,
            // boxShadow: { xs: "none", md: 3 },
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }} textAlign={"center"}>
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
              {/* <Box textAlign="right" sx={{ mt: 1 }}>
                <Link href="#" sx={{ color: "red", fontSize: "0.775rem" }}>
                  Forgot your Password?
                </Link>
              </Box> */}

              <Button
                type="submit"
                variant="contained"
                fullWidth
            sx={{mt:3}}           
               
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
                  console.log("Redirecting to SSO...");
                  navigate("/dashboard", { state: { email: email } });
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
