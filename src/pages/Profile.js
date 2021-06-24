import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../components/Auth/logout";
import Userinfo from "../components/Auth/userinfo";

function Profile() {
  return (
    <>
      <div className="login">
        <Logout />
      </div>
      <h1>This is the profile</h1>
      <div className="profile">
        <Userinfo />
      </div>
    </>
  );
}

export default Profile;
