import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <aside className="w-full p-6 sm:w-60 bg-secondary text-gray-100">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>
                                <div className="flex flex-col space-y-1">
                                    <Link to=''>Installation</Link>
                                    <Link to=''>Plugins</Link>
                                    <Link to=''>Migrations</Link>
                                    <Link to=''>Appearance</Link>
                                    <Link to=''>Mamba UI</Link>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Dashboard</h2>
                                <div className="flex flex-col space-y-1">
                                    <Link to=''>Header</Link>
                                    <Link to=''>Drawer</Link>
                                    <Link to=''>Page Title</Link>
                                    <Link to=''>Menus</Link>
                                    <Link to=''>Sidebar</Link>
                                    <Link to=''>Footer</Link>
                                </div>
                            </div>
                        </nav>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;