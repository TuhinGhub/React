import React from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const NewComponent = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("login");

    if (isAuthenticated !== "true") {
      navigate("/login");
      return null; 
    }

    return <WrappedComponent {...props} isAuthenticated={isAuthenticated} />;
  };

  return NewComponent;
};

 export default withAuth;
