import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card w-full glass shadow-lg">
            <figure><img className='p-4 w-full h-[208px] rounded-t-sm' style={{ borderRadius: '24px' }} src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-semibold text-xl'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <ArrowLongRightIcon className='text-orange-300 font-bold h-6 w-6'></ArrowLongRightIcon>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;