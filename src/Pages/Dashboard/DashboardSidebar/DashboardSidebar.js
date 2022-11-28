import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <aside className="w-full p-6 sm:w-60 bg-secondary text-gray-100">
            <nav className="space-y-8 text-sm">

                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Dashboard</h2>
                    <div className="flex flex-col space-y-1 capitalize text-lg ">
                        <Link to='/dashboard'>my orders</Link>
                        <Link to='/dashboard/alluser'>all users</Link>
                        <Link to=''>Page Title</Link>
                        <Link to=''>Menus</Link>
                        <Link to=''>Sidebar</Link>
                        <Link to=''>Footer</Link>
                    </div>
                </div>
            </nav>
        </aside>

    );
};

export default DashboardSidebar;