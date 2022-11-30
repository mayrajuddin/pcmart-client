import { useQuery } from '@tanstack/react-query';
import React, { } from 'react';
import Spinner from '../../../Components/Spinner/Spinner';
import AdvertizeCard from './AdvertizeCard';

const Advertize = () => {

    const url = `${process.env.REACT_APP_API_URI}/products`;

    const { data: products, isLoading, refetch } = useQuery({
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

    if (isLoading) {
        return <Spinner />
    }
    return (
        <section className='bg-gray-200 py-8 text-secondary'>
            <div className="container mx-auto">
                <h2 className='text-2xl capitalize font-semibold py-4 '> Advertizes here</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
                    {
                        products.map(product => <AdvertizeCard key={product._id} product={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Advertize;