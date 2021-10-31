import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../image/bongologo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="py-5 mt-5 footer-bg">
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        <img src={logo} alt="" />
                        <div className="footer-info">
                            <p className="quot">A journey of a thousand miles begins with a single step</p>
                            <ul>
                                <li>Dhaka</li>
                                <li>Chittagong</li>
                                <li>Rajshahi</li>
                                <li>Sylhet</li>
                            </ul>
                            <button className="btn button">Subcribe</button>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="social-link pt-5">
                            <h4 className="pt-3 ">Our Social Media</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Google +</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                            <div className="icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-google-plus-g"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="about pt-5">
                            <p className="pt-3">About us</p>
                            <ul>
                                <li>About trip</li>
                                <li>News</li>
                                <li>Careers</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="other-service pt-5">
                            <p className="pt-3">Other Services</p>
                            <ul>
                                <li>Investor Relations</li>
                                <li>Trip Rewards</li>
                                <li>Become a Tours & Tickets Vendor</li>
                                <li>All Hotels</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;