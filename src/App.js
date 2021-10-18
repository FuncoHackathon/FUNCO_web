import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={LoginPage} />
    </BrowserRouter>
  );
};

export default App;
