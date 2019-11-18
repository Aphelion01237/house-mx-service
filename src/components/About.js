import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const About = () => {

    return (
        <Container>
            <Fragment>
                <h2>WE MADE THIS SHIT</h2>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                    <Card style={{ margin: 'auto', width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Derek Paterson</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                <Button variant="primary">Linked-In</Button>&nbsp;<Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ margin: 'auto', width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Cerek Moreno</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Linked-In</Button>&nbsp;<Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                    <Card style={{ margin: 'auto', width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Daniel Quintero</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Linked-In</Button>&nbsp;<Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ margin: 'auto', width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Nico Louis-Kayen</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Linked-In</Button>&nbsp;<Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        </Container>
    );
};

export default About;







