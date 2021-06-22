import React from "react";
import Login from "../components/Auth/login";
import Logout from "../components/Auth/logout";
import Userinfo from "../components/Auth/userinfo";


function Home() {
  return (
    <>
    <div className="login">
      <Login />
      <Logout />
    </div>
    <div className="profile"><Userinfo />
    </div>
    </>
  );
}

export default Home;
