import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(authContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err);
            })
    }
    const menuItems = <>
        <li><Link to="/" className='capitalize text-white hover:text-primary font-semibold rounded-md'>home</Link></li>
        <li><Link to="/about" className='capitalize text-white hover:text-primary font-semibold rounded-md'>about</Link></li>
        <li><Link to="/appointment" className='capitalize text-white hover:text-primary font-semibold rounded-md'>appointment</Link></li>
        <li><Link to="/blog" className='capitalize text-white hover:text-primary font-semibold rounded-md'>blog</Link></li>
        <li><Link to="/contact" className='capitalize text-white font-semibold hover:text-primary rounded-md'>contact us</Link></li>
        {!user?.uid && <li><Link to="/login" className='capitalize text-white hover:text-primary font-semibold rounded-md'>login</Link></li>}
    </>
    return (
        <header className='bg-secondary '>
            <div className="navbar justify-between container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn bg-transparent flex-start text-white uppercase text-2xl font-mono"><strong>pcmart</strong></Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to='/'>Settings</Link></li>
                            <li><button type='button' onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;