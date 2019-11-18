import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Fragment } from "react";
import Table from 'react-bootstrap/Table'

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }
  return (
      <Fragment>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Fragment>
  );
};

export default Home;