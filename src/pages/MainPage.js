import React from "react";
import { BrowserRouter, Link, Route, withRouter } from "react-router-dom";
import FundingInfo from "../components/FundingInfo";
import MyFunding from "../components/MyFunding";
import Nav from "../components/Nav";
import Ranking from "../components/Ranking";
import SomeFunding from "../components/SomeFunding";
import Title from "../components/Title";
import "../styles/Main.scss";
import AddPage from "./AddPage";

const MainPage = withRouter(({ match }) => {
  return (
    <div>
      <Title />
      <Nav />
      <BrowserRouter>
        <Route path="/" exact component={FundingInfo} />
        <Route path="/ranking" exact component={Ranking} />
        <Route path="/myfunding" exact component={MyFunding} />
        <Route path="/id/:id" component={SomeFunding} />
      </BrowserRouter>
      <Link to="/add">
        <div className="AddBut">+</div>
      </Link>
    </div>
  );
});

export default MainPage;
