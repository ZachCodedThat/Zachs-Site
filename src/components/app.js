import React from "react";
import { render } from "react-dom";
import Nav from "./Navbar/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/Projects" exact component={Projects} />
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
};

render(<App />, document.getElementById("root"));
