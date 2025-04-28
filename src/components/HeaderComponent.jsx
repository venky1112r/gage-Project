import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = ["Dashboard", "Sourcing", "Reporting", "Settings"];

const HeaderComponent = ({ email }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const [drawerOpen, setDrawerOpen] = useState(false);

  const currentTab = navItems.findIndex((item) =>
    location.pathname.toLowerCase().includes(item.toLowerCase())
  );

  const handleTabChange = (event, newValue) => {
    const path = `/${navItems[newValue].toLowerCase()}`;
    navigate(path);
  };

  // const handleDrawerItemClick = (path) => {
  //   console.log(path);
  //   navigate(`/${path.toLowerCase()}`);
  //   setDrawerOpen(false);
  // };

  return (
    <AppBar position="static" color="#fff" elevation={1} sx={{ p: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
          px: { xs: 1, md: 2 },
          gap: { xs: 2, md: 0 },
          py: { xs: 1, md: 1 },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#003320" }}>
          G.A.G.E.
        </Typography>

        {isMobile ? (
          <>
            <Tabs
              value={currentTab === -1 ? 0 : currentTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              textColor="inherit"
              indicatorColor="secondary"
              TabIndicatorProps={{ style: { backgroundColor: "#800000" } }}
            >
              {navItems.map((label, index) => (
                <Tab
                  key={label}
                  label={label.toUpperCase()}
                  sx={{
                    fontWeight: currentTab === index ? "bold" : "normal",
                    color: currentTab === index ? "#800000" : "#000",
                    textTransform: "none",
                  }}
                />
              ))}
            </Tabs>
          </>
        ) : (
          <Tabs
            value={currentTab === -1 ? 0 : currentTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            TabIndicatorProps={{ style: { backgroundColor: "#800000" } }}
          >
            {navItems.map((label, index) => (
              <Tab
                key={label}
                label={label.toUpperCase()}
                sx={{
                  fontWeight: currentTab === index ? "bold" : "bold",
                  color: currentTab === index ? "#800000" : "#000",
                  textTransform: "none",
                  fontSize: "15px",
                }}
              />
            ))}
          </Tabs>
        )}
        <Box sx={{ display: { xs: "block", md: "block" } }}>
          <Avatar
            sx={{ bgcolor: "#c9d9c4", color: "#000", fontWeight: "bold" }}
          >
            {email.charAt(0).toUpperCase()}
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
