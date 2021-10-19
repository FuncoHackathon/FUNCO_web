import React from "react";
import { Link } from "react-router-dom";
import "../styles/fundingInfo.scss";

const Fund = ({ fund }) => {
  return (
    <Link
      to={`/id/${fund.id}`}
      className="fundSize"
      style={{ textDecoration: "none", color: "black" }}
    >
      <img src={fund.image} className="fundImage" />
      <h1 className="fundH1">{fund.title}</h1>
      <p className="fundP">{fund.number}%달성</p>
    </Link>
  );
};

export default Fund;
