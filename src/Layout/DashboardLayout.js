import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Pages/Dashboard/DashboardNav/DashboardNav';
import DashboardSidebar from '../Pages/Dashboard/DashboardSidebar/DashboardSidebar';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNav />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5 bg-slate-100">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <DashboardSidebar />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;