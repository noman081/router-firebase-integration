import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-lg-flex justify-content-between align-items-center">
                    <div>
                        <Link className='navbar-brand' to='/'>Router Firebase</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/orders'>Orders</Link>
                            </li>
                            {
                                user ?
                                    <>
                                        <li className="nav-item">{user.displayName}</li>
                                        <button onClick={handleSignOut} className="btn btn-link">Sign Out</button>
                                    </>
                                    : <>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to='/login'>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to='/register'>Register</Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;