import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Fund from "./Fund";
import "../styles/fundingInfo.scss";
import ImageChange from "./ImageChange";
import { Link } from "react-router-dom";
import axios from "axios";
import apiconfig from "../config/apiconfig";

const FundingInfo = () => {
  const [fund, setFund] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiconfig.API_ENDPOINT}/fundings/lists`)
      .then((res) => {
        console.log(res);
        setFund(res.data.fundings);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
