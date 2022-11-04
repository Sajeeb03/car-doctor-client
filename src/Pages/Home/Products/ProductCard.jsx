
import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    // console.log(product);
    const { name, price, img } = product;
    return (
        <div className="card w-full glass shadow-lg p-4">
            <div className='bg-slate-200 rounded-lg py-8'>
                <figure><img className='w-48 h-44' src={img} alt="car!" /></figure>
            </div>
            <div className="card-body text-center">
                <div className='flex justify-center text-2xl text-orange-500'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h2 className="card-title mx-auto">{name}</h2>
                <p className='text-orange-600 font-semibold text-xl'>Price: {price}</p>
            </div>
        </div>
    );
};

export default ProductCard;