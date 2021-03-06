import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    let activeStyle = { color: 'red' };
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    const navigate = useNavigate();
    const handleAdmin = () => {
        navigate('/adminLogin');
    }
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
                            <NavLink to='/donation' style={({ isActive }) => isActive ? activeStyle : undefined} className='text-decoration-none'>Donation</NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink className='mx-4 text-decoration-none' to='/events' style={({ isActive }) => isActive ? activeStyle : undefined}>Events</NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink to='/blog' className='text-decoration-none' style={({ isActive }) => isActive ? activeStyle : undefined}>Blog</NavLink>
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
                                    <button onClick={() => navigate('/login')} type="button" className="btn btn-primary">Register</button>
                                </Nav.Link>

                                <Nav.Link>
                                    <button onClick={handleAdmin} type="button" className="btn btn-dark">Admin</button>
                                </Nav.Link>
                            </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;