import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../Components/Spinner/Spinner';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery({
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
                                <td>User</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;