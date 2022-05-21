import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';



const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    let loadingElement;
    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }
    if (loading || loading1 || loading2) {
        loadingElement = <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    if (error || error1 || error2) {
        errorElement = <p className='text-danger'>{error?.message}{error1?.message} {error2?.message}</p>
    }
    return (
        <div>

            <div className="horizontal-line d-flex align-items-center">
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-3 fw-bold'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div className='firebaseHooksBehaviour mt-3 text-center'>
                {errorElement}
                {loadingElement}
            </div>
            <div className="social-login-btn">
                <p className='text-dark text-center fw-bold'>To continue, log in to Spotify.</p>
                <button onClick={() => signInWithGoogle()} className='btn d-block my-2 border-secondary rounded-pill w-50 mx-auto'>
                    <img src={google} alt="" />
                    <span className='px-2'>Continue with Google</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-primary d-block my-2 border rounded-pill w-50 mx-auto'>
                    <img src={facebook} alt="" />
                    <span className='px-2'>Continue with Facebook</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark d-block my-2 border rounded-pill w-50 mx-auto'>
                    <img src={github} alt="" />
                    <span className='px-2'>Continue with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;