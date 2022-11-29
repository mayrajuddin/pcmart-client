import { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false)
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_API_URI}/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, sellerLoading]
};

export default useSeller;