import React from 'react';
import { BarLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-sky-50'>
            <BarLoader
                color="#F84248"
                height={5}
                width={149}
            />
        </div>
    );
};

export default Spinner;