import React from "react";
import Rank from "./Rank";

const Ranking = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          width: "65%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <Rank />
        <Rank />
        <Rank />
      </div>
    </div>
  );
};

export default Ranking;
