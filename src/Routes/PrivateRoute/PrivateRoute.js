import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)

    const location = useLocation()

    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate >
};

export default PrivateRoute;