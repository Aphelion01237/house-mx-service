import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Maintenance.css';
import axios from 'axios';

class showEventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://dry-sands-15245.herokuapp.com/api/events/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showEventDetails-API-response: " + res.data);
        this.setState({
          event: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowEventDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('https://dry-sands-15245.herokuapp.com/api/events/'+id)
      .then(res => {
        this.props.history.push("/maintenance/");
      })
      .catch(err => {
        console.log("Error form ShowEventDetails_deleteClick");
      })
  };


  render() {

    const event = this.state.event;
    let EventItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ event.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Phone Number</td>
            <td>{ event.phoneNumber }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Address</td>
            <td>{ event.address }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Urgency</td>
            <td>{ event.urgency }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Date of Ocurrance</td>
            <td>{ event.date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ event.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowEventDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/maintenance/" className="btn btn-outline-warning float-left">
                  Show Event List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Events Record</h1>
              <p className="lead text-center">
                  View Events Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { EventItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,event._id)}>Delete Event</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/maintenance/edit-event/${event._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Event
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Event</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Event</button> */}

        </div>
      </div>
    );
  }
}

export default showEventDetails;