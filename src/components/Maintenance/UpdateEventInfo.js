import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Maintenance.css';

class UpdateEventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn: '',
      author: '',
      description: '',
      published_date: '',
      publisher: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://dry-sands-15245.herokuapp.com/api/events/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, event: res.data})
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher
        })
      })
      .catch(err => {
        console.log("Error from UpdateEventInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    axios
      .put('https://dry-sands-15245.herokuapp.com/api/events/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/maintenance/show-event/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateEventInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateEventInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/maintenance/" className="btn btn-outline-warning float-left">
                  Show Event List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Event</h1>
              <p className="lead text-center">
                  Update Event Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Name</label>
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
            <label htmlFor="isbn">Phone Number</label>
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
            <label htmlFor="author">Address</label>
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
            <label htmlFor="description">Urgency</label>
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
            <label htmlFor="published_date">Date of Incident</label>
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
            <label htmlFor="publisher">Incident Description</label>
              <input
                    type='text'
                    placeholder='Description of the problem.'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Maintenance Request</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateEventInfo;