import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const Events = ({ event }) => {
    return (
        <Link className='text-decoration-none text-dark fw-bold' to='/home'>
            <img className='eventImg' src={event.img} alt="" />
            <div className='eventName'>{event.name}</div>
        </Link>
    );
};

export default Events;