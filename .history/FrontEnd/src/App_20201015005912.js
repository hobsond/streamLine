import "./App.css";
import React, { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";

// personal modules
import Context, { storage } from "./utils/storage";
import Fb from "./utils/firebase";

// Components
import Home from "./pages/Home";

function App() {
  // VARIABLES
  const { auth } = { ...Fb };
  const { Header, Content, Footer, Sider } = Layout;

  // STATES
  const [user, setUser] = useState(false);

  // FUNCTIONS
  auth().onAuthStateChanged((ud) => {
    setUser(ud);
  });
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "blue" }}>hello</Header>
        <Layout style={{ background: "yellow" }}>
          <Content>
            <Switch>
              {user ? <Switch></Switch> : <Redirect to="/" />}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Content>

          <Sider></Sider>
        </Layout>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
