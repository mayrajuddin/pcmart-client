import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';
import BookingModal from './BookingModal';
import PostCard from './PostCard';

const PostList = () => {
    const data = useLoaderData()
    const posts = data[0].products
    const [selectProduct, setSeletProduct] = useState(null)
    const { loading } = useContext(authContext)
    if (loading) {
        return <Spinner />
    }
    return (
        <section className='py-8'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        posts?.map(post => <PostCard key={post._id} post={post} setSeletProduct={setSeletProduct}></PostCard>)
                    }
                </div>
            </div>
            {selectProduct && <BookingModal selectProduct={selectProduct} setSeletProduct={setSeletProduct} />}
        </section >
    );
};

export default PostList;