import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { authContext } from '../../AuthContext/AuthProvider';

const BookingModal = ({ selectProduct, setSeletProduct }) => {
    const { name, sellPrice, location, image } = selectProduct
    const { user } = useContext(authContext)

    const { register, handleSubmit } = useForm()

    const handleBookigForm = data => {
        const buyerName = user.displayName
        const buyerEmail = user.email
        const sellerLocation = location
        const sellingPrice = sellPrice
        const pickupLocation = data.pickupLocation
        const buyerContact = data.buyerContact

        const ProductDetails = {
            modelName: name,
            buyerName,
            email: buyerEmail,
            sellerLocation,
            sellingPrice,
            pickupLocation,
            buyerContact,
            image
        }

        fetch(`${process.env.REACT_APP_API_URI}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ProductDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setSeletProduct(null)
                    toast.success('product succesfully booked')
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal backdrop-blur-sm ">
                <div className="modal-box relative text-secondary bg-zinc-100">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
                    <h3 className="text-lg font-bold  mb-2 pb-3 border-b border-b-gray-300">{name}</h3>

                    <form onSubmit={handleSubmit(handleBookigForm)}>
                        <div>
                            <label htmlFor="userInfo" className="label capitalize font-medium">user information</label>
                            <input type="text" disabled value={user?.displayName} className="input disabled:bg-gray-200 disabled:border-gray-300  input-bordered mb-3 w-full disabled:text-slate-500" />
                            <input type="text" disabled value={user.email} className="input input-bordered mb-3 w-full  disabled:bg-gray-200 disabled:border-gray-300 disabled:text-slate-500" />
                        </div>
                        <div>
                            <label className="label capitalize font-medium">seller location</label>
                            <input type="text" disabled value={location} className="input input-bordered mb-3 w-full  disabled:bg-gray-200 disabled:border-gray-300 disabled:text-slate-500" />
                        </div>
                        <div>
                            <label className='label capitalize font-medium'>sell price</label>
                            <input type="text" disabled value={sellPrice} className="input input-bordered mb-4 w-full  disabled:bg-gray-200 disabled:border-gray-300 disabled:text-slate-500" />
                        </div>

                        <div>
                            <label className="label capitalize font-medium ">pickup location</label>
                            <input type="text" {...register('pickupLocation')} placeholder="Pickup location" className="input input-bordered mb-3 w-full text-secondary" />
                        </div>
                        <input type="number" {...register('buyerContact')} placeholder="Contact Number" className="input input-bordered mb-3 w-full text-secondary" />
                        <div className='mt-3'>
                            <button className="btn btn-primary w-full hover:text-secondary hover:bg-primary font-semibold text-lg duration-700 ease-in-out" type='submit'>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;