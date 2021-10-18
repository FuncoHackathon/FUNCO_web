import React, { memo, useCallback, useEffect, useState } from "react";
import "../styles/join.scss";
import "../styles/common.scss";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP } from "../store/userReducer";

const SignForm = memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [check, setCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(undefined);

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (password2 === password) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [password2]);

  const onChangeName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );
  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
      setEmailCheck(undefined);
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
      if (emailCheck) {
        dispatch({ type: SIGNUP, name, password, email });
      }
    },
    [email, password, name, password2, check, emailCheck]
  );
  const onClickEmailCom = () => {
    const find = user.find((v) => v.email === email);
    if (!find) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

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
              style={
                emailCheck === undefined
                  ? { background: "none" }
                  : !emailCheck
                  ? { background: "red" }
                  : { backgroundColor: "#04B558" }
              }
              value={email}
              onChange={onChangeEmail}
              required
            />
            <div className="inputFrame">
              <div className="commonBut" onClick={onClickEmailCom}>
                중복확인
              </div>
            </div>
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
          {!check ? (
            <p style={{ color: "red", fontWeight: "700" }}>
              비밀번호가 틀립니다
            </p>
          ) : (
            ""
          )}
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
