import React from "react";
import apiconfig from "../config/apiconfig";
import funding from "../img/fundingImage.png";

const Rank = ({ ra, index }) => {
  return (
    <div
      style={{
        paddingTop: "10px",
        paddingBottom: "10px",
        height: "500px",
        width: "200px",
        overflow: "hidden",
        backgroundColor: "#E4FFF1",
        paddingLeft: "40px",
        paddingRight: "40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#00E26B",
          borderRadius: "50px",
          display: "flex",
          marginTop: "10px",
          marginBottom: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{ margin: "0", marginTop: "10px", fontSize: "25px" }}>
          랭킹 {index + 1}위
        </h1>
        <p style={{ margin: "0", fontSize: "12px", marginBottom: "10px" }}>
          {ra.title}
        </p>
      </div>
      <div
        style={{
          width: "200px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          style={{ height: "65%" }}
          src={`${apiconfig.API_ENDPOINT}/uploads/${ra.img}`}
        />
        <div style={{ width: "100%", textAlign: "left" }}>
          <p style={{ fontSize: "19px" }}>{ra.current}원 펀딩</p>
        </div>
      </div>
    </div>
  );
};

export default Rank;
