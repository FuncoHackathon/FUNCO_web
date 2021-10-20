import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import MyFunding from "./components/MyFunding";
import Ranking from "./components/Ranking";
import SomeFunding from "./components/SomeFunding";
import apiconfig from "./config/apiconfig";
import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import { LOGIN } from "./store/reducer";

const App = withRouter(({ history }) => {
  const isLog = useSelector((state) => state.rootreducer.isLog);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (localStorage.getItem("jwtToken")) {
      const res = await axios.get(`${apiconfig.API_ENDPOINT}/users/name`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      dispatch({ type: LOGIN, name: res.data.name });
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (isLog === false) {
      history.push("/");
    }
  }, [isLog]);

  return (
    <>
      {!isLog ? (
        <BrowserRouter>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Route path="/" exact component={MainPage} />
          <Route path="/ranking" exact component={MainPage} />
          <Route path="/myfunding" exact component={MainPage} />
          <Route path="/add" exact component={AddPage} />
          <Route path="/some/:id" component={MainPage} />
        </BrowserRouter>
      )}
    </>
  );
});

export default App;
