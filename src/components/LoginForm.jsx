import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/join.scss";
import "../styles/common.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <img className="logo" src={logo} />
      <div className="maxSize">
        <form className="userIDPW">
          <label className="label">
            <div className="inputFrame">이메일</div>
            <input type="email" className="userInfo" />
          </label>
          <label className="label">
            <div className="inputFrame">비밀번호</div>
            <input type="password" className="userInfo" />
          </label>
          <button className="loginBt">로그인</button>
        </form>
      </div>
      <p className="noaccount">
        <span className="noaccount_write">계정이 없나요?</span>{" "}
        <Link to="/signup" className="link">
          <span style={{ color: "#00AFE9" }}>회원가입하러가기</span>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
