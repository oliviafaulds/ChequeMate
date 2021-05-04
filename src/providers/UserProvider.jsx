// Import react, component and create context tools
import React, { Component, createContext } from "react";

// Import firebase information and methods from the proejct files
import { auth, generateUserDocument } from "../firebase";

//------------------------------------------------------

// Export user context
export const UserContext = createContext({ user: null });

// Class for the user provider
class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

// Export user provider
export default UserProvider;