import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <Link to='/home'><button className="btn button">Go to Home</button></Link>
        </div>
    );
};

export default NotFound;