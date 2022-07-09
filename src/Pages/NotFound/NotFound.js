import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>404! Page Not Found</h2>
            <Link to='/home'> <Button>Go Back</Button></Link>
        </div>
    );
};

export default NotFound;