import LoginRoot from "../layouts/LoginRoot";
import Root from "../layouts/Root";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services/:id',
                element: <PrivateRoutes><Checkout /></PrivateRoutes>
            },
            {
                path: "/orders",
                element: <PrivateRoutes><Orders /></PrivateRoutes>
            }
        ]
    },
    {
        path: '/user',
        element: <LoginRoot />,
        children: [
            {
                path: '/user/login',
                element: <Login />
            },
            {
                path: '/user/register',
                element: <Register />
            }
        ]
    }
])

export default router;