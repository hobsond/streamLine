import React, { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Context, { storage } from "./utils/storage";
import Fb from "./utils/firebase";

import Home from "./pages/Home";

const { auth } = { ...Fb };

function App() {
  const [user, setUser] = useState(false);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });
  console.log(user);
  return (
    <div className="App">
      <Switch>
        <Route path="/main" />

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
