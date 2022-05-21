import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    }

    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-4' style={{ height: '100vh' }}>
            <h4 className='text-danger mb-3'>Your Email isn't Verified.</h4>
            <h5 className='text-primary'>Please Verify Your Email Address</h5>
            <button
                className='btn btn-primary mb-5'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer />

        </div>
    }


    return children;
};

export default RequireAuth;