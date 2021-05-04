// Import react
import React from "react";

// Import pages and files from the project files
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";

//------------------------------------------------------

// Create the app function
function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

// Export app function
export default App;