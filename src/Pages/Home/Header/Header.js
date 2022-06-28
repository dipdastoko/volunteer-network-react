import React from 'react';
import { Navbar, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    let activeStyle = { color: 'red' };
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (
        <div className='header'>
            <Navbar bg="light" expand="lg">

                {/* navbar brand that stays left of header */}
                <Navbar.Brand className='ms-5'>
                    <NavLink to='/home'><img src="https://i.ibb.co/ZGgQqRs/Group-1329.png" alt="" /></NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5">
                        <Nav.Item>
                            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='mx-4 text-decoration-none' to='/home'>Home</NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink to='/home' style={({ isActive }) => isActive ? activeStyle : undefined} className='text-decoration-none'>Donation</NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink className='mx-4 text-decoration-none' to='/events' style={({ isActive }) => isActive ? activeStyle : undefined}>Events</NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink to='/home' className='text-decoration-none' style={({ isActive }) => isActive ? activeStyle : undefined}>Blog</NavLink>
                        </Nav.Item>

                        {user.email ?
                            <>

                                <Nav.Item className='mx-4'>
                                    <h5>{user.displayName}</h5>
                                </Nav.Item>

                                <Nav.Item>
                                    <Button onClick={logOut}>Log Out</Button>
                                </Nav.Item>


                            </> :
                            <>
                                <Nav.Link className='mx-4 text-decoration-none'>
                                    <button type="button" className="btn btn-primary">Register</button>
                                </Nav.Link>

                                <Nav.Link>
                                    <button type="button" className="btn btn-dark">Admin</button>
                                </Nav.Link>
                            </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <h2>I Grow By Helping People In Need.</h2>
            <div className='searchbox'>
                <InputGroup className="my-3">
                    <Form.Control
                        placeholder="Search..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
        </div >
    );
};

export default Header;