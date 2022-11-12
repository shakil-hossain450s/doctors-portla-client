import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import BannerCard from './BannerCard';

const BannerCards = () => {

    const cardData = [
        {
            id: 1,
            icon: clock,
            title: "Opening Hours",
            description: "Open 9.00am to 5.00pm every day",
            bgClass: "bg-primary bg-gradient-to-r from-primary to-secondary",
        },
        {
            id: 2,
            icon: location,
            title: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            bgClass: "bg-accent",
        },
        {
            id: 3,
            icon: phone,
            title: "Contact us now",
            description: "+000 123 456789",
            bgClass: "bg-primary bg-gradient-to-r from-primary to-secondary",
        }
    ]

    return (
        <section className='lg:mx-12 mx-4 my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
                cardData.map(card => <BannerCard
                    key={card.id}
                    card={card}
                ></BannerCard>)
            }
        </section>
    );
};

export default BannerCards;