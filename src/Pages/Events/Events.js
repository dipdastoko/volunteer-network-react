import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Events = () => {
    const { allContext, volunteers } = useAuth();
    const { user } = allContext;
    const userEvents = volunteers.filter(volunteer => volunteer.email === user.email);
    return (
        <div>
            <h2>{user.displayName}'s Events</h2>
            <ul>
                {
                    userEvents.map(userEvent => <li key={userEvent._id}>{userEvent.event}</li>)
                }
            </ul>
        </div>
    );
};

export default Events;