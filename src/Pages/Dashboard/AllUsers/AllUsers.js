import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';

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
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.upsertedCount > 0) {
                    toast.success('Role changed succesfully')
                    refetch()
                }
            })
    }
    return (
        <section className=''>
            <h3 className="font-bold text-4xl text-red-400 capitalize">all user</h3>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full text-secondary ">
                    <thead className='text-white'>
                        <tr >
                            <th className='bg-gray-500'>SL</th>
                            <th className='bg-gray-500'>Name</th>
                            <th className='bg-gray-500'>Email</th>
                            <th className='bg-gray-500'>Status</th>
                            <th className='bg-gray-500'>Roll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id} className='bg-slate-400'>
                                <th>{i + 1}</th>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td>Blue</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => makeAdmin(user._id)} className='btn btn-xs btn-primary'> admin</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;