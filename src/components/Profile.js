import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import Services from "./Services"

const Profile = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <Container>
            <Fragment>
                <img src={user.picture} alt="Profile" />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {/* <code>{JSON.stringify(user, null, 2)}</code> */}
            </Fragment>
            {/* <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>Service</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Lawn Trim</td>


                    </tr>


                </tbody>
            </Table>

            <Services /> */}
        </Container>
    );
};

export default Profile;