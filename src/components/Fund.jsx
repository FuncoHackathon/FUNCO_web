import React from "react";
import { Link } from "react-router-dom";
import apiconfig from "../config/apiconfig";
import "../styles/fundingInfo.scss";

const Fund = ({ fund }) => {
  return (
    <Link
      to={`/some/${fund.id}`}
      className="fundSize"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="imgFa">
        <img
          src={`${apiconfig.API_ENDPOINT}/uploads/${fund.img}`}
          className="fundImage"
        />
      </div>
      <h1 className="fundH1">{fund.title}</h1>
      <p className="fundP">{(fund.current / fund.goal) * 100}% 달성</p>
    </Link>
  );
};

export default Fund;
