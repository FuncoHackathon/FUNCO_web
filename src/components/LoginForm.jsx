import React, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/join.scss";
import "../styles/common.scss";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../store/reducer";

const LoginForm = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const member = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

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
  const onClickLogin = useCallback(
    (e) => {
      e.preventDefault();
      const find = member.find((v) => email === v.email);
      if (find) {
        if (find.password === password) {
          dispatch({ type: LOGIN, name: find.userName });
        }
      }
      setPassword("");
      setEmail("");
    },
    [email, password]
  );

  return (
    <>
      <img className="logo" src={logo} />
      <div className="maxSize">
        <form className="userIDPW">
          <label className="label">
            <div className="inputFrame">이메일</div>
            <input
              type="email"
              className="userInfo"
              value={email}
              onChange={onChangeEmail}
            />
          </label>
          <label className="label">
            <div className="inputFrame">비밀번호</div>
            <input
              type="password"
              className="userInfo"
              value={password}
              onChange={onChangePassword}
            />
          </label>
          <button className="loginBt" onClick={onClickLogin}>
            로그인
          </button>
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
});

export default LoginForm;
