import React, { Component } from 'react';
import './Maintenance.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';

class ShowEventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios
      .get('https://dry-sands-15245.herokuapp.com/api/events')
      .then(res => {
        this.setState({
          events: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowEventList');
      })
  };


  render() {
    const events = this.state.events;
    console.log("PrintEvent: " + events);
    let eventList;

    if(!events) {
      eventList = "there is no event record!";
    } else {
      eventList = events.map((event, k) =>
        <EventCard event={event} key={k} />
      );
    }

    return (
      <div className="ShowEventList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Events List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/maintenance/create-event" className="btn btn-outline-warning float-right">
                + Add New Event
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {eventList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowEventList;