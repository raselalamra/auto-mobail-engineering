import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {user, logOut} = useAuth();
    return (

        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Car Repairing Services</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button>:
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                                }
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </> 
        
    );
};

export default Header;