import React from "react";
import { render } from "react-dom";
import Nav from "./Navbar/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
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
    </Auth0Provider>
  );
};

render(<App />, document.getElementById("root"));

