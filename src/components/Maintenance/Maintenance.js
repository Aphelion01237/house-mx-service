import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from "./../PrivateRoute";
import './Maintenance.css';
import CreateBook from './CreateEvent';
import ShowBookList from './ShowBookList';
import ShowBookDetails from './ShowEventDetails';
import UpdateBookInfo from './UpdateEventInfo';

class Maintenance extends Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path='/maintenance/' component={ShowBookList} />
          <PrivateRoute path='/maintenance/create-book' component={CreateBook} />
          <PrivateRoute path='/maintenance/edit-book/:id' component={UpdateBookInfo} />
          <PrivateRoute path='/maintenance/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default Maintenance;