import React from 'react';

const Banner = () => {
    return (
        <section className="text-gray-100 bg-[url('https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover ">
            <div className="backdrop-blur-sm">
                <div className="container mx-auto items-center px-4 py-16  md:py-32 md:px-10 lg:px-32 ">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
                        <span className="dark:text-violet-400">laborum doloribus</span>delectus
                    </h1>
                    <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">shop now</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;