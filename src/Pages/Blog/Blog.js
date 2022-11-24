import React from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            qus: 'What are the different ways to manage a state in a React application?',
            ans: 'ans'
        },
        {
            id: 2,
            qus: 'How does prototypical inheritance work?',
            ans: 'ans'
        },
        {
            id: 3,
            qus: 'What is a unit test? Why should we write unit tests?',
            ans: 'ans'
        },
        {
            id: 4,
            qus: 'React vs. Angular vs. Vue?',
            ans: 'ans'
        }
    ]
    return (
        <section className="text-secondary">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    {
                        blogs.map(blog => (
                            <details key={blog.id}>
                                <summary className="py-2 outline-none cursor-pointer text-lg font-semibold">{blog.qus}</summary>
                                <div className="px-4 pb-4">
                                    <p>{blog.ans}</p>
                                </div>
                            </details>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;