import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import Services from "../pages/services/services";
import Add from "../pages/add/Add";
import Profile from "../pages/profile/Profile";
import Signup from "../pages/registration/Signup";
import Login from "../pages/registration/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/add-new-transaction",
        element: <Add />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
