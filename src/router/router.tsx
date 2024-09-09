import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import App from "../App";
import Dashboard from "../layout/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            }
        ]
    }
])

export default router