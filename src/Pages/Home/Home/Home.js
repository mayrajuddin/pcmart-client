import React, { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';
import Spinner from '../../../Components/Spinner/Spinner';
import Banner from '../Banner/Banner';

const Home = () => {
    const { loading } = useContext(authContext)
    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;