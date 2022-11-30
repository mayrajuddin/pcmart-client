
import React, { } from 'react';

const LeatestPost = () => {

    return (
        <section className='py-8 '>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 items-center py-8">
                    <div className=' text-secondary'>
                        <h2 className="text-4xl  font-bold capitalize text-center font-mono pb-3">about us</h2>
                        <p className=''>We have brought an app for customers to buy and sell antiques! So everyone can easily buy and sell old laptops. easy to buy easy to sell ! </p>
                    </div>
                    <div className=''>
                        <img src="https://i.ibb.co/9cRdrc6/photo-1525547719571-a2d4ac8945e2.jpg" className="w-full h-72 img-fluid rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeatestPost;