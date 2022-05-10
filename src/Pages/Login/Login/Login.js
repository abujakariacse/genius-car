import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass)

    }
    const navigateSignup = () => {
        navigate('/signup')
    }
    return (
        <div className='container w-50 mx-auto mt-3'>
            <h2 className='text-primary'>Please Login</h2>

            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    <Form.Text className="text-muted">
                        {
                            error && <p className='text-danger'>{error.message}</p>
                        }
                        {
                            loading && <Spinner className='mt-3' animation="border" variant="primary" />
                        }
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>New to Genius Car? <Link onClick={navigateSignup} className='text-danger text-decoration-none' to='/signup'>Register</Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;