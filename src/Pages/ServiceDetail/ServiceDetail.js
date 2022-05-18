import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../hooks/PageTitle/PageTitle';
import './ServiceDetails.css';

const ServiceDetail = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const handleProceedCheckout = () => {
        navigate('/checkout');
    }
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);
    const { img, name, price, description } = service;
    return (
        <div className='container details-container text-center mt-5'>
            <PageTitle title='Service Details'></PageTitle>
            <h2>Details about: {name}</h2>

            <div className='service-container w-90 mx-auto mt-5'>
                <img className='service-img' src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p className='description'><small title={description}>{description}</small></p>
                <button className='btn btn-primary' onClick={handleProceedCheckout}>Proceed Checkout</button>
            </div>

        </div>
    );
};

export default ServiceDetail;