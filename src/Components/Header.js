import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../images/logo.png";
import "../css/Header.css";
import { Apps, ExpandMore, HelpOutline, Settings } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive..." />
          <ExpandMore />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutline />
          <Settings />
        </span>
        <Apps />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
