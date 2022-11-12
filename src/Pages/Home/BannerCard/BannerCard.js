import React from 'react';

const BannerCard = ({ card }) => {
    const { icon, title, description, bgClass } = card;
    return (
        <div className={`${bgClass} card md:card-side bg-base-100 shadow-xl px-4 py-5 text-white`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BannerCard;