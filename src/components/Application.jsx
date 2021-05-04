// Import react
import React, { useContext } from "react";

// Import reach router
import { Router } from "@reach/router";

// Import methods from project files
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";
import Navigation from "./Navigation";
import { UserContext } from "../providers/UserProvider";

//------------------------------------------------------

// Create application function to check if logged in or not and decide where to send user in app
function Application() {

  // Constants
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

// Export application function
export default Application;