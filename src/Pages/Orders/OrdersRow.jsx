import React, { useEffect, useState } from 'react';


const OrdersRow = ({ order, handleDelete, handleUpdate }) => {
    const { serviceName, email, customer, status, price, service } = order;
    const [ordered, setOrdered] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-eta-two.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => {
                setOrdered(data.data);

            })
            .catch(err => console.error(err))
    }, [service])

    return (
        <tr>
            <td>
                <label>
                    <button onClick={() => handleDelete(order)} className='btn btn-ghost'>X</button>
                </label>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={ordered?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td><p className='text-lg font-semibold'>$ {price}</p></td>
            <td>
                <button onClick={() => handleUpdate(order._id)} className="btn btn-ghost btn-xs">{status}</button>
            </td>
        </tr>
    );
};

export default OrdersRow;