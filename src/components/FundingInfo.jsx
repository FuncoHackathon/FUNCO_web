import React from "react";
import { useSelector } from "react-redux";
import Fund from "./Fund";
import "../styles/fundingInfo.scss";
import ImageChange from "./ImageChange";
import { Link } from "react-router-dom";

const FundingInfo = () => {
  const fund = useSelector((state) => state.fundingReducer);
  return (
    <div className="infoFra">
      <div className="infoFrame2">
        <ImageChange />
        <div style={{ width: "63%" }}>
          <h1>펀딩 정보</h1>
        </div>
        <div className="infoFrame">
          {fund.map((v) => (
            <Fund fund={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundingInfo;
