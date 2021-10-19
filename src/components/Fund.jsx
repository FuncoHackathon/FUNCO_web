import React from "react";
import "../styles/fundingInfo.scss";

const Fund = ({ fund }) => {
  return (
    <div className="fundSize">
      <img src={fund.image} className="fundImage" />
      <h1 className="fundH1">{fund.title}</h1>
      <p className="fundP">{fund.number}%달성</p>
    </div>
  );
};

export default Fund;
