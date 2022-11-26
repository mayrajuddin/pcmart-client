import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from './PostCard';

const PostList = () => {
    const data = useLoaderData()
    const posts = data[0].products
    return (
        <section className='py-8'>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {
                        posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PostList;