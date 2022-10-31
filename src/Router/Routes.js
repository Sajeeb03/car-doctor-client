import LoginRoot from "../layouts/LoginRoot";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

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
        path: '/login',
        element: <LoginRoot />,
        children: [
            {
                path: '/login/',
                element: <Login />
            }
        ]
    }
])

export default router;