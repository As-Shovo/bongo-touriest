import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Guid.css';

const Guid = () => {

    const [guid, setGuid] = useState([]);

    useEffect(() => {
        fetch('https://glacial-harbor-41487.herokuapp.com/tourGuid')
            .then(res => res.json())
            .then(data => {
                setGuid(data);
            })
    }, [])


    return (
        <div>
            <h1 className="text-center ">Our Guid</h1>
            <Container>
                <Row className="g-1">
                    {
                        guid.map(gd => <Col key={gd._id} md={4}>
                            <div className="guid-card">
                                <div className="guid-img">
                                    <img src={gd.img} alt="..." />
                                </div>
                                <div className="guid-info">
                                    <p>{gd.name}</p>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Guid;