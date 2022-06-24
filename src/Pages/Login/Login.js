import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, logOut } = useAuth();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={signInUsingGoogle}>SignIn using google</button>
            <button onClick={logOut}>LogOut</button>
        </div>
    );
};

export default Login;