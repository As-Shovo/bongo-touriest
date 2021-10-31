import React from 'react';
import TouristSpot from './TorustSpot/TouristSpot';
import './Home.css';
import Guid from './Guid/Guid';
import Gallary from './Gallary/Gallary';

const Home = () => {
    return (
        <div>
            <div className="hero-bg">
                    <div className="info-hero text-center">
                        <h2>-Time To Travel-</h2>
                        <p>Travel is the only thing you buy that makes you richer</p>
                    </div>
            </div>

            <TouristSpot></TouristSpot>

            <Guid></Guid>

            <Gallary></Gallary>

        </div>
    );
};

export default Home;