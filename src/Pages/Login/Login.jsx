import React from 'react';

import img from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col-2">
                <div className="text-center lg:text-left w-1/2">

                    <img className='h-80' src={img} alt="" />
                </div>
                <div className="card w-1/2 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;