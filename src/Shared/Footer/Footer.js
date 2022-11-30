import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-gray-100">
            <div className="bg-gray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link to="/" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <img src="https://i.ibb.co/JqFGdSV/favicon-16x16.png" alt="" />
                            </div>
                            <span className="self-center text-2xl font-semibold uppercase">pcmart</span>
                        </Link>
                        <p className='text-lg capitalize '>find your best laptop on pc mart</p>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Brand</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link to="/">Dell</Link>
                                </li>
                                <li>
                                    <Link to="/">Toshiba</Link>
                                </li>
                                <li>
                                    <Link to="/">Assus</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link to="/">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase text-gray-50">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <Link to="https://www.facebook.com/" title="Facebook" className="flex items-center p-2 border border-secondary hover:border-gray-400 rounded-full hover:text-primary duration-700 ease-in">
                                    <FaFacebook size={22} />
                                </Link>
                                <Link to="https://www.youtube.com/" title="Twitter" className="flex items-center p-2 border border-secondary hover:border-gray-400 rounded-full hover:text-primary duration-700 ease-in">
                                    <FaTwitter size={22} />
                                </Link>
                                <Link to="https://www.youtube.com/" title="Instagram" className="flex items-center p-2 border border-secondary hover:border-gray-400 rounded-full hover:text-primary duration-700 ease-in">
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