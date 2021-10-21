import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Fund from "./Fund";
import "../styles/fundingInfo.scss";
import ImageChange from "./ImageChange";
import { Link } from "react-router-dom";
import axios from "axios";
import apiconfig from "../config/apiconfig";

const MyFunding = () => {
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
        <div style={{ width: "63%", marginTop: "50px" }}>
          <h1>내가 만든 펀딩</h1>
        </div>
        <div className="infoFrame">
          {fund.map((v) => (
            <Fund fund={v} />
          ))}
        </div>
        <div style={{ width: "63%", marginTop: "50px" }}>
          <h1>내가 참여한 펀딩</h1>
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

export default MyFunding;
