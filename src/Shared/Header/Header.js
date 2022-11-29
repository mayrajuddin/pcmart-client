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
        <li><Link to="/" className='hover:bg-transparent focus:bg-transparent capitalize text-white hover:text-primary font-semibold rounded-md'>home</Link></li>
        <li><Link to="/addproduct" className='hover:bg-transparent focus:bg-transparent capitalize text-white hover:text-primary font-semibold rounded-md'>add product</Link></li>
        <li><Link to="/blog" className='hover:bg-transparent focus:bg-transparent capitalize text-white hover:text-primary font-semibold rounded-md'>blog</Link></li>
        <li><Link to="/dashboard" className='hover:bg-transparent focus:bg-transparent capitalize text-white font-semibold hover:text-primary rounded-md'>dashboard</Link></li>

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
                    <div className="">
                        <ul className="menu menu-horizontal items-center">
                            {user?.uid ? <>
                                {user?.uid && <li><button className='btn bg-transparent flex-start text-white uppercase hover:bg-primary mr-3' type='button' onClick={handleLogOut}>Logout</button></li>}
                                <li className={`rounded-full ${user?.photoURL ? 'visible' : 'hidden'}`}>
                                    <img src={user?.photoURL} alt="" className='rounded-full h-16 p-2' title={user?.displayName} />
                                </li>
                            </> :
                                <>
                                    <li><Link to="/login" className='capitalize text-white hover:text-primary font-semibold rounded-md'>login</Link></li>
                                    <li><Link to="/register" className='capitalize text-white hover:text-primary font-semibold rounded-md'>register</Link></li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;