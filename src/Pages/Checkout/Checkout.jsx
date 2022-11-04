import { async } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ScrollToTop from '../../hooks/ScrollToTop';
import img from "../../assets/images/checkout/checkout.png"


const Checkout = () => {
    const router = useParams();
    const { id } = router;
    const { user } = useContext(AuthContext);
    const [service, setService] = useState({});
    useEffect(() => {

        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data.data))
            .catch(err => console.error(err))

    }, [id])

    ScrollToTop();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = parseInt(form.phone.value);
        const message = form.message.value;

        // console.log(name, phone, email, message)
        const order = {
            service: service._id,
            serviceName: service.title,
            customer: name,
            phone,
            message,
            email: user?.email || 'Unregistered',
            price: service.price,
            status: 'Pending'
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success(data.message, {
                        autoClose: 900
                    });
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <div className='w-full relative'>
                <div className='slider-img'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold absolute text-white top-1/2 left-24">Checkout</h1>
                    <div className='trapezium absolute bottom-0 left-[450px]'></div>
                    <h3 className="text-2xl font-bold text-white absolute bottom-2 left-[500px]">Home/Checkout</h3>
                </div>
            </div>
            <div className='bg-slate-200 p-24 my-32'>
                <h1 className="text-3xl font-bold">Item: {service.title}</h1>
                <p className='text-2xl font-semibold mb-3'>Price: ${service.price}</p>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className="input w-full input-bordered" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input w-full input-bordered" />
                        <input name="email" type="text" readOnly defaultValue={user?.email} placeholder="Your Email" className="input w-full input-bordered" />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-64 w-full mt-6" placeholder="Your message"></textarea>
                    <button className='btn bg-orange-600 w-full hover:bg-orange-900 border-0 mt-6' type="submit">Order Confirm</button>
                </form>
            </div>
        </>
    );
};

export default Checkout;