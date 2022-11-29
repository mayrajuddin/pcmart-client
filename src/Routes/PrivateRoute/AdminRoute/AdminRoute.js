import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../../AuthContext/AuthProvider';
import Spinner from '../../../Components/Spinner/Spinner';
import useAdmin from '../../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation()

    if (loading || adminLoading) {
        return <Spinner />
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate >
};

export default AdminRoute;