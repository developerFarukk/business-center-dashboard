import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeRoot from "./HomeRoot";
import Home from "../pages/homePage/Home";
import DashboardHome from "@/dashboard/DashboardHome";
import DashboardLayout from "./DashboardLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <HomeRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },

    ],
  },

{
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ]
  }

]);

export default router;
