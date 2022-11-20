import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const bookingInfo = useLoaderData();
    return (
        <section className='m-5'>
            <h2 className="text-3xl">Payment for {bookingInfo.treatment}</h2>
        </section>
    );
};

export default Payment;