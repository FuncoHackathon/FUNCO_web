import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Title from "./Title";
import "../styles/Some.scss";
import logo from "../img/logo.png";
import axios from "axios";
import apiconfig from "../config/apiconfig";
import { useSelector } from "react-redux";

const SomeFunding = () => {
  const ind = useSelector((state) => state.rootreducer.indexx);

  const [fill, setFill] = useState({
    title: "",
    tags: "",
    img: "",
    current: "",
    __v: "",
    closingYear: "",
    closingMonth: "",
    closingDay: "",
    goal: "",
    story: "",
    owner: "",
  });

  useEffect(() => {
    axios.get(`${apiconfig.API_ENDPOINT}/fundings/lists`).then((res) => {
      console.log(ind);
      setFill(res.data.fundings.filter((v) => v._id === ind));
    });
  }, [ind]);

  useEffect(() => {
    console.log(fill[0]);
  }, [fill]);

  return (
    <div className="someFrame">
      <div className="Some">
        <div className="SomeTags">
          {fill.tags !== ""
            ? fill[0].tags.map((v) => <span>#{v}&nbsp;</span>)
            : ""}
        </div>
        <h1 className="SomeTitle">{fill.title !== "" ? fill[0].title : ""}</h1>
        <p className="SomeWrite">
          {fill.owner != "" ? fill[0].owner.name : ""}
        </p>
        <div className="SomeInfo">
          <img
            className="SomeImg"
            src={
              fill.img !== ""
                ? `${apiconfig.API_ENDPOINT}/uploads/${fill[0].img}`
                : ""
            }
            alt=""
          />
          <div className="SomeIM">
            <div>
              <p className="SomeP">모인 금액</p>
              <p className="SomeN">
                {fill.current !== "" ? fill[0].current : ""}원
              </p>
            </div>
            <div>
              <p className="SomeP">남은 시간</p>
              <p className="SomeN">60일</p>
            </div>
            <div>
              <p className="SomeP">후원자</p>
              <p className="SomeN">{fill.__v !== "" ? fill[0].__v : ""}</p>
            </div>
            <button className="SomeBut">펀딩하기</button>
          </div>
        </div>
        <hr style={{ width: "80%", height: "1px", marginTop: "60px" }} />
        <div style={{ width: "80%" }}>
          <p style={{ fontSize: "25px" }}>
            마감기한{" "}
            <span style={{ fontWeight: "700" }}>
              {fill.closingYear !== "" ? fill[0].closingYear : ""}년{" "}
              {fill.closingMonth !== "" ? fill[0].closingMonth : ""}월{" "}
              {fill.closingDay !== "" ? fill[0].closingDay : ""}일
            </span>
          </p>
          <p style={{ fontSize: "25px" }}>
            목표금액{" "}
            <span style={{ fontWeight: "700" }}>
              {fill.goal !== "" ? fill[0].goal : ""}원
            </span>
          </p>
          <p style={{ marginTop: "60px", fontSize: "30px" }}>
            {fill.story !== "" ? fill[0].story : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SomeFunding;
