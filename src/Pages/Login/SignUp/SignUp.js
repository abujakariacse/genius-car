import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passRef = useRef('');
    const confirmPassRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const pass = passRef.current.value;

        const confirmPass = confirmPassRef.current.value;
        if (pass !== confirmPass) {
            setError('Password Not Matched');
            return;
        }
        setError('');
        createUserWithEmailAndPassword(email, pass);


    }
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='container w-50 mt-2'>
            <h2>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPassRef} type="password" placeholder="Confirm Password" />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <p>Already Have an Account? <Link onClick={navigateLogin} className='text-danger text-decoration-none' to='/login'>Please Login</Link></p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>

        </div>
    );
};

export default SignUp;