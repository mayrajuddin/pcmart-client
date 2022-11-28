import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Pages/Dashboard/DashboardSidebar/DashboardSidebar';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5 bg-slate-100">
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
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