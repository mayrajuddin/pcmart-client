import React, { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';
import Spinner from '../../../Components/Spinner/Spinner';
import Banner from '../Banner/Banner';
import ProductCatagory from '../ProductCatagory/ProductCatagory';

const Home = () => {
    const { loading } = useContext(authContext)
    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <Banner />
            <ProductCatagory />
        </div>
    );
};

export default Home;