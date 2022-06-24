import React, { useEffect, useState } from 'react';
import './Body.css';
import Events from './Events';

const Body = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])
    return (

        <div className='eventGrid ms-5 mt-5'>
            {
                events.map(event => <Events key={event._id} event={event}></Events>)
            }
        </div>

    );
};

export default Body;

