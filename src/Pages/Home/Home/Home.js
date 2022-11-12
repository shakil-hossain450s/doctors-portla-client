import React from 'react';
import Banner from '../Banner/Banner';
import BannerCards from '../BannerCard/BannerCards';
import ServiceCards from '../ServiceCards.js/ServiceCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCards></BannerCards>
            <ServiceCards></ServiceCards>
        </div>
    );
};

export default Home;