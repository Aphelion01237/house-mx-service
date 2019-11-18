// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const NavBar = () => {
  const { loading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (loading || !user) {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>EasyHouse</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }



  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>EasyHouse</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link> {isAuthenticated && (<span><Link to="/home">Home</Link></span>)} </Nav.Link>
          <Nav.Link> {isAuthenticated && (<span><Link to="/profile">Profile</Link></span>)} </Nav.Link>
          <Nav.Link> {isAuthenticated && (<span><Link to="/payment">Billing</Link></span>)} </Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {isAuthenticated && (<span>Signed in as: <br></br> {user.name}&nbsp;</span>)}
          </Navbar.Text>
          <Navbar.Text>
            {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;