import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Maintenance.css';
import axios from 'axios';


class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phoneNumber:'',
      address:'',
      urgency:'',
      date:'',
      description:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      urgency: this.state.urgency,
      date: this.state.date,
      description: this.state.description
    };

    axios
      .post('http://localhost:3001/api/events', data)
      .then(res => {
        this.setState({
          name: '',
          phoneNumber:'',
          address:'',
          urgency:'',
          date:'',
          description:''
        })
        this.props.history.push('/maintenance/');
      })
      .catch(err => {
        console.log("Error in CreateEvent!");
      })
  };

  render() {
    return (
      <div className="CreateEvent">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/maintenance/" className="btn btn-outline-warning float-left">
                  Show Requested Maintenance List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Maintenance Request</h1>
              <p className="lead text-center">
                  Create new maintenance request
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Contact Number'
                    name='phoneNumber'
                    className='form-control'
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='How urgent is this issue?'
                    name='urgency'
                    className='form-control'
                    value={this.state.urgency}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='When did this happen?'
                    name='date'
                    className='form-control'
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Description of the problem.'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;