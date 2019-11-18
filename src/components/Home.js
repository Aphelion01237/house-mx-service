import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import kitchen from './images/kitchen.jpg'
import living from './images/living.jpg'
import outside from './images/outside.jpg'


const Home = () => {
    const { loading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    if (loading || !user) {
        return (
            <div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        {!isAuthenticated && (<Button onClick={() => loginWithRedirect({})}>Get started or Sign in</Button>)}
                    </p>
                </Jumbotron>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={kitchen}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={living}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={outside}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
        );
    }

    return (
        <div></div>
    )


}

export default Home;