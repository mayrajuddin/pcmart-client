import React, { } from 'react';
import { BiHeart, } from "react-icons/bi";
import { FaCheckCircle } from 'react-icons/fa';
const AdvertizeCard = ({ product, wishlist, setSeletProduct }) => {
    const { image, officialPrice, sellPrice, usesTime, name, sellerName, verify } = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto text-secondary font-mono">
            <figure><img src={image} alt="Shoes" className='max-h-64 h-64 max-w-80' /></figure>
            <div className="card-body">
                <h2 className="card-title ">
                    {name}
                </h2>
                <p>Orginal Price : {officialPrice}</p>
                <p>selling Price : {sellPrice}</p>
                <p>duration : {usesTime}</p>
                <span className='text-sm text-primary'>
                    by {sellerName}
                    {verify && <span><FaCheckCircle className='text-sky-500 ml-2' /></span>}
                </span>
                <div className="card-actions justify-between items-center pt-2">
                    <div className=""><button onClick={wishlist} className='btn btn-sm btn-primary btn-outline'> <BiHeart className='mr-2' /> wishlist</button></div>
                    <div className="text-primary"><label onClick={() => setSeletProduct(product)} htmlFor="bookModal" className=' btn btn-sm  btn-primary'>book now</label></div>
                </div>
            </div>
        </div>
    );
};

export default AdvertizeCard;