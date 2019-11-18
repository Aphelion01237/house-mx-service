import React from "react";
import { Link, BrowserRouter, Route, Switch  } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {


    return (
            <footer>
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <Navbar.Brand><Link to="/about">About</Link></Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar>
            </footer>
    );
}



export default Footer;