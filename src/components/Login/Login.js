import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(user);
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div className='w-75 mx-auto p-5 rounded-3 my-5 shadow-lg'>
            <div>
                <h2 className='text-info text-center'>Please Login</h2>
                <div className="col-12 my-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-12">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>


                <div className="col-12 my-3">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>

                <h5 className="text-center">or login with</h5>
                <div className='col-12 text-center'>
                    <button type="submit" onClick={handleGoogleSignIn} className="btn btn-danger" >Google Sign</button>
                    <button type="submit" className="btn btn-primary ms-3">Facebook Sign</button>
                </div>
            </div>
        </div>
    );
};

export default Login;