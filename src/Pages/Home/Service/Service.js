import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, name, price, description } = service;
    const navigate = useNavigate();
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img className='service-img' src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p className='description'><small title={description}>{description}</small></p>
            <div className="btn-container">
                <button onClick={() => navigateServiceDetail(id)} className='buy-btn'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;