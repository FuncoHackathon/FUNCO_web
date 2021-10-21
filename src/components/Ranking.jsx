import axios from "axios";
import React, { useEffect, useState } from "react";
import apiconfig from "../config/apiconfig";
import Rank from "./Rank";

const Ranking = () => {
  const [rank, setRank] = useState([]);
  useEffect(() => {
    axios.get(`${apiconfig.API_ENDPOINT}/fundings/ranking`).then((res) => {
      setRank(res.data.fundings);
      // console.log(res);
    });
  }, []);

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
        {rank.map((v, i) => (
          <Rank ra={v} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Ranking;
