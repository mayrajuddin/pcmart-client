import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';
import Spinner from '../../../Components/Spinner/Spinner';
const MyOrders = () => {
    const { user } = useContext(authContext)

    const url = `${process.env.REACT_APP_API_URI}/bookings?email=${user?.email}`;

    const { data: bookings, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
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
    if (bookings?.length === 0) {
        return <div className='text-2xl text-center my-8 '>
            <h2 className="text-primary text-medium capitalize">No Orders  Found</h2>
        </div>
    }
    return (

        <section className=''>
            <h4 className='text-4xl text-secondary capitalize font-bold pb-8'>my orders</h4>
            <div className="flex flex-col w-2/3 mx-auto gap-6">
                {
                    bookings?.map(booking => <div key={booking._id} className="card card-side items-center bg-gray-100 shadow-xl h-44">
                        <figure><img src={booking?.image} alt="productimage" className='w-52 h-44' /></figure>
                        <div className="card-body text-secondary p-0 px-4">
                            <h2 className="card-title">{booking.modelName}</h2>
                            <p className='text-lg font-semibold capitalize'> Price : {booking.sellingPrice}</p>
                            <p>{booking.email}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">pay</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default MyOrders;