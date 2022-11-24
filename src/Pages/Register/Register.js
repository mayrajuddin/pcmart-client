import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm()
    const handleRegister = data => {

    }
    return (
        <div>
            <section className="bg-[#F8F8F8] py-8 text-secondary">
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto border bg-slate-400 shadow-xl rounded">
                        <form onSubmit={handleSubmit(handleRegister)} className="p-6">
                            <h3 className="text-center font-bold text-2xl capitalize">login now</h3>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Name</div>
                                </div>
                                <input type="text" {...register('name', { required: true })} className="input" placeholder='Your Name' />
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Email</div>
                                </div>
                                <input type="email" {...register('email', { required: true })} className="input" placeholder='Your Email' />
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Password</div>
                                </div>
                                <input type="password" {...register('password', { required: true })} className="input" placeholder='Password' />
                            </div>
                            <button type='submit' className='btn btn-secondary w-full mt-4 text-lg'>Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;