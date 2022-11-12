import React from 'react';
import Banner from '../Banner/Banner';
import BannerCards from '../BannerCard/BannerCards';
import Connected from '../Connected/Connected';
import Hero from '../Hero/Hero';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceCards from '../ServiceCards.js/ServiceCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCards></BannerCards>
            <ServiceCards></ServiceCards>
            <Hero></Hero>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Connected></Connected>
        </div>
    );
};

export default Home;