import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Navigation from "./Navigation";

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <Navigation />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;