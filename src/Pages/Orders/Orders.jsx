import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import OrdersRow from './OrdersRow';
import img from "../../assets/images/checkout/checkout.png"


const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        fetch(`https://genius-car-server-eta-two.vercel.app/orders?email=${user?.email}`, {
            headers: {

                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                console.log(data.data)
                setOrders(data.data)
            })
            .catch(err => console.error(err))
    }, [user?.email, refresh, logOut])

    const handleDelete = order => {
        console.log(order._id)
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            fetch(`https://genius-car-server-eta-two.vercel.app/orders/${order._id}`, {
                method: 'delete',
                headers: {

                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`${order.serviceName} deleted`, { autoClose: 600 })
                    console.log(data)
                    setRefresh(!refresh)
                })
                .catch(err => console.error(err));

        }
    }

    const handleUpdate = id => {
        fetch(`https://genius-car-server-eta-two.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message, { autoClose: 500 })
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className=''>
            <div className='w-full relative'>
                <div className='slider-img'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold absolute text-white top-1/2 left-24">Orders</h1>
                    <div className='trapezium absolute bottom-0 left-[436px]'></div>
                    <h3 className="text-2xl font-bold text-white absolute bottom-2 left-[500px]">Home/Orders</h3>
                </div>
            </div>

            <div className="overflow-x-auto w-full my-32">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                                <button className='btn btn-ghost'>X</button>

                            </th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <OrdersRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;