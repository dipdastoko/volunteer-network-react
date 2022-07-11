import React from 'react';

const VolunteersList = ({ volunteer }) => {
    const handleDeleteVolunteer = (id) => {
        const sure = window.confirm('Are you sure?');
        if (sure) {
            fetch(`http://localhost:5000/volunteer/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert('Volunteer deleted successfully');
                        console.log(data);
                        window.location.reload();
                    }

                });
        }
    }
    return (
        <div className='border border-secondary m-5 p-2'>
            <h5>Name: {volunteer.name}</h5>
            <p>Event: <b>{volunteer.event}</b></p>
            <button onClick={() => handleDeleteVolunteer(volunteer._id)}>Delete Volunteer</button>
        </div>
    );
};

export default VolunteersList;