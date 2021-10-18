import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  const isLog = useSelector((state) => state.rootreducer.isLog);
  return (
    <>
      {!isLog ? (
        <BrowserRouter>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Route path="/" component={LoginPage} />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
