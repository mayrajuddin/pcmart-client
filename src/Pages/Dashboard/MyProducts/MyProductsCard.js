import React from 'react';

const MyProductsCard = ({ product }) => {
    console.log(product);
    const { image, officialPrice, sellPrice, usesTime, name } = product
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl mx-auto text-secondary font-mono">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title ">
                    {name}
                </h2>
                <p>Orginal Price : {officialPrice}</p>
                <p>selling Price : {sellPrice}</p>
                <p>duration : {usesTime}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"><button>Advertized</button></div>
                    <div className="badge badge-outline text-primary"><button>Delete</button></div>
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;