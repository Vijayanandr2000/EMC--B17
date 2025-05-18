import React, { useEffect, useState } from "react";
import "./App.css";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import { auth, provider } from "./config/firebase";

function App() {
  const [user, setUser] = useState(null);
  const handleSignIn = async () => {
    const { user = {} } = await signInWithPopup(auth, provider);
    setUser(user);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Firebase authentication using Google Provider!</h1>
      {user ? (
        <div>
          <h1>Welcome {user.displayName}</h1>
          <img src={user.photoURL} alt={user.displayName} />
          <p>{user.email}</p>
          <button
            onClick={async () => {
              await signOut(auth);
              setUser(null);
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in With Google</button>
      )}
    </div>
  );
}

export default App;
