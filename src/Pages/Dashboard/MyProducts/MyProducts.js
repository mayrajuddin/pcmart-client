import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';
import Spinner from '../../../Components/Spinner/Spinner';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    const { user } = useContext(authContext)

    const url = `${process.env.REACT_APP_API_URI}/products?email=${user?.email}`;

    const { data: products, isLoading } = useQuery({
        queryKey: ['myProducts', user?.email],
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
        <div>
            <section>
                <h4 className='text-4xl text-secondary capitalize font-bold py-4  pl-4 '>My Products</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                    {
                        products.map(product => <MyProductsCard key={product._id} product={product}></MyProductsCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default MyProducts;