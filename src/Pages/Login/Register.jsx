import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { verifyToken } from '../../api/authToken';

import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value
        const password = form.password.value;
        // console.log(email, password, name);
        createUser(email, password)
            .then(res => {
                const user = res.user;

                // console.log(user);
                verifyToken(user);
                // form.reset()
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <div className="hero">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className="text-center lg:text-left w-full">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-orange-700 py-2 rounded-lg text-white font-semibold" type="submit" value="Register" />
                        </div>
                        <p className='text-lg text-center'>Already have an account? <Link to='/user/login' className='text-blue-900 underline'>Login here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;