import LoginRoot from "../layouts/LoginRoot";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
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