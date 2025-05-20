import React from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import UserManagementHeaderComponent from "../components/UserManagementHeaderComponent";
import DashboardTopBar from "../components/DashboardTopBar";
import ProtectedRoute from "../components/ProtectedRoute";
import CustomersComponent from "../components/CustomersComponent";
import UserManagementComponent from "../components/UserManagementComponent";

const AdminPage = () => {
  ProtectedRoute(); // Ensure the route is protected

  const location = useLocation();
  const email = location.state?.email || "guest@example.com";
  const userrole = location.state?.userrole || "guest";
  console.log(userrole, " userrole, admin page");
  console.log(email, " email, admin page");
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <UserManagementHeaderComponent email={email} userrole={userrole} />

      <Routes>
        {/* Redirect default to /customers */}
        <Route path="/" element={<Navigate to="customers" />} />

        <Route
          path="customers"
          element={<CustomersComponent  />}
        />
        <Route path="user-management" element={<UserManagementComponent />} />
      </Routes>
    </Box>
  );
};

export default AdminPage;
