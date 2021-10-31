import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [manageUser, setManageUser] = useState();

    useEffect(() => {
        fetch('https://glacial-harbor-41487.herokuapp.com/tourManage')
            .then(res => res.json())
            .then(data => {
                setManageUser(data);
                console.log(data);
                
            })
    }, []);

    const handleDelete = (id) => {
        
        fetch(`https://glacial-harbor-41487.herokuapp.com/tourManage/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.deletedCount){
                    alert("deleted !!!");
                    const remaining = manageUser.filter(mu => mu._id !== id);
                    setManageUser(remaining);
                }
               

            })
    }
    

    return (
        <div>
            <h1 className="text-center title my-3 ">Manage User</h1>
            <div className="manage-btn text-center my-3">
                <Link to="/addTourSpot"><button className="button">Add A Tour Spot</button></Link>
                <Link to="/user"><button className="button">User</button></Link>
            </div>
            <Container>
                <div className="user-order">
                    <Table striped bordered hover responsive size="sm">
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
                                manageUser?.map((mu, index) => <tr key={mu._id}>
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

export default ManageUser;