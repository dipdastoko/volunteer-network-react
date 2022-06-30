import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Header from '../Home/Header/Header';
import './Events.css';

const Events = () => {
    const { allContext, volunteers } = useAuth();
    const { user } = allContext;
    const userEvents = volunteers.filter(volunteer => volunteer.email === user.email);

    const handleCancel = (id) => {
        const sure = window.confirm('Are you sure?');
        if (sure) {
            fetch(`http://localhost:5000/volunteer/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert('Event deleted successfully');
                        console.log(data);
                        window.location.reload();
                    }

                });
        }

    }
    return (
        <div>
            <Header></Header>
            <br />
            <h2>{user.displayName}'s Events</h2>
            <ol className='orderedList'>
                {
                    userEvents.map(userEvent => <li className='border border-primary mb-5 p-2' key={userEvent._id}>
                        <h4>{userEvent.event}</h4>
                        <Button onClick={() => handleCancel(userEvent._id)}>Cancel</Button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Events;