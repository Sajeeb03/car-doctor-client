import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <div className='text-center mt-32'>
                <p className="text-orange-600 font-bold text-2xl mb-3">Service</p>
                <h1 className="text-5xl font-bold mb-3">Our Service Area</h1>
                <p className='w-1/2 mx-auto mb-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-12'>
                <button className='btn btn-outline btn-warning'>More Services</button>
            </div>
        </div>
    );
};

export default Services;