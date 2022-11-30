import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../AuthContext/AuthProvider';
import Spinner from '../../../Components/Spinner/Spinner';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {

    const { user } = useContext(authContext)
    console.log(user.email);

    const url = `${process.env.REACT_APP_API_URI}/sellerProducts?email=${user?.email}`;

    const { data: products, isLoading, refetch } = useQuery({
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
    console.log(products);
    if (isLoading) {
        return <Spinner />
    }
    if (products?.length === 0) {
        return <div className='text-2xl text-center my-8 '>
            <h2 className="text-primary text-medium capitalize">No products  Found</h2>
        </div>
    }
    const deleteProduct = id => {
        fetch(`${process.env.REACT_APP_API_URI}/products/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Product Delete Succesfull')
            })
    }
    return (
        <div>
            <section>
                <h4 className='text-4xl text-secondary capitalize font-bold py-4  pl-4 '>My Products</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                    {
                        products.map(product => <MyProductsCard key={product._id} product={product} deleteProduct={deleteProduct}></MyProductsCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default MyProducts;