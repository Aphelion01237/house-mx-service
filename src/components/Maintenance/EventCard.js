import React from 'react';
import { Link } from 'react-router-dom';
import './Maintenance.css';

const EventCard = (props) => {
    const  event  = props.event;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/maintenance/show-event/${event._id}`}>
                        { event.date }
                    </Link>
                </h2>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
            </div>
        </div>
    )
};

export default EventCard;