import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';
import useSeller from '../../Hooks/useSeller';

const SellerRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(authContext)
    const [isSeller, sellerLoading] = useSeller(user?.email)
    if (loading || sellerLoading) {
        return <Spinner />
    }
    if (user && isSeller) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate >
};

export default SellerRoute;