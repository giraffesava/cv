import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
const CustomNavLink = ({ children, href }) => {
  return (
    <NavLink className="link" to={href}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
