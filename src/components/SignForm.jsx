import React, { memo, useCallback, useEffect, useState } from "react";
import "../styles/join.scss";
import "../styles/common.scss";
import logo from "../img/logo.png";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP } from "../store/userReducer";
import axios from "axios";
import apiconfig from "../config/apiconfig";
import { types, useAlert } from "react-alert";

const SignForm = withRouter(({ history }) => {
  const alert = useAlert();
  useEffect(() => {});

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
  const onClickSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`${apiconfig.API_ENDPOINT}/users/join`, {
        email,
        password,
        password2,
        name,
      })
      .then((res) => {
        const { message } = res.data;
        alert.show(message);
        history.push("/");
      })
      .catch((e) => {
        const { message } = e.response.data;
        alert.show(message);
      });
  };

  const onClickEmailCom = async () => {
    console.log("sdfsdjf");
    try {
      const res = await axios.get(
        `${apiconfig.API_ENDPOINT}/users/email/${email}`
      );
      const { message } = res.data;
      alert.show(message);
    } catch (e) {
      const { data } = e.response;
      alert.show(data.message, {
        timeout: 2000,
        type: "error",
      });
    }
    // .then((res) => {
    //   const { message } = res;
    //   console.log(res);
    // });

    // const find = user.find((v) => v.email === email);
    // if (!find) {
    //   setEmailCheck(true);
    // } else {
    //   setEmailCheck(false);
    // }
  };

  return (
    <>
      <img className="logo" src={logo} />
      <div className="maxSize">
        <form className="userIDPW">
          <label className="label">
            <div className="inputFrame">??????</div>
            <input
              type="text"
              className="userInfo"
              value={name}
              onChange={onChangeName}
              required
            />
          </label>
          <label className="label">
            <div className="inputFrame">?????????</div>
            <input
              type="email"
              className="userInfo"
              value={email}
              onChange={onChangeEmail}
              required
            />
            <div className="inputFrame">
              <div className="commonBut" onClick={onClickEmailCom}>
                ????????????
              </div>
            </div>
          </label>
          <label className="label">
            <div className="inputFrame">????????????</div>
            <input
              type="password"
              className="userInfo"
              value={password}
              placeholder="6???????????? 15??????"
              onChange={onChangePassword}
              required
            />
          </label>
          <label className="label">
            <div className="inputFrame">??????????????????</div>
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
              ??????????????? ????????????
            </p>
          ) : (
            ""
          )}
          <button className="loginBt" onClick={onClickSignUp}>
            ????????????
          </button>
        </form>
      </div>
      <p className="noaccount">
        <span className="noaccount_write">????????? ?????? ??????????</span>{" "}
        <Link to="/" className="link">
          <span style={{ color: "#00AFE9" }}>?????????????????????</span>
        </Link>
      </p>
    </>
  );
});
export default SignForm;
