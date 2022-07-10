import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { allContext } = useAuth();
    const { adminLogin, setUser } = allContext;

    const navigate = useNavigate();

    const getEmail = e => {
        setEmail(e.target.value);

    }
    const getPass = e => {
        setPassword(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        adminLogin(email, password)
            .then(result => {
                setUser(result.user);
                if (result.user.email) {
                    navigate('/admin');
                }

            })
            .catch(error => {
                alert('wrong email/password');
            })

    }
    return (
        <div>
            <h2>Admin Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={getEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={getPass} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AdminLogin;