import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useRole from "../Hooks/useRole";

const MemberRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const { role, isLoading } = useRole();
  if (loading || isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  if (user && role === "member") {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default MemberRoute;
