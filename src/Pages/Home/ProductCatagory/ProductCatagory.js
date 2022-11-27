import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';

const ProductCatagory = () => {

    const { data: catagory = [], isLoading } = useQuery({
        queryKey: ['productCatagory'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URI}/productCatagory`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <section className='py-8'>
                <div className="container mx-auto">
                    <h3 className="text-3xl capitalize font-bold text-secondary pb-9 text-center">product Catagory</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-center">
                        {
                            catagory.map(cat => (
                                <Link to={`/category/${cat._id}`} key={cat._id}>
                                    <div className="card items-end  bg-base-100 shadow-xl image-full max-h-64 w-96 mx-auto sm:w-auto">
                                        <figure><img src={cat.img} alt="Shoes" className='w-full max-h-64 ' /></figure>
                                        <div className="card-body items-center">
                                            <h2 className="text-center text-2xl uppercase text-white font-bold">{cat.brandName}</h2>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCatagory;