import { Form, InputGroup, Button } from 'react-bootstrap'; import React, { useEffect, useState } from 'react';
import './Body.css';
import Events from './Events';
import useAuth from '../../../Hooks/useAuth';

const Body = () => {
    // const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/events')
    //         .then(res => res.json())
    //         .then(data => setEvents(data));
    // }, []);
    const { events } = useAuth();
    console.log('hello');
    return (
        <>
            <h2>I Grow By Helping People In Need.</h2>
            <div className='searchbox'>
                <InputGroup className="my-3">
                    <Form.Control
                        placeholder="Search..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
            <div className='eventGrid ms-5 mt-5'>
                {
                    events.map(event => <Events key={event._id} event={event}></Events>)
                }
            </div>
        </>
    );
};

export default Body;

