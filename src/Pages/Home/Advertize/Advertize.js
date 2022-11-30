import { useQuery } from '@tanstack/react-query';
import React, { } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import AdvertizeCard from './AdvertizeCard';

const Advertize = () => {

    const url = `${process.env.REACT_APP_API_URI}/advertize`;

    const { data: products, isLoading } = useQuery({
        queryKey: ['Products'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    const wishlist = () => toast.error('wishlist not set')

    if (isLoading) {
        return <Spinner />
    }
    return (
        <section className='bg-gray-200 py-8 text-secondary'>
            <div className="container mx-auto">
                <h2 className='text-2xl capitalize font-semibold py-4 '> Advertizes here</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                    {
                        products?.map(product => <AdvertizeCard key={product._id} product={product} wishlist={wishlist} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Advertize;