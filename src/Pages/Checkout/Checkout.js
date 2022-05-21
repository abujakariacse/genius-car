import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../../hooks/PageTitle/PageTitle';
import useSericeDetail from '../../hooks/useServiceDetail/useServiceDetail';
import './Checkout.css';

const Checkout = () => {
    const { id } = useParams();
    const [service] = useSericeDetail(id);
    const [user] = useAuthState(auth);
    const handleOrderSubmit = e => {
        e.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.name,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Order Placed');
                    e.target.reset();
                }
            })
    }
    return (
        <div className='content-container text-center'>
            <PageTitle title='Checkout'></PageTitle>
            <h2>This is Checkout</h2>
            <h3>Please Order : {service.name}</h3>
            <form onSubmit={handleOrderSubmit}>
                <input className='w-50 mb-2' type="text" name="name" value={user?.displayName} placeholder='Your Name' disabled /><br />
                <input className='w-50 mb-2' type="email" name="email" value={user?.email} readOnly placeholder='Your Email' disabled /><br />
                <input className='w-50 mb-2' type="text" name="service" defaultValue={service.name} readOnly /><br />
                <input className='w-50 mb-2' type="text" name="address" placeholder='Your Address' required autoComplete='off' /><br />
                <input className='w-50 mb-2' type="number" name="phone" placeholder='Your Phone' required /><br />
                <input className='btn btn-primary' type="submit" value="Checkout" />
            </form>

        </div>
    );
};

export default Checkout;