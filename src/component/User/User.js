import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const User = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <Container>
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={user?.photoURL} alt="..." />
                    <h3 class="card-title">Name: {user?.displayName}</h3>
                    <h5 class="card-text">Email: <small>{user?.email}</small> </h5>

                </div>
            </Container>
        </div>
    );
};

export default User;