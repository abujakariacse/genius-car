import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from 'react-spinners';
import PageTitle from '../../../hooks/PageTitle/PageTitle';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
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
        <div className='container w-50 mx-auto mt-3 login-container'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-primary'>Please Login</h2>
            <Form onSubmit={handleOnSubmit} className='mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                <Button className='w-50 d-block mx-auto mb-4' variant="primary" type="submit">
                    Login
                </Button>
                <p
                    onClick={async () => {
                        const email = emailRef.current.value;
                        if (email) {
                            await sendPasswordResetEmail(email);
                            toast('Sent Email');
                        }
                        else {
                            toast('Please Enter a Valid Email');
                        }

                    }}
                    className='forgot-btn text-danger text-center'>Forgot Password? <br />{error1 && error1.message} {sending && <BeatLoader color='blue' size={10}></BeatLoader>}
                </p>
                <p className='text-center'>New to Genius Car? <Link onClick={navigateSignup} className='text-danger text-decoration-none' to='/signup'>Register</Link></p>

            </Form>
            <SocialLogin />
            <ToastContainer />

        </div >
    );
};

export default Login;