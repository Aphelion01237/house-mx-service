// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import DisplayResults from "./components/DisplayResults";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;