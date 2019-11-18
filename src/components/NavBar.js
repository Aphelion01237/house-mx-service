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
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>EasyHouse</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text>
              {!isAuthenticated && (<Button onClick={() => loginWithRedirect({})}>Log in</Button>)}
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }



  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>EasyHouse</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link> {isAuthenticated && (<span><Link to="/">Home</Link></span>)} </Nav.Link>
          <Nav.Link> {isAuthenticated && (<span><Link to="/profile">Profile</Link></span>)} </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {isAuthenticated && (<span>Signed in as: {user.name}&nbsp;</span>)}
          </Navbar.Text>
          <Navbar.Text>
            {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;