// Import react
import React from "react";

// Import component to reference and the user authentication
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";

// App function to show components
function App() {
  
  // Return what to show to user
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

// Export App information
export default App;