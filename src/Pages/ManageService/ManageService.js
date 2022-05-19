import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices/useSevices';

const ManageService = () => {
    const navigate = useNavigate();
    const [services, setServices] = useServices();
    const handleDeleteFromDB = (id) => {
        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                })
        }


    }
    const handleUpdate = id => {
        navigate(`/update/` + id);
    }
    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Manage Service</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDeleteFromDB(service._id)}>Delete</button> <button onClick={() => handleUpdate(service._id)}>Update</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;