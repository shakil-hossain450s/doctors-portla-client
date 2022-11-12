import React from 'react';

const TestimonialCard = ({ data }) => {
    const { name, image, description, address } = data;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <div className="card-body">
                <p className='mb-5'>
                    {description}
                </p>
                <div className='flex gap-3 items-center'>
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;