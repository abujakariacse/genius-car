import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('Service Added');
                }
            })
    };

    return (
        <div className='w-50 mx-auto mt-3'>
            <h2 className='text-center'>Add Service to The Website</h2>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-3' placeholder='Name'  {...register("name")} />
                <input className='mb-3' placeholder='Price'  {...register("price")} />
                <input className='mb-3' placeholder='description' {...register("description", { required: true })} />
                <input className='mb-3' placeholder='image Link' {...register("img", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;