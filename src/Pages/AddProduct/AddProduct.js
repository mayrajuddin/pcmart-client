import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { authContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';

const AddProduct = () => {
    const { data = [] } = useQuery({
        queryKey: ['productCatagory'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URI}/productCatagory`)
            .then(res => res.json())
    })
    const { loading, user } = useContext(authContext)
    const { register, handleSubmit } = useForm()

    if (loading) {
        return <Spinner />
    }
    console.log(user);
    const handleProductForm = data => {
        const name = data.name
        const usesTime = data.usesTime
        const location = data.location
        const brand = data.brand
        const image = data.image
        const sellPrice = data.sellPrice
        const officialPrice = data.officialPrice
        const details = data.details
        const sellerEmail = user.email
        const sellerName = user.displayName
        const product = {
            name, usesTime, location, brand, image, sellPrice, officialPrice, details, sellerEmail, sellerName
        }
        fetch(`${process.env.REACT_APP_API_URI}/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('product added succesfully.', {
                        style: {
                            border: '1px solid #F8444A',
                            padding: '16px',
                            color: '#111827',
                        },
                        iconTheme: {
                            primary: '#F8444A',
                            secondary: '#fff',
                        },
                    });
                }
            })
    }
    return (
        <div>
            <section className="text-gray-50">
                <form onSubmit={handleSubmit(handleProductForm)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-semibold text-xl text-center">Add your product</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Model Name</label>
                                <input {...register('name')} name='name' id="firstname" type="text" placeholder="Model name" className="w-full input rounded-md focus:outline-none text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Uses Time</label>
                                <input {...register('usesTime')} id="lastname" type="text" placeholder="Uses Time" className="w-full input rounded-md focus:outline-none text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Your Location</label>
                                <input {...register('location')} id="location" type="text" placeholder="Your location" className="w-full input rounded-md focus:outline-none text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Brand Name</label>
                                <select {...register('brand')} className="select select-bordered w-full focus:outline-none text-gray-900">
                                    {data.map(bName => (
                                        <option key={bName._id} className='text-gray-900' value={bName.brandName}>{bName.brandName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Image URL</label>
                                <input {...register('image')} id="address" type="text" placeholder="image URL" className="w-full input rounded-md focus:outline-none text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="sell" className="text-sm">Sell Price</label>
                                <input {...register('sellPrice')} id="sell" type="number" placeholder="Sell Price" className="w-full input rounded-md focus:outline-none text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Official Price</label>
                                <input {...register('officialPrice')} id="state" type="number" placeholder="official Price" className="w-full input rounded-md focus:outline-none text-gray-900 " />
                            </div>
                            <div className="col-span-full">
                                <textarea className="textarea w-full focus:outline-none text-gray-900" placeholder="Give me Details"></textarea>
                            </div>
                            <button type='submit' className='btn btn-primary hover:bg-white hover:text-secondary hover:border-white duration-700 ease-in font-semibold'>post</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;