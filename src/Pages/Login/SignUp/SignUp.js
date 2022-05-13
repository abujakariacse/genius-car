import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user, loading
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    const [error, setError] = useState('');
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
        <div className='container w-50 mt-2 signup-container'>
            <h2>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control ref={confirmPassRef} type="password" placeholder="Confirm Password" required />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <p>Already Have an Account? <Link onClick={navigateLogin} className='text-danger text-decoration-none' to='/login'>Please Login</Link></p>
                <h6>{
                    loading && <Spinner className='mt-3' animation="border" variant="primary" />
                }</h6>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <SocialLogin />

        </div>
    );
};

export default SignUp;