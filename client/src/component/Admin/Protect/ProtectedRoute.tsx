import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, component}) => {
    if(!isAuthenticated){
        return <Navigate to="/"/>
    }
    return component
}

export default ProtectedRoute