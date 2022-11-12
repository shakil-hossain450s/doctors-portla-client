import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Connected = () => {
    return (
        <section className='text-center mt-32 px-4 pb-6'
            style={{
                background: `url(${appointment})`,
                height: '600px',
            }}
        >
            <div className='lg:pt-16 pt-8'>
                <h2 className='text-xl font-bold text-primary'>Connect Us</h2>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <form className='mt-5'>
                <div className='mb-5'>
                    <input
                        type="email"
                        className='bg-white pl-3 py-3 lg:w-4/12 w-full rounded'
                        name="email"
                        placeholder='Email Address'
                    />
                </div>
                <div className='mb-5'>
                    <input
                        type="text"
                        className='bg-white pl-3 py-3 lg:w-4/12 w-full rounded'
                        name="subject"
                        placeholder='Subject'
                    />
                </div>
                <div className='mb-5'>
                    <textarea
                        type="message"
                        className='bg-white pl-3 pt-3 lg:w-4/12 w-full rounded'
                        name="message"
                        placeholder='Your message'
                        cols="30" rows="7"
                    />
                    
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </section>
    );
};

export default Connected;