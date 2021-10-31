import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';


const Header = () => {

    const { user, logOut } = useAuth()
    // console.log(user);

    const handleLogout = () => {
        logOut();
    }


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Bongo Tour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/manageUser">Manage Order</Nav.Link>
                            <Nav.Link as={Link} to="/userOrder">My Order</Nav.Link>
                            <Nav.Link as={Link} to="/user">User</Nav.Link>
                            <Nav.Link as={Link} to="/addTourSpot">Add Tour Spot</Nav.Link>
                            {!user?.email ?

                                <Nav.Link as={Link} to="/login">Login</Nav.Link> :
                                <div>
                                    <span>{user?.displayName}</span> <button onClick={handleLogout}>Logout</button></div>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;