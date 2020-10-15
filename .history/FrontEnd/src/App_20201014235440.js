import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Context, { storage } from "./utils/storage";
import Fb from "./utils/firebase";

import Home from "./pages/Home";

const { auth } = { ...Fb };
const authChange = auth().onAuthStateChanged((user) => user);

function App() {
  const storage = useContext(Context);

  return (
    <div className="App">
      <Switch>
        {authChange() ? (
          <Switch>
            <Route path="/main"></Route>
          </Switch>
        ) : (
          <Route path="/" component={Home} />
        )}

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
