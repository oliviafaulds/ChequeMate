import React, { useEffect } from "react";
import Application from "./components/Application";
import { auth } from "./firebase";
import UserProvider from "./providers/UserProvider";

const db = firebase.firestore();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    })
    //clean up subscription
    return unsubscribe;
  }, []);

  if (initializing) return "Loading...";
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;