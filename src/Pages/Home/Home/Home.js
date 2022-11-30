import React, { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';
import Spinner from '../../../Components/Spinner/Spinner';
import Advertize from '../Advertize/Advertize';
import Banner from '../Banner/Banner';
import LeatestPost from '../LeatestPost/LeatestPost';
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
            <Advertize />
            <LeatestPost />
        </div>
    );
};

export default Home;