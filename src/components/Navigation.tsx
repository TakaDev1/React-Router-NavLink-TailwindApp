import React from "react";
import { NavLink } from "react-router";
const Navigation = () => {
  return (
    <nav className="my-10 w-1/2 flex bg-white mx-auto justify-around py-2 rounded-xl">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-gray-500")}
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-gray-500")}
      >
        Profile
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-gray-500")}
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navigation;
