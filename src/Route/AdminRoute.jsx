import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useRole from "../Hooks/useRole";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const { role, isLoading } = useRole();
  const { pathname } = useLocation();
  if (loading || isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  if (user && role === "admin") {
    return children;
  }
  return <Navigate state={pathname} to={"/login"}></Navigate>;
};

export default AdminRoute;
