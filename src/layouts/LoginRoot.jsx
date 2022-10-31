import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const LoginRoot = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default LoginRoot;