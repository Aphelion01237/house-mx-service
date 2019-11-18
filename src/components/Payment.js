import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Payment = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="formGridCardNum">
                    <Form.Label>Card number</Form.Label>
                    <Form.Control placeholder="XXXX-XXXX-XXXX-XXXX" />
                </Form.Group>
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridExpiration">
                        <Form.Label>Card Expiration Date</Form.Label>
                        <Form.Control type="date" placeholder="Card Expiration Date" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCV">
                        <Form.Label>CV Code</Form.Label>
                        <Form.Control type="number" placeholder="CV" />
                    </Form.Group>
                </Form.Row>


                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Street Address" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

               

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>

        </Container>
    )
}
export default Payment;