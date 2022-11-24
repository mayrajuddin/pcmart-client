import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-gray-100">
            <div className="bg-gray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <FaInstagram size={22} />
                            </div>
                            <span className="self-center text-2xl font-semibold uppercase">pcmart</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link to="/">Features</Link>
                                </li>
                                <li>
                                    <Link to="/">Integrations</Link>
                                </li>
                                <li>
                                    <Link to="/">Pricing</Link>
                                </li>
                                <li>
                                    <Link rel="noopener noreferrer" to="/">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link rel="noopener noreferrer" to="/">Privacy</Link>
                                </li>
                                <li>
                                    <Link rel="noopener noreferrer" to="/">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase text-gray-50">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link rel="noopener noreferrer" to="/">Public API</Link>
                                </li>
                                <li>
                                    <Link rel="noopener noreferrer" to="/">Documentation</Link>
                                </li>
                                <li>
                                    <Link rel="noopener noreferrer" to="/">Guides</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase text-gray-50">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <Link rel="noopener noreferrer" to="/" title="Facebook" className="flex items-center p-2 border border-secondary hover:border-gray-400 rounded-full hover:text-primary duration-700 ease-in">
                                    <FaFacebook size={22} />
                                </Link>
                                <Link rel="noopener noreferrer" to="/" title="Twitter" className="flex items-center p-2 border border-secondary hover:border-gray-400 rounded-full hover:text-primary duration-700 ease-in">
                                    <FaTwitter size={22} />
                                </Link>
                                <Link rel="noopener noreferrer" to="/" title="Instagram" className="flex items-center p-2 border border-secondary hover:border-gray-400 rounded-full hover:text-primary duration-700 ease-in">
                                    <FaInstagram size={22} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6  text-center text-white bg-[#3A3E45]">
                <p className="">All rights reserved by <strong className='uppercase '>pcmart</strong></p>
            </div>
        </footer>
    );
};

export default Footer;