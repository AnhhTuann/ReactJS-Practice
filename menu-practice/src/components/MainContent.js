import React from "react";
import "../style/mainContent.css";
import Nav from "./Nav";
import MyInfo from "./MyInfo";
import Timer from "./Timer";
import Contact from "./Contact";
import TodoItem from "./TodoItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainContent() {
  return (
    <Router>
      <div className="container-body">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myinfo" component={MyInfo} />
          <Route path="/timer" component={Timer} />
          <Route path="/contact" component={Contact} />
          <Route path="/todo" component={TodoItem} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default MainContent;
