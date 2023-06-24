import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="header__link">
        Delivery
      </NavLink>
    </div>
  );
};
