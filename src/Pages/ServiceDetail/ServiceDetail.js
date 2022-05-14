import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetail = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const handleProceedCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div className='container details-container text-center mt-5'>
            <h2>This is service detail:{serviceId}</h2>
            <button className='btn btn-primary' onClick={handleProceedCheckout}>Proceed Checkout</button>
        </div>
    );
};

export default ServiceDetail;