import React from "react";
import Login from "../components/Auth/login";
import Logout from "../components/Auth/logout";
import Userinfo from "../components/Auth/userinfo";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <>
      <div className="login">
        <Login />
        <Logout />
      </div>
      <div className="profile">
        <Userinfo />
      </div>
    </>
  ) : (
    <>
      <div className="login">
        <Logout />
      </div>
      <div className="profile">
        <Userinfo />
      </div>
    </>
  );
}

export default Home;
