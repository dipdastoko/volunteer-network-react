import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={signInUsingGoogle}>SignIn using google</button>
        </div>
    );
};

export default Login;