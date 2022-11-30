import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import { BiTrashAlt, } from "react-icons/bi";
const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URI}/users`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner />
    }
    if (users?.length < 1) {
        return <p className='text-center 5xl font-bold'>no data</p>
    }
    const makeAdmin = id => {
        fetch(`${process.env.REACT_APP_API_URI}/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Role changed succesfully')
                    refetch()
                }
            })
    }
    const deleteUser = id => {
        fetch(`${process.env.REACT_APP_API_URI}/users/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success('user deleted succesfull')
            })
    }
    return (
        <section className=''>
            <h3 className="font-bold text-4xl text-red-400 capitalize">all user</h3>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full text-secondary ">
                    <thead className='text-white'>
                        <tr className='text-center'>
                            <th className='bg-gray-500'>SL</th>
                            <th className='bg-gray-500'>Name</th>
                            <th className='bg-gray-500'>Email</th>
                            <th className='bg-gray-500'>Status</th>
                            <th className='bg-gray-500'>role</th>
                            <th className='bg-gray-500'>verify</th>
                            <th className='bg-gray-500'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id} className='bg-slate-400 text-center'>
                                <th>{i + 1}</th>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td>{user?.role}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => makeAdmin(user._id)} className='btn btn-xs btn-primary'> make admin</button>}</td>
                                <td>{user?.role !== 'seller' && <button className='btn btn-xs btn-primary'> verify user</button>}</td>
                                <td> <button onClick={() => deleteUser(user._id)}><BiTrashAlt size={24} className='text-primary' /></button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;