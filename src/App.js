// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer"
import About from './components/About';
import Home from './components/Home'
import Maintenance from './components/Maintenance/Maintenance'

function App() {
  return (
    <body>
      <Container >
        <div className="App" style={{ height: '100vh' }}>
          <Router>
            <header>
              <NavBar />
            </header>
            <Footer />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/maintenance" component={Maintenance} />
              <PrivateRoute path="/payment" component={Payment} />
            </Switch>
          </Router>
        </div>
      </Container>
    </body>
  );
}


export default App;