import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import UserManagementHeaderComponent from "../components/UserManagementHeaderComponent";
import DashboardTopBar from "../components/DashboardTopBar";
import ProtectedRoute from "../components/ProtectedRoute";
import CustomersComponent from "../components/CustomersComponent";

const AdminPage = () => {
  ProtectedRoute(); // Ensure the route is protected

  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  const userrole = location.state?.userrole || "guest";

  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <UserManagementHeaderComponent email={email} userrole={userrole} />
      {/* <DashboardTopBar /> */}
<CustomersComponent />
    </Box>
  );
};

export default AdminPage;
