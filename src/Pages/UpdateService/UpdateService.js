import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateService = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const url = `http://localhost:5000/service/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [url]);
    const handleUpdateService = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const changedData = { name, price };
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast('Service Updated');
                }
            })
    }
    return (
        <div className='w-50 mx-auto text-center mt-3'>
            <h3>Update : {service.name}</h3>
            <form onSubmit={handleUpdateService}>
                <label htmlFor="name">Name: </label>
                <input className='mb-2' type="text" name='name' defaultValue={service.name} /><br />
                <label htmlFor="price">Price</label>
                <input className='mb-2' type="number" name="price" defaultValue={service.price} /><br />
                <input type="submit" value="Update" className='btn btn-primary' />
            </form>
            <ToastContainer />

        </div>
    );
};

export default UpdateService;