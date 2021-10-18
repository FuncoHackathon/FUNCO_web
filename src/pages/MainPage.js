import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FundingInfo from "../components/FundingInfo";
import MyFunding from "../components/MyFunding";
import Nav from "../components/Nav";
import Ranking from "../components/Ranking";
import Title from "../components/Title";

const MainPage = () => {
  return (
    <div>
      <Title />
      <Nav />
      <BrowserRouter>
        <Route path="/" exact component={FundingInfo} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/myfunding" component={MyFunding} />
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
