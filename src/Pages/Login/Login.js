import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const { loginUser, loading, googleUser } = useContext(authContext)
    const [loginEmail, setLoginEmail] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const [token] = useToken(loginEmail)

    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })

    }

    if (loading) {
        return <Spinner />
    }

    const handleLogin = data => {
        const email = data.email
        const password = data.password
        loginUser(email, password)
            .then(result => {
                setLoginEmail(email)
            })
            .catch(err => {
                console.log(err);
            })

    }
    const handleGoogle = () => {
        googleUser()
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <section className="bg-[#F8F8F8] py-8 text-secondary">
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto border bg-slate-400 shadow-xl rounded pb-6">
                        <form onSubmit={handleSubmit(handleLogin)} className="p-6">
                            <h3 className="text-center font-bold text-2xl capitalize">login now</h3>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Email</div>
                                </div>
                                <input type="email" {...register('email', { required: true })} className="focus:outline-none input" placeholder='Your Email' />
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Password</div>
                                </div>
                                <input type="password" {...register('password', { required: true })} className="focus:outline-none input" placeholder='Password' />
                            </div>
                            <button type='submit' className='btn btn-secondary w-full mt-4 text-lg'>Login</button>
                        </form>
                        <p className="text-center capitalize text-lg">new to Pcmart ? <Link to="/register" className=''><strong>register</strong></Link></p>
                        <div className="px-6">
                            <button onClick={handleGoogle} type='button' className='btn btn-secondary font-bold btn-outline w-full mt-4  text-lg'> <FaGoogle className='mr-3' />  google</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;