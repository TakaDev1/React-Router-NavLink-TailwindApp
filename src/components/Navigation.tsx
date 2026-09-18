import React from "react";
import { NavLink } from "react-router";
const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
};

export default Navigation;
