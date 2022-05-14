import React from 'react';
import { HashLoader, } from 'react-spinners';

const Loading = () => {
    return (
        <div style={{ height: '400px', width: '500px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <HashLoader color='#0d6efd' size={200}></HashLoader>
        </div>
    );
};

export default Loading;