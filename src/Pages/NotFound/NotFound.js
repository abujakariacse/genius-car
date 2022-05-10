import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <span className='icon d-flex justify-content-center mt-5 text-secondary'><i className="fa-regular fa-face-frown"></i></span>
            <h1 className='text-center fs-1 text-secondary mt-2'>404</h1>
            <h2 className='text-center text-secondary mt-2'>Page not found</h2>
            <p className='text-secondary text-center'>The page you are looking for doesn't exists or an other error occurred. Go back, or head over to the site to choose a new direction</p>
        </div>
    );
};

export default NotFound;