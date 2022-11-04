import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    // console.log(location.state.from.pathname)
    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logIn(email, password)
            .then(res => {
                console.log(res.user);
                const currentUser = {
                    user: res.user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("token", data.token)
                        navigate(from, { replace: true })
                        form.reset();
                    })
                    .catch(err => console.error(err))



            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className="text-center lg:text-left w-full">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
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
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-orange-700 py-2 rounded-lg text-white font-semibold" type="submit" value="Login" />
                        </div>
                        <h2 className="text-2xl text-center font-bold">Or</h2>
                        <hr />
                        <div className='border-2 border-orange-800 py-2 rounded-lg'>
                            <p onClick={handleGoogleSignIn} className='font-semibold flex justify-center'> <FaGoogle className='mt-1 mr-2 text-cyan-500' /> Sign in with google</p>
                        </div>
                        <p className='text-lg text-center'>New to Car Doctor? <Link to='/user/register' className='text-blue-900 underline'>Register here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;