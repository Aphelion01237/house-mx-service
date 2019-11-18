// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import IntroJumbo from './components/IntroLoggedOut'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Payment from "./components/Payment"
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <body>
      <Container >
            <div className="App" style={{ height: '100vh' }}>
              {/* New - use BrowserRouter to provide access to /profile */}
              <BrowserRouter>
                <header>
                  <NavBar />
                </header>
                <Switch>
                  <Route path="/" exact />
                  <PrivateRoute path="/profile" component={Profile} />
                  <PrivateRoute path="/payment" component={Payment} />
                </Switch>
              </BrowserRouter>
              <IntroJumbo />
            </div>
      </Container>
    </body>
  );
}


export default App;