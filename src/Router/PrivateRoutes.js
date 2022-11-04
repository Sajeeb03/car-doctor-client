import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(loading)

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <button className="btn loading">loading</button>
        </div>
    }

    if (!user?.uid) {
        return <Navigate to="/user/login" state={{ from: location }} replace ></Navigate >
    }

    else {
        return children;
    }

};

export default PrivateRoutes;