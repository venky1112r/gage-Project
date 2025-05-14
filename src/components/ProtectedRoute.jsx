import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
const checkAuth = async () => {
    console.log("Checking authentication...");
  try {
    console.log("Checking start...");
    const response = await fetch("http://localhost:5000/api/protected", {
      method: "GET",
      credentials: "include", // Include HTTP-only cookie
    });
console.log("Checking ...");
    if (response.ok) {
        console.log("Checking okay ...");
      setIsAuthenticated(true);
    } else {
      console.error("Failed to authenticate:", await response.text());
      setIsAuthenticated(false);
    }
  } catch (err) {
    console.error("Error during fetch:", err);
    setIsAuthenticated(false);
  }
};

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // You can show a spinner here
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
