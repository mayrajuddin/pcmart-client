import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft, } from "react-icons/hi2";
const DashboardNav = () => {


    return (
        <header className='bg-secondary '>
            <div className="navbar justify-between container mx-auto">
                <div className="navbar-start">
                    <label htmlFor="dashboard-drawer" className="btn focus:bg-transparent  drawer-button lg:hidden"> <HiBars3CenterLeft size={24} /> </label>
                </div>
                <div className="navbar-end">
                    <Link to='/' className="btn bg-transparent flex-start text-white uppercase text-2xl font-mono"><strong>pcmart</strong></Link>
                </div>
            </div>
        </header>
    );
};

export default DashboardNav;