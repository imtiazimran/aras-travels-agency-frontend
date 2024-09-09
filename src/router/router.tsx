import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import App from "../App";
import { UpdateInfo } from "../pages/UpdateInfo";
import { Dashboard } from "../layout/Dashboard";
import { Example } from "../pages/Dashboard/SideNav";
import Profile from "../pages/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/updateInfo",
        element: <UpdateInfo />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
        {
          path: "dashboard",
          element: <Dashboard/>
        },
        {
          path: "example",
          element: <Example/>
        },
        {
            path: "profile",
            element: <Profile/>
        },

    ]
  },
]);

export default router;
