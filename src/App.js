import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import MyFunding from "./components/MyFunding";
import Ranking from "./components/Ranking";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";

const App = withRouter(({ history }) => {
  const isLog = useSelector((state) => state.rootreducer.isLog);

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
          <Route path="/ranking" component={MainPage} />
          <Route path="/myfunding" component={MainPage} />
        </BrowserRouter>
      )}
    </>
  );
});

export default App;
