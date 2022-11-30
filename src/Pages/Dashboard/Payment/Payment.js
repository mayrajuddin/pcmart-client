import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    console.log(' booking', booking);
    return (
        <div>
            payment
        </div>
    );
};

export default Payment;