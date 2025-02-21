import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-xl ml-24 mt-24"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;