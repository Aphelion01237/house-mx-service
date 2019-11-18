import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from "./../PrivateRoute";
import './Maintenance.css';
import CreateEvent from './CreateEvent';
import ShowEventList from './ShowEventList';
import ShowEventDetails from './ShowEventDetails';
import UpdateEventInfo from './UpdateEventInfo';

class Maintenance extends Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path='/maintenance/' component={ShowEventList} />
          <PrivateRoute path='/maintenance/create-event' component={CreateEvent} />
          <PrivateRoute path='/maintenance/edit-event/:id' component={UpdateEventInfo} />
          <PrivateRoute path='/maintenance/show-event/:id' component={ShowEventDetails} />
        </div>
      </Router>
    );
  }
}

export default Maintenance;