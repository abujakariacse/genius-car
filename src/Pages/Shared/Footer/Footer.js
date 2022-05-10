import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p className='text-center'>© {year} || AJSoftwares || All Right Reserved.</p>
        </footer>
    );
};

export default Footer;