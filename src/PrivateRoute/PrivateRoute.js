import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { allContext } = useAuth();
    const { user, isLoading } = allContext;
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return user.email ? children : <Navigate replace
        to='/login' state={{ from: location }}></Navigate>

};

export default PrivateRoute;