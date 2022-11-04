import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(res => { })
            .catch(err => console.error(err))
    }
    const menuItems = <>

        <Link className={user?.uid ? 'mt-3' : 'mt-0'} to='/'>Home</Link>
        <Link className={user?.uid ? 'mt-3 ml-3' : 'mt-0 ml-3'} to='/orders'>Orders</Link>
        {
            user?.uid ? <p onClick={handleLogOut} className='btn btn-link ml-3'>Log out</p> : <Link className='ml-3' to='/user/login'>Login</Link>
        }

    </>
    return (
        <div className="navbar bg-base-100 py-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="">
                    <img className='w-[107px] h-[86px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Header;