import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { allContext } = useAuth();
    const { signInUsingGoogle, setIsLoading } = allContext;
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from;
    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                navigate(redirect_uri.pathname);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleSignInUsingGoogle}>SignIn using google</button>
        </div>
    );
};

export default Login;