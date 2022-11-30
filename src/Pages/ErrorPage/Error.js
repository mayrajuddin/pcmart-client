import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="bg-slate-100 h-screen">
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                <div className="">
                    <img className='h-screen w-full' src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1669793483~exp=1669794083~hmac=81f3bf888ad2c14966f0812c6e5e3b077c5b6d569c509f90aed41e3c261ea974" alt="" />
                </div>
                <div className='text-center'>
                    <p className="text-3xl font-semibold text-secondary font-mono py-6 uppercase">link not found pls go </p>
                    <Link to='/' className='font-bold text-2xl btn btn-primary text-white '>Back to Home</Link>
                </div>
            </div>
        </section >
    );
};

export default Error;