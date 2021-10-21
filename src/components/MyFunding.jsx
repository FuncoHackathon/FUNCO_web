import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Fund from "./Fund";
import "../styles/fundingInfo.scss";
import ImageChange from "./ImageChange";
import { Link } from "react-router-dom";
import axios from "axios";
import apiconfig from "../config/apiconfig";
import { useAlert } from "react-alert";

const MyFunding = () => {
  const [fund, setFund] = useState([]);
  const [fund2, setFund2] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    axios
      .get(`${apiconfig.API_ENDPOINT}/fundings/made`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setFund(res.data.fundings);
      })
      .catch((e) => {
        alert.show(e.response.data.message, {
          position: "bottom right",
          type: "error",
        });
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${apiconfig.API_ENDPOINT}/fundings/joined`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        // setFund2(res.data.fundings);
      })
      .catch((e) => {
        alert.show(e.response.data.message, {
          position: "bottom right",
          type: "error",
        });
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
          {fund2.map((v) => (
            <Fund fund={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFunding;
