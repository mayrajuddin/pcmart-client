import React from 'react';

const PostCard = ({ post, setSeletProduct }) => {
    const { brand, name, location, image, officialPrice, sellPrice, usesTime } = post

    return (
        <div className="flex flex-col max-w-lg p-6 mx-auto space-y-6 overflow-hidden rounded-lg hover:shadow-lg bg-gray-900 text-gray-300">
            <div className="flex space-x-4">
                <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500 " />
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold">name here</p>
                    <span className="text-xs dark:text-gray-400">4 hours ago</span>
                </div>
            </div>
            <div >
                <div className="overflow-hidden h-60 sm:h-80 mb-4">
                    <img src={image} alt="" className="object-cover w-full  h-60 sm:h-80 bg-gray-500 hover:scale-105 duration-500" />
                </div>
                <h2 className="mb-3 text-xl font-semibold">{name}</h2>
                <div className="grid md:grid-cols-2 justify-between items-center text-md capitalize font-mono mb-4">
                    <li className='md:col-span-2 lg:col-span-3 xl:col-span-2 mb-2'>Brand : <span className='uppercase'>{brand}</span></li>
                    <li className='md:col-span-1 lg:col-span-2 xl:col-span-1 mb-2'>Use Time : {usesTime}</li>
                    <li className='md:col-span-3 mb-2'>original price : {officialPrice}</li>
                    <li className='md:col-span-3 mb-2'>sell price : {sellPrice}</li>
                    <li className='md:col-span-3'>seller location : {location}</li>
                </div>
                <label onClick={() => setSeletProduct(post)}
                    htmlFor="booking-modal" className="btn btn-primary w-full hover:text-secondary hover:bg-primary font-semibold text-lg duration-700 ease-in-out">book now</label>
            </div>

        </div>
    );
};

export default PostCard;