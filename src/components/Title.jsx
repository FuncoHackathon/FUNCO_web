import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import search from "../img/search.png";
import { LOGOUT } from "../store/reducer";
import "../styles/Title.scss";

const Title = withRouter(({ history }) => {
  const user = useSelector((state) => state.rootreducer.userName);
  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };

  return (
    <div className="title0">
      <div className="title1">
        <h1 className="FUNCO">FUNCO</h1>
        <label className="inputLabel">
          <input
            type="text"
            placeholder="정보를 검색해보세요"
            className="searchInput"
          />
          <div className="sea">
            <img src={search} className="searchIcon" />
          </div>
        </label>
        <p className="profile">
          {user}&nbsp; |&nbsp;{" "}
          <span style={{ cursor: "pointer" }} onClick={LogOut}>
            로그아웃
          </span>
        </p>
      </div>
    </div>
  );
});

export default Title;
