import React from "react";
import { useNavigate } from "react-router-dom";
import withAuth from "./withAuth";

const Protected = (props) => {
  const navigate = useNavigate(-1);
  return (
    <div>
      {props.isAuthenticated === "true"
        ? navigate("/about")
        : navigate("/login")}
    </div>
  );
};
export default withAuth(Protected);
