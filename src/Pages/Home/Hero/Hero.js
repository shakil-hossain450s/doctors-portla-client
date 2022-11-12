import React from 'react';
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <section className='lg:w-3/4 lg:mx-auto mx-4 lg:mt-28 mt-20'>
            <div className="hero">
                <div className="hero-content flex-col lg:gap-20 gap-8 lg:flex-row">
                    <img
                        src={treatment}
                        className="rounded-lg lg:w-5/12 shadow-xl border p-1"
                        alt=""
                    />
                    <div>
                        <h1 className="text-4xl font-bold">
                            Exceptional Dental Care, on Your Terms
                        </h1>
                        <p className="py-6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;