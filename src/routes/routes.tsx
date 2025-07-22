import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeRoot from "./HomeRoot";
import Home from "../pages/homePage/Home";
import DashboardHome from "@/dashboard/DashboardHome";
import DashboardLayout from "./DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import CreateClient from "@/dashboard/client-Managment/Create-client";
import AllClient from "@/dashboard/client-Managment/All-Client";
import AllSms from "@/dashboard/sms-managment/All-Sms";
import CreateSms from "@/dashboard/sms-managment/Create-Sms";
import AddDevice from "@/dashboard/device-Management/Add-Device";
import DeviceList from "@/dashboard/device-Management/Device-List";

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
      {
        path: "/dashboard/create-client",
        element: <CreateClient />,
      },
      {
        path: "/dashboard/all-client",
        element: <AllClient />,
      },
      {
        path: "/dashboard/create-sms",
        element: <CreateSms />,
      },
      {
        path: "/dashboard/all-sms",
        element: <AllSms />,
      },
      {
        path: "/dashboard/add-device",
        element: <AddDevice />,
      },
      {
        path: "/dashboard/device-list",
        element: <DeviceList />,
      },
    ]
  }

]);

export default router;
