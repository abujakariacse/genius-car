import React from 'react';
import useServices from '../../hooks/useServices/useSevices';

const ManageService = () => {
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
    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Manage Service</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDeleteFromDB(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;