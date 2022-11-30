import React from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            qus: 'What are the different ways to manage a state in a React application?',
            ans: 'Every React component has a built-in state.The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of: a. Hooks b. React Context API c. Apollo Link State'
        },
        {
            id: 2,
            qus: 'How does prototypical inheritance work?',
            ans: 'The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.'
        },
        {
            id: 3,
            qus: 'What is a unit test? Why should we write unit tests?',
            ans: 'Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.'
        },
        {
            id: 4,
            qus: 'React vs. Angular vs. Vue?',
            ans: 'React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.React can be used as a UI library to render elements, without enforcing a specific project structure, and thats why its not strictly a framework.The Vue.js core library focuses on the View layer only. Its called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there is no strict association with MV*-patterns as it is also component-based.'
        }
    ]
    return (
        <section className="text-secondary bg-[#F8F8F8]">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl capitalize">blogs</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    {
                        blogs.map(blog => (
                            <details key={blog.id}>
                                <summary className="py-2 outline-none cursor-pointer text-lg font-semibold font-mono">{blog.qus}</summary>
                                <div className="px-4 pb-4 text-md capitalize">
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