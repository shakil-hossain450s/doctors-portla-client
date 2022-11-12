import React from 'react';
import Banner from '../Banner/Banner';
import BannerCards from '../BannerCard/BannerCards';
import Hero from '../Hero/Hero';
import ServiceCards from '../ServiceCards.js/ServiceCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCards></BannerCards>
            <ServiceCards></ServiceCards>
            <Hero></Hero>
        </div>
    );
};

export default Home;