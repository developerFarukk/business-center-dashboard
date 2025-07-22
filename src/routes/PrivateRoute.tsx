


import type { RootState } from "@/redux/store";
import Loader from "@/shared/Looder";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface TChildren {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: TChildren) => {
    const user = useSelector((state: RootState) => state.auth.token); 
    console.log(user);
    
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); 

        return () => clearTimeout(timer);
    }, [user]);

    if (loading) {
        return <Loader />;
    }

    if (user) {
        return <>{children}</>;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;