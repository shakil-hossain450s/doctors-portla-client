import React from 'react';
import quote from "../../../assets/icons/quote.svg";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            image: person1,
            name: "Winson Herry",
            address: "North California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            image: person2,
            name: "Lady Sunate",
            address: "Japan",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            image: person3,
            name: "Angry Bird",
            address: "Florida",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <section className='mx-5 mt-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Testimonial</h3>
                    <p className='lg:text-3xl text-2xl font-medium'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3 mb-5 lg:w-11/12 lg:mx-auto mx-2'>
                {
                    reviews.map(review => <TestimonialCard
                        key={review.id}
                        review={review}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;