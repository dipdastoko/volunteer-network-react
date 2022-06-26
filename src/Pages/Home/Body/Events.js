import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const Events = ({ event }) => {
    const url = `/registration/${event._id}`;
    return (
        <div className='eventCard'>
            <Link className='text-decoration-none text-dark fw-bold' to={url}>
                <img className='eventImg' src={event.img} alt="" />
                <div className='eventName'>{event.name}</div>

            </Link>
        </div>
    );
};

export default Events;