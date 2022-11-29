import React, { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';

const DashboardHome = () => {
    const { user } = useContext(authContext)
    return (
        <div>
            <section>
                <h2 className="text-5xl capitalize text-bold text-secondary">welcome {user.displayName}</h2>
            </section>
        </div>
    );
};

export default DashboardHome;