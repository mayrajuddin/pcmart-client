
import React from 'react';
import toast from 'react-hot-toast';

const MyProductsCard = ({ product, deleteProduct }) => {
    const { image, officialPrice, sellPrice, usesTime, name, _id, adsOn } = product
    const handelAdvertize = () => {
        fetch(`${process.env.REACT_APP_API_URI}/advertize/${_id}`)
            .then(res => res.json())
            .then(data => {
                toast.success('Advertizment Successfull')
            })
    }
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
                    <div className="badge badge-outline">
                        <button onClick={handelAdvertize} className={`${adsOn && 'btn-disabled'}`}>Advertized</button>
                    </div>
                    <div className="badge badge-outline text-primary">
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;