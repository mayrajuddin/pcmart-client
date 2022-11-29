import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';

const SellerRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(authContext)
    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate >
};

export default SellerRoute;