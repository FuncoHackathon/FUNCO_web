import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import apiconfig from "../config/apiconfig";
import { INDEX } from "../store/reducer";
import "../styles/fundingInfo.scss";

const Fund = ({ fund, indexx }) => {
  const dispatch = useDispatch();

  const onDispatchIndex = () => {
    console.log(indexx);
    dispatch({ type: INDEX, indexx });
  };

  return (
    <Link
      onClick={onDispatchIndex}
      to={`/some`}
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
