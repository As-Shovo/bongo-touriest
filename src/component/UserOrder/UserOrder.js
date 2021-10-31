import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './UserOrder.css';

const UserOrder = () => {
    const { user } = useAuth();

    const [userinfo, setUserinfo] = useState([]);

    const url = `https://glacial-harbor-41487.herokuapp.com/userTour/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setUserinfo(result);
            })
    }, [url]);

    const handleDelete = id => {
        console.log(id);

        fetch(`https://glacial-harbor-41487.herokuapp.com/userTour/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount) {

                    const remaining = userinfo?.filter(uf => uf._id !== id);
                    setUserinfo(remaining);

                }

            })

    }


    return (
        <div>
            <h1>user orders</h1>
            <Container>
                <div className="user-order">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Place</th>
                                <th>Status</th>
                                <th>Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userinfo?.map((mu, index) => <tr key={mu._id}>
                                    <td>{index + 1}</td>
                                    <td>{mu?.name}</td>
                                    <td>{mu?.email}</td>
                                    <td>{mu?.destination}</td>
                                    <td>Processed</td>
                                    <td><button onClick={() => handleDelete(mu._id)} className="btn btn-danger">Cencel</button></td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default UserOrder;