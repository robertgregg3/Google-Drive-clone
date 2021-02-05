import React from "react";
import logo from "../images/logo.png";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__search"></div>
      <div className="header__icons"></div>
    </div>
  );
};

export default Header;
