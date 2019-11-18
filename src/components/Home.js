import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Jumbotron from 'react-bootstrap/Jumbotron'
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
                            <div style={{ textShadow: '2px 2px #000000' }}>
                                <h3>Enjoy Peace of Mind</h3>
                                <p>Why make life more stressful? Let us take care of your home maintenance.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={living}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div style={{ textShadow: '2px 2px #000000' }}>
                                <h3>Quick and Easy to use</h3>
                                <p>Simply log in, provide your information, and let us handle the rest.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={outside}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div style={{ textShadow: '2px 2px #000000' }}>
                                <h3>The Grass Here is too Long</h3>
                                <p>If these people used our service, their lawn would be trimmed.</p>
                            </div>
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