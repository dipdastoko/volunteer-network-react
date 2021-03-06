import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Registration = () => {
    const { allContext, volunteers, events } = useAuth();

    let { displayName, email } = allContext.user; //logged in user's name and email

    const { eventId } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState(displayName);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    //for changing the values which are automatically filled(if a user wishes)
    const nameChange = e => {
        setName(e.target.value);
    };
    const dateChange = e => {
        setDate(e.target.value);
    };
    const descriptionChange = e => {
        setDescription(e.target.value);
    };

    // search the clicked event from home
    const event = events.find(event => event._id === eventId);

    // create the new volunteer information to send to database
    const newVolunteer = { name, email, description, date, event: event?.name };

    // register button handler
    const handleRegister = e => {
        const alreadyRegistered = volunteers.find(volunteer => volunteer.email === email && volunteer.event === event.name);

        if (alreadyRegistered) {
            alert('You are already registered in this event');
        }

        else {
            const sure = window.confirm('Confirm Registration?');
            if (sure) {
                // send data to server
                fetch('https://blooming-dawn-19951.herokuapp.com/volunteer', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newVolunteer)
                })
                    .then(res => res.json())
                    .then(data => console.log('volunteer registered'));

                alert('registration successful');
                navigate('/home');
                window.location.reload(true);
            }
        }

        e.preventDefault();

    }
    return (
        <div>
            <Link to='/home'><img className='mb-4' style={{ width: '300px' }} src="https://i.ibb.co/ZGgQqRs/Group-1329.png" alt="" /> </Link>
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
                <input onClick={handleRegister} type="submit" value="Register" />
            </form>
        </div >
    );
};

export default Registration;