import React, { memo, useCallback, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/join.scss";
import "../styles/common.scss";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../store/reducer";
import axios from "axios";
import apiconfig from "../config/apiconfig";
import { useAlert } from "react-alert";

const LoginForm = withRouter(({ history }) => {
  const alert = useAlert();
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
  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("sdlf");
      const res = await axios.post(`${apiconfig.API_ENDPOINT}/users/login`, {
        email,
        password,
      });
      setEmail("");
      setPassword("");
      alert.show(res.data.message);
      localStorage.setItem("jwtToken", res.data.token);
      const res2 = await axios.get(`${apiconfig.API_ENDPOINT}/users/name`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      dispatch({ type: LOGIN, name: res2.data.name });
    } catch (e) {
      alert.show(e.response.data.message, {
        timeout: 2000,
        type: "error",
      });
    }
  };

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
