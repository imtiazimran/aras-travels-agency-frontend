import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import App from "../App";
import { UpdateInfo } from "../pages/UpdateInfo";
import { Dashboard } from "../layout/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import { CreateJob } from "../pages/Dashboard/CreateJob";
import { JobTable } from "../pages/Dashboard/ManageJob";
import MangeUsers from "../pages/Dashboard/MangeUsers";
import PrivetRoute from "../utils/PrivetRoute";
import Login from "../components/Login";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Projects/Project";

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
      {
        path: "projects",
        element: <Project/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        element: <PrivetRoute><MangeUsers /></PrivetRoute> ,
      },
      {
        path: "createJob",
        element: <CreateJob />,
      },
      {
        path: "manageJobs",
        element: <JobTable />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
