import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeRoot from "./HomeRoot";
import Home from "../pages/homePage/Home";
import DashboardHome from "@/dashboard/DashboardHome";
import { DashboardLayout } from "@/components/dashboardComponents/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <HomeRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "/dashboard",
      //     element:  <SidebarProvider> <DashboardHome /></SidebarProvider>,
      //   },
    ],
  },
//   {
//     path: "/dashboard",
//     element: (<SidebarProvider><main><SidebarTrigger /><App /></main></SidebarProvider>),
//   },

{
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/", 
        element: <DashboardHome />,
      },
    ]
  }

]);

export default router;
