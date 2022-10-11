import React, { useEffect } from "react";

import "./App.scss";
import HomeScreen from "./app/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./app/LoginScreen/LoginScreen";
import { auth } from "./firebase.config";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
            console.log(userAuth);
        } else {
            // logged out
        }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
