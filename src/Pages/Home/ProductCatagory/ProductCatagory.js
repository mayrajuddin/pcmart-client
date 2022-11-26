import React from 'react';

const ProductCatagory = () => {
    return (
        <div>
            <section className='py-8'>
                <div className="container mx-auto">
                    <h3 className="text-3xl capitalize font-bold text-secondary pb-9 text-center">product Catagory</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-center">
                        <div className="card  bg-base-100 shadow-xl image-full w-96 mx-auto sm:w-auto">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-center ">
                                    <button className="btn btn-primary hover:bg-secondary hover:border-secondary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card min-w-96 bg-base-100 shadow-xl image-full w-96 mx-auto sm:w-auto">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-center ">
                                    <button className="btn btn-primary hover:bg-secondary hover:border-secondary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCatagory;