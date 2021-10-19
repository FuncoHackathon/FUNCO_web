import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import nav from "../styles/nav.scss";

const Nav = () => {
  return (
    <div className="navBar">
      <nav className="navbar">
        <NavLink
          activeStyle={{ backgroundColor: "#00E26B", fontWeight: "700" }}
          className="nav"
          exact
          to="/ranking"
        >
          랭킹
        </NavLink>
        <NavLink
          exact
          activeStyle={{ backgroundColor: "#00E26B", fontWeight: "700" }}
          className="nav"
          to="/"
        >
          펀딩정보
        </NavLink>
        <NavLink
          activeStyle={{ backgroundColor: "#00E26B", fontWeight: "700" }}
          className="nav"
          exact
          to="/myfunding"
        >
          내 펀딩
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
