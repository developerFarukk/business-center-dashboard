

import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeRoot from "./HomeRoot";
import Home from "../pages/homePage/Home";




const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <HomeRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: (<PrivateRoute><SidebarProvider><main><SidebarTrigger /><App /></main></SidebarProvider></PrivateRoute>),
    // },

]);

export default router;
