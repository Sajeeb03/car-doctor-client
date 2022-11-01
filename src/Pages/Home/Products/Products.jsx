import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mb-32'>
            <div className='text-center mt-32 mb-3'>
                <p className="text-orange-600 font-bold text-2xl mb-3">Popular Products</p>
                <h1 className="text-5xl font-bold mb-3">Browse Our Products</h1>
                <p className='w-1/2 mx-auto mb-3'>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='flex justify-center mt-12'>
                <button className='btn btn-outline btn-warning'>More Services</button>
            </div>
        </div>
    );
};

export default Products;