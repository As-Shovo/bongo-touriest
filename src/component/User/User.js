import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const User = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <Container>
                <div className="profile">
                    <img src={user?.photoURL} alt="..." />
                    <h3>Name: {user?.displayName}</h3>
                    <h4>Email: {user?.email}</h4>
                </div>
            </Container>
        </div>
    );
};

export default User;