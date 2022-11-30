import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';

import { FaGoogle, } from 'react-icons/fa';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser, loading, googleUser } = useContext(authContext)
    const [regError, setRegError] = useState('')
    const navigate = useNavigate()
    const [newUserEmail, setNewUserEmail] = useState('')

    const [token] = useToken(newUserEmail)

    if (token) {
        navigate('/')
    }

    const handleRegister = data => {
        if (loading) {
            return <Spinner />
        }
        setRegError('')
        createUser(data.email, data.password)
            .then(result => {
                toast('user create succesfully')
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.image
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                setRegError(err.message)
            })
    }
    const handlegoogle = () => {
        googleUser()
            .then(result => {
                const data = result.user
                saveUser(data.displayName, data.email)
            })
            .catch(err => console.error(err))
    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role }

        fetch(`${process.env.REACT_APP_API_URI}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setNewUserEmail(email)
            })
    }
    return (
        <div>
            <section className="bg-[#F8F8F8] py-8 text-secondary">
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto border bg-slate-400 shadow-xl rounded pb-6">
                        <form onSubmit={handleSubmit(handleRegister)} className="p-6">
                            <h3 className="text-center font-bold text-2xl capitalize">Register now</h3>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Name</div>
                                </div>
                                <input type="text" {...register('name', { required: 'Name is required' })} className="input focus:outline-none" placeholder='Your Name' />
                                {errors.name && <p className='text-red-600 pt-2'> {errors.name?.message} </p>}
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Email</div>
                                </div>
                                <input type="email" {...register('email', { required: 'email is required' })} className="input focus:outline-none" placeholder='Your Email' />
                                {errors.email && <p className='text-red-600 pt-2'> {errors.email?.message} </p>}
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Email</div>
                                </div>
                                <input type="text" {...register('image', { required: 'image is required' })} className="input focus:outline-none" placeholder='photo URL' />
                                {errors.image && <p className='text-red-600 pt-2'> {errors.image?.message} </p>}
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Your Role</div>
                                </div>
                                <select {...register('role')} className="select select-bordered w-full max-w-xs">
                                    <option value='user'>User</option>
                                    <option value='seller'>Seller</option>
                                </select>
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Password</div>
                                </div>
                                <input type="password" {...register('password', { required: 'password is required' })} className="input focus:outline-none" placeholder='Password' />
                                {errors.password && <p className='text-red-600 pt-2'> {errors.password?.message} </p>}
                            </div>
                            {regError && <p className="py-3 font-semibold text-rose-800">{regError}</p>}
                            <button type='submit' className='btn btn-secondary w-full mt-4 text-lg'>register</button>
                        </form>
                        <p className="text-center capitalize text-lg">already have an account ? <Link to="/login" className=''><strong>login</strong></Link></p>
                        <div className="px-6">
                            <button onClick={handlegoogle} type='button' className='btn btn-secondary font-bold btn-outline w-full mt-4  text-lg'> <FaGoogle className='mr-3' />  google</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;