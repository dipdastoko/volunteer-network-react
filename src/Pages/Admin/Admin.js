import React from 'react';
import useAuth from '../../Hooks/useAuth';
import VolunteersList from './VolunteersList';

const Admin = () => {
    const { volunteers } = useAuth();
    return (
        <div>
            {
                volunteers.map(volunteer => <VolunteersList volunteer={volunteer} />)
            }
        </div>
    );
};

export default Admin;