import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallary.css';

const Gallary = () => {
    return (
        <div>
            <div className="py-5">
                <h2 className="text-center title">Gallary</h2>
                <p className="text-center sub-title">Our Most Viewed Place</p>
            </div>
            <Container>
                <Row>
                    <Col md={3} className="gallary-img"><img src="https://i.ibb.co/3k7k3bw/stmartin.jpg" alt="..." /></Col>
                    <Col md={3} className="gallary-img"><img src="https://i.ibb.co/2d5gWwB/shrimangal.jpg" alt="..." /></Col>
                    <Col md={3} className="gallary-img"><img src="https://i.ibb.co/HnP483c/chittagong.jpg" alt="..." /></Col>
                    <Col md={3} className="gallary-img"><img src="https://i.ibb.co/4PbRDR3/sundarband.jpg" alt="..." /></Col>
                </Row>
            </Container>



        </div>
    );
};

export default Gallary;