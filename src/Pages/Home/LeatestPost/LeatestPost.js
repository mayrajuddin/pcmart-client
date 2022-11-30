
import React, { } from 'react';

const LeatestPost = () => {

    return (
        <section className='py-8'>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 h-72 gap-4 items-center">
                    <div className='col col-span-7 mx-5'>
                        <h2 className="text-4xl text-secondary font-bold capitalize text-center font-mono">leatest post</h2>

                    </div>
                    <div className='col col-span-5'>
                        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="w-full h-72 rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeatestPost;