import React from 'react';
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from './ServiceCard';

const ServiceCards = () => {

    const serviceData = [
        {
            id: 1,
            icon: fluoride,
            title: "Fluoride Treatment",
            description: "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay. It works by strengthening tooth enamel, making it more resistant to decay."
        },
        {
            id: 2,
            icon: cavity,
            title: "Cavity Filling",
            description: "Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure."
        },
        {
            id: 3,
            icon: whitening,
            title: "Teeth Whitening",
            description: "What is teeth whitening? Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing color by several shades."
        }
    ]

    return (
        <section className='text-center mt-28 mb-12'>
            <h2 className='text-primary font-bold'>OUR SERVICES</h2>
            <p className='text-3xl font-medium'>Services We Provide</p>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-12 mx-5'>
                {
                    serviceData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default ServiceCards;