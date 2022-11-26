import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ProductCatagory = () => {

    const { data: catagory = [] } = useQuery({
        queryKey: ['productCatagory'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URI}/productCatagory`)
            .then(res => res.json())
    })
    return (
        <div>
            <section className='py-8'>
                <div className="container mx-auto">
                    <h3 className="text-3xl capitalize font-bold text-secondary pb-9 text-center">product Catagory</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-center">
                        {
                            catagory.map(product => (
                                <div key={product._id}
                                    className="card items-end  bg-base-100 shadow-xl image-full max-h-64 w-96 mx-auto sm:w-auto">
                                    <figure><img src={product.img} alt="Shoes" className='w-full max-h-64 ' /></figure>
                                    <div className="card-body items-center">
                                        <h2 className="text-center text-2xl uppercase text-white font-bold">{product.brandName}</h2>
                                        <div className="card-actions justify-center">
                                            <button className="btn btn-primary hover:bg-secondary hover:border-secondary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCatagory;