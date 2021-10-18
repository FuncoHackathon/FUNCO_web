import React, { memo, useCallback, useState } from "react";
import "../styles/join.scss";
import "../styles/common.scss";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

const SignForm = memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [check, setCheck] = useState("");

  const onChangeName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );
  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );
  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );
  const onChangePassword2 = useCallback(
    (e) => {
      setPassword2(e.target.value);
    },
    [password2]
  );
  const onClickSignUp = useCallback(
    (e) => {
      e.preventDefault();
    },
    [email, password, name, password2]
  );

  return (
    <>
      <img className="logo" src={logo} />
      <div className="maxSize">
        <form className="userIDPW">
          <label className="label">
            <div className="inputFrame">이름</div>
            <input
              type="text"
              className="userInfo"
              value={name}
              onChange={onChangeName}
              required
            />
          </label>
          <label className="label">
            <div className="inputFrame">이메일</div>
            <input
              type="email"
              className="userInfo"
              value={email}
              onChange={onChangeEmail}
              required
            />
          </label>
          <label className="label">
            <div className="inputFrame">비밀번호</div>
            <input
              type="password"
              className="userInfo"
              value={password}
              onChange={onChangePassword}
              required
            />
          </label>
          <label className="label">
            <div className="inputFrame">비밀번호확인</div>
            <input
              type="password"
              className="userInfo"
              value={password2}
              onChange={onChangePassword2}
              required
            />
          </label>
          <button className="loginBt" onClick={onClickSignUp}>
            회원가입
          </button>
        </form>
      </div>
      <p className="noaccount">
        <span className="noaccount_write">계정이 이미 있나요?</span>{" "}
        <Link to="/" className="link">
          <span style={{ color: "#00AFE9" }}>로그인하러가기</span>
        </Link>
      </p>
    </>
  );
});

export default SignForm;
