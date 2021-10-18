import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const isLog = useSelector((state) => state.rootreducer.isLog);
  return (
    <>
      {!isLog ? (
        <BrowserRouter>
          <Route path="/" component={LoginPage} />
          <Route path="/signup" component={LoginPage} />
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
