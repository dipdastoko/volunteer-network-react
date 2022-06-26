import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const { user } = useAuth();
    let { displayName, email } = user;
    const { eventId } = useParams();

    const [events, setEvents] = useState([]);

    const [name, setName] = useState(displayName);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const nameChange = e => {
        setName(e.target.value);
        console.log(name);
    };
    const dateChange = e => {
        setDate(e.target.value);
        console.log('date', date);
    };
    const descriptionChange = e => {
        setDescription(e.target.value);
        console.log(description);
    };


    // load all the data from database
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);

    // search the clicked event from home
    const event = events.find(event => event._id === eventId);

    // create the new volunteer information to send to database
    const newVolunteer = { name, email, description, date, event: event?.name };

    // register button handler
    const handleRegister = e => {

        // send data to server
        fetch('http://localhost:5000/volunteer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
            .then(res => res.json())
        e.preventDefault();
    }
    return (
        <div>
            <h2>Resgistration</h2>
            <form action="">
                {/* name */}
                <span><b>Name:</b> </span><input type="text" onChange={nameChange} value={name || ''} /><br /><br />

                {/*email  */}
                <span><b>Email: </b></span> <input type="email" value={email || ''} readOnly /><br /><br />

                {/* date */}
                <span><b>Date: </b></span><input type="date" onChange={dateChange} required /><br /><br />

                {/* description */}
                <h6>Description: </h6>
                <textarea cols="30" onChange={descriptionChange} rows="10"></textarea><br />

                {/* event */}
                <span><b>Event: </b></span><input type="text" value={event?.name || ''} readOnly /><br />
                <br />

                {/* submit button */}
                <input onClick={() => handleRegister()} type="submit" value="Register" />
            </form>
        </div >
    );
};

export default Registration;